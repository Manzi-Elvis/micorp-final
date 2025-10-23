import type React from "react"
import type { Metadata } from "next"
import RequestProjectPageClient from "./request-project-client"
export const metadata: Metadata = {
  title: "Request a Project | Mirror Corporation - Get Your Custom Software Development Quote",
  description: "Submit your project requirements to Mirror Corporation for custom software development, web applications, mobile apps, AI solutions, and digital transformation. Get a free quote from our expert team.",
  keywords: [
    "request project quote",
    "custom software development quote",
    "web development project request",
    "mobile app development quote",
    "AI solutions project",
    "digital transformation project",
    "software development consultation",
    "technology project proposal",
    "custom software quote",
    "web application development",
    "mobile application development",
    "AI machine learning project",
    "cybersecurity project",
    "cloud services project",
    "technology consulting quote",
    "software development services",
    "digital solutions project",
    "technology implementation",
    "software engineering project",
    "innovation technology project"
  ],
  openGraph: {
    title: "Request a Project | Mirror Corporation - Get Your Custom Software Development Quote",
    description: "Submit your project requirements to Mirror Corporation for custom software development, web applications, mobile apps, AI solutions, and digital transformation. Get a free quote from our expert team.",
    url: "https://micorp.pro/request-project",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Request a Project",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Project | Mirror Corporation - Get Your Custom Software Development Quote",
    description: "Submit your project requirements to Mirror Corporation for custom software development, web applications, mobile apps, AI solutions, and digital transformation. Get a free quote from our expert team.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/request-project",
  },
}

export default function RequestJobPage() {
  return <RequestProjectPageClient />
}
