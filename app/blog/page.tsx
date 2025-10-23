// app/blog/page.tsx

import type { Metadata } from "next"
import BlogPageClient from "./blog-client"

export const metadata: Metadata = {
  title: "Technology Blog | Mirror Corporation - Software Development Insights & Tech News",
  description: "Stay updated with the latest technology insights, software development trends, AI innovations, cybersecurity best practices, and digital transformation strategies from Mirror Corporation's expert team.",
  keywords: [
    "technology blog",
    "software development blog",
    "AI technology insights",
    "cybersecurity blog",
    "cloud computing blog",
    "digital transformation blog",
    "technology trends",
    "software engineering blog",
    "tech innovation blog",
    "programming insights",
    "technology news Rwanda",
    "software development tips",
    "AI machine learning blog",
    "cybersecurity best practices",
    "cloud services blog",
    "technology consulting blog",
    "digital solutions blog",
    "tech industry insights",
    "software development trends",
    "technology innovation blog"
  ],
  openGraph: {
    title: "Technology Blog | Mirror Corporation - Software Development Insights & Tech News",
    description: "Stay updated with the latest technology insights, software development trends, AI innovations, cybersecurity best practices, and digital transformation strategies from Mirror Corporation's expert team.",
    url: "https://micorp.pro/blog",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Technology Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Blog | Mirror Corporation - Software Development Insights & Tech News",
    description: "Stay updated with the latest technology insights, software development trends, AI innovations, cybersecurity best practices, and digital transformation strategies from Mirror Corporation's expert team.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}

