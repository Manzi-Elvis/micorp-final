import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/private/",
          "/admin/",
          "/api/",
          "/_next/",
          "/sw.js",
          "/offline",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/private/",
          "/admin/",
          "/api/",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/private/",
          "/admin/",
          "/api/",
        ],
      },
    ],
    sitemap: "https://micorp.pro/sitemap.xml",
    host: "https://micorp.pro",
  }
}

