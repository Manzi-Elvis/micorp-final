import type { Metadata } from "next"
import DonatePageClient from "./donate-client"

export const metadata: Metadata = {
  title: "Donate | Mirror Corporation - Support Technology Innovation in Africa",
  description: "Support Mirror Corporation's mission to drive digital transformation across Africa. Your donations help us develop innovative technology solutions, provide tech education, and empower communities through technology.",
  keywords: [
    "donate to Mirror Corporation",
    "support technology innovation",
    "digital transformation Africa",
    "technology education support",
    "software development funding",
    "tech innovation donation",
    "digital solutions funding",
    "technology advancement Africa",
    "software development support",
    "tech education funding",
    "innovation technology donation",
    "digital platform development",
    "technology implementation support",
    "software engineering funding",
    "tech startup support",
    "digital transformation funding",
    "technology solutions donation",
    "innovation funding Africa",
    "tech development support",
    "digital innovation funding"
  ],
  openGraph: {
    title: "Donate | Mirror Corporation - Support Technology Innovation in Africa",
    description: "Support Mirror Corporation's mission to drive digital transformation across Africa. Your donations help us develop innovative technology solutions, provide tech education, and empower communities through technology.",
    url: "https://micorp.pro/donate",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Donate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate | Mirror Corporation - Support Technology Innovation in Africa",
    description: "Support Mirror Corporation's mission to drive digital transformation across Africa. Your donations help us develop innovative technology solutions, provide tech education, and empower communities through technology.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/donate",
  },
}

export default function DonatePage() {
  return <DonatePageClient />
}
