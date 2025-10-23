import type { Metadata } from "next"
import WebDevelopmentClient from "./web-development-client"

export const metadata: Metadata = {
  title: "Web Development Services | Mirror Corporation - Custom Websites & Web Applications",
  description: "Professional web development services including custom websites, web applications, e-commerce platforms, and CMS solutions. Expert team delivering modern, responsive, and scalable web solutions.",
  keywords: [
    "web development services",
    "custom website development",
    "web application development",
    "e-commerce development",
    "CMS development",
    "responsive web design",
    "frontend development",
    "backend development",
    "full-stack development",
    "React development",
    "Next.js development",
    "Node.js development",
    "web development Rwanda",
    "custom web solutions",
    "web development company",
    "professional web development",
    "modern web applications",
    "scalable web solutions",
    "web development consultation",
    "web development agency"
  ],
  openGraph: {
    title: "Web Development Services | Mirror Corporation - Custom Websites & Web Applications",
    description: "Professional web development services including custom websites, web applications, e-commerce platforms, and CMS solutions. Expert team delivering modern, responsive, and scalable web solutions.",
    url: "https://micorp.pro/services/web-development",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Mirror Corporation - Custom Websites & Web Applications",
    description: "Professional web development services including custom websites, web applications, e-commerce platforms, and CMS solutions. Expert team delivering modern, responsive, and scalable web solutions.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services/web-development",
  },
}

export default function WebDevelopmentPage() {
  return <WebDevelopmentClient />
}
