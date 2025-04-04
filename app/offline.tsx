"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function OfflineHandler() {
  const router = useRouter()

  useEffect(() => {
    // Register service worker for offline functionality
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log("ServiceWorker registration successful with scope: ", registration.scope)
          },
          (err) => {
            console.log("ServiceWorker registration failed: ", err)
          },
        )
      })
    }

    // Handle offline/online events
    const handleOfflineStatus = () => {
      if (!navigator.onLine) {
        router.push("/offline")
      }
    }

    window.addEventListener("offline", handleOfflineStatus)
    window.addEventListener("online", () => {
      console.log("Back online")
    })

    // Check initial status
    if (!navigator.onLine) {
      router.push("/offline")
    }

    return () => {
      window.removeEventListener("offline", handleOfflineStatus)
      window.removeEventListener("online", () => {})
    }
  }, [router])

  return null
}

