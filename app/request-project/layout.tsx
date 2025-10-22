import type { Metadata } from "next"

const siteUrl = "https://micorp.pro"
const ogImage = `${siteUrl}/brand/logo.png`

export const metadata: Metadata = {
  title: "Request a Project - Mirror Corporation Project Inquiry",
  description:
    "Submit project requirements to Mirror Corporation for a tailored proposal covering software development, UX, AI/ML, cybersecurity, and cloud modernisation.",
  keywords: [
    "request project Mirror Corporation",
    "request project Micorp",
    "project inquiry",
    "custom software development",
    "web development proposal",
    "mobile app development",
    "technology project",
    "software development quote",
    "project requirements",
    "Rwanda software partner",
  ],
  openGraph: {
    title: "Request a Project - Mirror Corporation Project Inquiry",
    description:
      "Submit project requirements to Mirror Corporation for a tailored proposal covering software development, UX, AI/ML, cybersecurity, and cloud modernisation.",
    url: `${siteUrl}/request-project`,
    siteName: "Mirror Corporation",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Request a Project - Micorp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Project - Mirror Corporation Project Inquiry",
    description:
      "Submit project requirements to Mirror Corporation for a tailored proposal covering software development, UX, AI/ML, cybersecurity, and cloud modernisation.",
    images: [ogImage],
  },
  alternates: {
    canonical: "/request-project",
  },
}

export default function RequestJobLayout({
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
            "@type": "Service",
            "name": "Mirror Corporation Technology Services",
            "description": "Submit your project requirements to Mirror Corporation. Get a custom proposal for web development, mobile apps, AI/ML, cybersecurity, and other technology solutions.",
            "url": `${siteUrl}/request-project`,
            "provider": {
              "@type": "Organization",
              "name": "Mirror Corporation",
              "url": siteUrl
            },
            "potentialAction": {
              "@type": "RequestAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/request-project`
              },
              "result": {
                "@type": "Service"
              }
            },
            "serviceType": [
              "Web Development",
              "Mobile App Development",
              "AI/ML Services",
              "Cybersecurity",
              "Cloud Services",
              "Database Solutions",
              "Data Analytics"
            ]
          })
        }}
      />
      {children}
    </>
  )
} 
