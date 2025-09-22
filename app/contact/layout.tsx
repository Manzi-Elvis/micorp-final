import type { Metadata } from "next"

const siteUrl = "https://micorp.pro"
const ogImage = `${siteUrl}/brand/logo.png`

export const metadata: Metadata = {
  title: "Contact Mirror Corporation - Get in Touch",
  description:
    "Contact Mirror Corporation for technology partnerships, software projects, and consulting engagements. Our Kigali-based team responds quickly to web, mobile, AI, cybersecurity, and cloud enquiries.",
  keywords: [
    "contact Micorp",
    "contact Mirror Corporation",
    "Micorp contact",
    "Mirror Corporation contact",
    "technology consulting contact",
    "software development contact",
    "project inquiry",
    "technology solutions contact",
    "web development contact",
    "mobile app development contact",
    "Rwanda technology company",
  ],
  openGraph: {
    title: "Contact Mirror Corporation - Get in Touch",
    description:
      "Contact Mirror Corporation for technology partnerships, software projects, and consulting engagements. Our Kigali-based team responds quickly to web, mobile, AI, cybersecurity, and cloud enquiries.",
    url: `${siteUrl}/contact`,
    siteName: "Mirror Corporation",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Micorp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mirror Corporation - Get in Touch",
    description:
      "Contact Mirror Corporation for technology partnerships, software projects, and consulting engagements. Our Kigali-based team responds quickly to web, mobile, AI, cybersecurity, and cloud enquiries.",
    images: [ogImage],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Mirror Corporation",
            "description": "Contact Mirror Corporation for technology solutions, project inquiries, or collaboration opportunities.",
            "url": `${siteUrl}/contact`,
            "mainEntity": {
              "@type": "ContactPoint",
              "telephone": "+250-794-578-640",
              "contactType": "customer service",
              "email": "contact@micorp.pro",
              "availableLanguage": ["English", "French"]
            },
            "potentialAction": {
              "@type": "ContactAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/contact`
              },
              "result": {
                "@type": "ContactPage"
              }
            }
          })
        }}
      />
      {children}
    </>
  )
} 
