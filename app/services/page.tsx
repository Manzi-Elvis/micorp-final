import type { Metadata } from "next"
import ServicesPageClient from "./services-client"

export const metadata: Metadata = {
  title: "Our Services | Mirror Corporation - Custom Software, AI, Cybersecurity & Cloud Solutions",
  description: "Comprehensive technology services including custom software development, web & mobile apps, AI/ML solutions, cybersecurity, cloud services, and data analytics. Expert team based in Rwanda serving Africa and beyond.",
  keywords: [
    "custom software development",
    "web development services",
    "mobile app development",
    "AI machine learning solutions",
    "cybersecurity services",
    "cloud computing solutions",
    "data analytics services",
    "database solutions",
    "technology consulting",
    "software outsourcing",
    "digital transformation",
    "enterprise software",
    "e-commerce development",
    "API development",
    "UI/UX design",
    "cloud migration",
    "IT consulting Rwanda",
    "technology solutions Africa",
    "software development company",
    "tech services provider"
  ],
  openGraph: {
    title: "Our Services | Mirror Corporation - Custom Software, AI, Cybersecurity & Cloud Solutions",
    description: "Comprehensive technology services including custom software development, web & mobile apps, AI/ML solutions, cybersecurity, cloud services, and data analytics. Expert team based in Rwanda serving Africa and beyond.",
    url: "https://micorp.pro/services",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Our Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Mirror Corporation - Custom Software, AI, Cybersecurity & Cloud Solutions",
    description: "Comprehensive technology services including custom software development, web & mobile apps, AI/ML solutions, cybersecurity, cloud services, and data analytics. Expert team based in Rwanda serving Africa and beyond.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
