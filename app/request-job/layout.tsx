import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Mirror Corporation - Micorp Project Inquiry",
  description: "Submit your project requirements to Mirror Corporation. Get a custom proposal for web development, mobile apps, AI/ML, cybersecurity, and other technology solutions.",
  keywords: [
    "request job Mirror Corporation",
    "request job Micorp",
    "project inquiry",
    "custom software development",
    "web development proposal",
    "mobile app development",
    "technology project",
    "software development quote",
    "project requirements",
  ],
  openGraph: {
    title: "Request a Job - Mirror Corporation Project Inquiry",
    description: "Submit your project requirements to Mirror Corporation. Get a custom proposal for web development, mobile apps, AI/ML, cybersecurity, and other technology solutions.",
    url: "https://micorp.pro/request-job",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Request a Job - Micorp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Job - Mirror Corporation Project Inquiry",
    description: "Submit your project requirements to Mirror Corporation. Get a custom proposal for web development, mobile apps, AI/ML, cybersecurity, and other technology solutions.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/request-job",
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
            "url": "https://micorp.pro/request-job",
            "provider": {
              "@type": "Organization",
              "name": "Mirror Corporation",
              "url": "https://micorp.pro"
            },
            "potentialAction": {
              "@type": "RequestAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://micorp.pro/request-job"
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