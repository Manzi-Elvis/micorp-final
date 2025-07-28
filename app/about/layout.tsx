import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Micorp - Our Story & Values",
  description: "Learn about Micorp's journey, our core values of innovation, excellence, collaboration, and integrity. Meet our founder and discover what drives our technology solutions.",
  keywords: [
    "about Micorp",
    "Micorp story",
    "Micorp values",
    "Micorp founder",
    "technology company",
    "software development company",
    "innovation",
    "excellence",
    "collaboration",
    "integrity",
  ],
  openGraph: {
    title: "About Micorp - Our Story & Values",
    description: "Learn about Micorp's journey, our core values of innovation, excellence, collaboration, and integrity. Meet our founder and discover what drives our technology solutions.",
    url: "https://micorp.pro/about",
    siteName: "Micorp",
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
    title: "About Micorp - Our Story & Values",
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