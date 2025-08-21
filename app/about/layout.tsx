import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Mirror Corporation - Our Story & Values",
  description: "Learn about Micorp's journey, our core values of innovation, excellence, collaboration, and integrity. Meet our founder and discover what drives our technology solutions.",
  keywords: [
    "about Mirror Corporation",
    "about Micorp",
    "Mirror Corporation story",
    "Micorp story",
    "Mirror Corporation values",
    "Micorp values",
    "Mirror Corporation founder",
    "Micorp founder",
    "technology company",
    "software development company",
    "innovation",
    "excellence",
    "collaboration",
    "integrity",
  ],
  openGraph: {
    title: "About Mirror Corporation - Our Story & Values",
    description: "Learn about Mirror Corporation's journey, our core values of innovation, excellence, collaboration, and integrity. Meet our founder and discover what drives our technology solutions.",
    url: "https://micorp.pro/about",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "About Micorp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mirror Corporation - Our Story & Values",
    description: "Learn about Micorp's journey, our core values of innovation, excellence, collaboration, and integrity. Meet our founder and discover what drives our technology solutions.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 