import type { Metadata } from "next"

const siteUrl = "https://micorp.pro"
const ogImage = `${siteUrl}/brand/logo.png`

export const metadata: Metadata = {
  title: "Blog - Mirror Corporation Technology Insights",
  description:
    "Stay ahead with Mirror Corporation's expert commentary on software development, AI, cybersecurity, and digital transformation across Africa and the global tech ecosystem.",
  keywords: [
    "Micorp blog",
    "Mirror Corporation blog",
    "technology blog",
    "software development blog",
    "AI/ML insights",
    "web development tips",
    "cybersecurity blog",
    "technology trends",
    "innovation blog",
    "technology insights",
    "Rwanda tech news",
    "African digital transformation",
  ],
  openGraph: {
    title: "Blog - Mirror Corporation Technology Insights",
    description:
      "Stay ahead with Mirror Corporation's expert commentary on software development, AI, cybersecurity, and digital transformation across Africa and the global tech ecosystem.",
    url: `${siteUrl}/blog`,
    siteName: "Mirror Corporation",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Micorp Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Mirror Corporation Technology Insights",
    description:
      "Stay ahead with Mirror Corporation's expert commentary on software development, AI, cybersecurity, and digital transformation across Africa and the global tech ecosystem.",
    images: [ogImage],
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
