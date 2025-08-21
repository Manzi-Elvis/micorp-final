import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Mirror Corporation Technology Insights",
  description: "Stay updated with the latest technology trends, insights, and best practices from Mirror Corporation. Read about AI/ML, web development, cybersecurity, and technology innovation.",
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
  ],
  openGraph: {
    title: "Blog - Mirror Corporation Technology Insights",
    description: "Stay updated with the latest technology trends, insights, and best practices from Mirror Corporation. Read about AI/ML, web development, cybersecurity, and technology innovation.",
    url: "https://micorp.pro/blog",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
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
    description: "Stay updated with the latest technology trends, insights, and best practices from Mirror Corporation. Read about AI/ML, web development, cybersecurity, and technology innovation.",
    images: ["/brand/logo.png"],
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