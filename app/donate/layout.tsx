import type { Metadata } from "next"

const siteUrl = "https://micorp.pro"
const ogImage = `${siteUrl}/brand/logo.png`

export const metadata: Metadata = {
  title: "Donate - Support Mirror Corporation Technology Projects",
  description:
    "Support Mirror Corporation's technology initiatives, open-source projects, and community training. Your contribution helps us expand innovation across Africa and global markets.",
  keywords: [
    "donate to Mirror Corporation",
    "donate to Micorp",
    "support technology projects",
    "open-source support",
    "technology donations",
    "software development support",
    "innovation funding",
    "technology community support",
    "support African tech",
  ],
  openGraph: {
    title: "Donate - Support Mirror Corporation Technology Projects",
    description:
      "Support Mirror Corporation's technology initiatives, open-source projects, and community training. Your contribution helps us expand innovation across Africa and global markets.",
    url: `${siteUrl}/donate`,
    siteName: "Mirror Corporation",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Donate to Micorp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate - Support Mirror Corporation Technology Projects",
    description:
      "Support Mirror Corporation's technology initiatives, open-source projects, and community training. Your contribution helps us expand innovation across Africa and global markets.",
    images: [ogImage],
  },
  alternates: {
    canonical: "/donate",
  },
}

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
