import type { Metadata } from "next"
import DatabaseClient from "./database-client"

export const metadata: Metadata = {
  title: "Database Solutions | Mirror Corporation - Database Design & Management",
  description: "Professional database solutions including database design, optimization, migration, and management services. Expert team delivering scalable and secure database systems for your business.",
  keywords: [
    "database solutions",
    "database design",
    "database optimization",
    "database migration",
    "database management",
    "SQL database",
    "NoSQL database",
    "database consulting",
    "database performance",
    "database security",
    "database administration",
    "database development",
    "database services",
    "database company",
    "database consulting Rwanda",
    "database solutions provider",
    "database architecture",
    "database backup",
    "database recovery",
    "database maintenance"
  ],
  openGraph: {
    title: "Database Solutions | Mirror Corporation - Database Design & Management",
    description: "Professional database solutions including database design, optimization, migration, and management services. Expert team delivering scalable and secure database systems for your business.",
    url: "https://micorp.pro/services/database",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Database Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Database Solutions | Mirror Corporation - Database Design & Management",
    description: "Professional database solutions including database design, optimization, migration, and management services. Expert team delivering scalable and secure database systems for your business.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services/database",
  },
}

export default function DatabasePage() {
  return <DatabaseClient />
}
