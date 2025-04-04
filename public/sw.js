// Service Worker for offline functionality
const CACHE_NAME = "micorp-cache-v1"
const urlsToCache = ["/", "/offline", "/favicon.ico", "/manifest.json", "/globals.css", "/placeholder.svg"]

// Install event - cache the essential files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache")
        return cache.addAll(urlsToCache)
      })
      .then(() => self.skipWaiting()), // Force the waiting service worker to become the active service worker
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
            return null
          }),
        )
      })
      .then(() => self.clients.claim()), // Take control of all clients
  )
})

// Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }

      // Clone the request because it's a one-time use stream
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest)
        .then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // Clone the response because it's a one-time use stream
          const responseToCache = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            // Don't cache if it's an API request or similar
            if (event.request.url.includes("/api/")) return

            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // If the network is unavailable, try to return the offline page
          if (event.request.mode === "navigate") {
            return caches.match("/offline")
          }

          // For images, return a placeholder
          if (event.request.destination === "image") {
            return caches.match("/placeholder.svg")
          }

          // Return nothing for other resources
          return new Response(null, { status: 504 })
        })
    }),
  )
})

// Listen for messages from clients
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

