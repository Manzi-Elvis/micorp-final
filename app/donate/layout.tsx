import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate - Support Mirror Corporation Technology Projects",
  description: "Support Mirror Corporation's technology initiatives and open-source projects. Your donations help us develop innovative solutions and contribute to the technology community.",
  keywords: [
    "donate to Mirror Corporation",
    "donate to Micorp",
    "support technology projects",
    "open-source support",
    "technology donations",
    "software development support",
    "innovation funding",
    "technology community support",
  ],
  openGraph: {
    title: "Donate - Support Mirror Corporation Technology Projects",
    description: "Support Mirror Corporation's technology initiatives and open-source projects. Your donations help us develop innovative solutions and contribute to the technology community.",
    url: "https://micorp.pro/donate",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
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
    description: "Support Mirror Corporation's technology initiatives and open-source projects. Your donations help us develop innovative solutions and contribute to the technology community.",
    images: ["/brand/logo.png"],
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