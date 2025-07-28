import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Micorp - Get in Touch",
  description: "Contact Micorp for technology solutions, project inquiries, or collaboration opportunities. Reach out to our team for web development, mobile apps, AI/ML, and more.",
  keywords: [
    "contact Micorp",
    "Micorp contact",
    "technology consulting contact",
    "software development contact",
    "project inquiry",
    "technology solutions contact",
    "web development contact",
    "mobile app development contact",
  ],
  openGraph: {
    title: "Contact Micorp - Get in Touch",
    description: "Contact Micorp for technology solutions, project inquiries, or collaboration opportunities. Reach out to our team for web development, mobile apps, AI/ML, and more.",
    url: "https://micorp.pro/contact",
    siteName: "Micorp",
    images: [
      {
        url: "/brand/logo.png",
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
    title: "Contact Micorp - Get in Touch",
    description: "Contact Micorp for technology solutions, project inquiries, or collaboration opportunities. Reach out to our team for web development, mobile apps, AI/ML, and more.",
    images: ["/brand/logo.png"],
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
            "name": "Contact Micorp",
            "description": "Contact Micorp for technology solutions, project inquiries, or collaboration opportunities.",
            "url": "https://micorp.pro/contact",
            "mainEntity": {
              "@type": "ContactPoint",
              "telephone": "+250-xxx-xxx-xxx",
              "contactType": "customer service",
              "email": "contact@micorp.pro",
              "availableLanguage": "English"
            },
            "potentialAction": {
              "@type": "ContactAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://micorp.pro/contact"
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