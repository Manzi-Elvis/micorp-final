import type { Metadata } from "next"
import CloudClient from "./cloud-client"

export const metadata: Metadata = {
  title: "Cloud Services | Mirror Corporation - Cloud Computing & Migration",
  description: "Professional cloud services including cloud migration, infrastructure setup, cloud optimization, and managed cloud solutions. Expert team delivering scalable and secure cloud infrastructure.",
  keywords: [
    "cloud services",
    "cloud migration",
    "cloud computing",
    "cloud infrastructure",
    "AWS services",
    "Azure services",
    "Google Cloud",
    "cloud consulting",
    "cloud optimization",
    "managed cloud services",
    "cloud security",
    "cloud backup",
    "cloud solutions",
    "cloud company",
    "cloud services Rwanda",
    "cloud consulting services",
    "cloud implementation",
    "cloud architecture",
    "cloud monitoring",
    "cloud support"
  ],
  openGraph: {
    title: "Cloud Services | Mirror Corporation - Cloud Computing & Migration",
    description: "Professional cloud services including cloud migration, infrastructure setup, cloud optimization, and managed cloud solutions. Expert team delivering scalable and secure cloud infrastructure.",
    url: "https://micorp.pro/services/cloud",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Cloud Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Services | Mirror Corporation - Cloud Computing & Migration",
    description: "Professional cloud services including cloud migration, infrastructure setup, cloud optimization, and managed cloud solutions. Expert team delivering scalable and secure cloud infrastructure.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services/cloud",
  },
}

export default function CloudPage() {
  return <CloudClient />
}
