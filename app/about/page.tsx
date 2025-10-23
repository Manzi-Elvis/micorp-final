// app/about/page.tsx

import type { Metadata } from "next"
import AboutPageClient from "./about-client"

export const metadata: Metadata = {
  title: "About Us | Mirror Corporation - Technology Solutions & Software Development",
  description: "Learn about Mirror Corporation, a Rwanda-based technology company delivering custom software, AI, cybersecurity, and cloud solutions. Meet our expert team and discover our mission to drive digital transformation across Africa.",
  keywords: [
    "about Mirror Corporation",
    "Rwanda technology company",
    "software development team",
    "technology solutions Rwanda",
    "digital transformation Africa",
    "custom software development",
    "AI engineering team",
    "cybersecurity experts",
    "cloud solutions provider",
    "technology consulting Rwanda",
    "software outsourcing Africa",
    "tech company Kigali",
    "Mirror Corporation team",
    "technology innovation Rwanda",
    "software engineering team",
    "digital solutions provider",
    "technology partner Africa",
    "software development company",
    "tech startup Rwanda",
    "innovation technology solutions"
  ],
  openGraph: {
    title: "About Us | Mirror Corporation - Technology Solutions & Software Development",
    description: "Learn about Mirror Corporation, a Rwanda-based technology company delivering custom software, AI, cybersecurity, and cloud solutions. Meet our expert team and discover our mission to drive digital transformation across Africa.",
    url: "https://micorp.pro/about",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mirror Corporation - Technology Solutions & Software Development",
    description: "Learn about Mirror Corporation, a Rwanda-based technology company delivering custom software, AI, cybersecurity, and cloud solutions. Meet our expert team and discover our mission to drive digital transformation across Africa.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}

