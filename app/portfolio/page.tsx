import type { Metadata } from "next"
import PortfolioPageClient from "./portfolio-client"

export const metadata: Metadata = {
  title: "Our Portfolio | Mirror Corporation - Software Development Projects & Case Studies",
  description: "Explore our portfolio of successful software development projects including web applications, mobile apps, AI solutions, and digital platforms. See how Mirror Corporation delivers innovative technology solutions across Africa.",
  keywords: [
    "software development portfolio",
    "web development projects",
    "mobile app portfolio",
    "AI solutions projects",
    "technology case studies",
    "software development examples",
    "digital transformation projects",
    "custom software solutions",
    "web application portfolio",
    "mobile application development",
    "technology projects Rwanda",
    "software development showcase",
    "digital solutions portfolio",
    "tech project examples",
    "innovation projects",
    "software engineering portfolio",
    "technology solutions showcase",
    "digital platform development",
    "software development success stories",
    "technology implementation examples"
  ],
  openGraph: {
    title: "Our Portfolio | Mirror Corporation - Software Development Projects & Case Studies",
    description: "Explore our portfolio of successful software development projects including web applications, mobile apps, AI solutions, and digital platforms. See how Mirror Corporation delivers innovative technology solutions across Africa.",
    url: "https://micorp.pro/portfolio",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Our Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | Mirror Corporation - Software Development Projects & Case Studies",
    description: "Explore our portfolio of successful software development projects including web applications, mobile apps, AI solutions, and digital platforms. See how Mirror Corporation delivers innovative technology solutions across Africa.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/portfolio",
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}

