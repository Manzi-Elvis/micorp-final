import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio - Mirror Corporation Projects & Case Studies",
  description: "Explore Mirror Corporation's portfolio of successful technology projects including web applications, mobile apps, healthcare solutions, financial systems, and IoT platforms.",
  keywords: [
    "Micorp portfolio",
    "Mirror Corporation portfolio",
    "technology projects",
    "web applications",
    "mobile apps",
    "healthcare solutions",
    "financial systems",
    "IoT platforms",
    "case studies",
    "software projects",
    "technology solutions",
  ],
  openGraph: {
    title: "Portfolio - Mirror Corporation Projects & Case Studies",
    description: "Explore Mirror Corporation's portfolio of successful technology projects including web applications, mobile apps, healthcare solutions, financial systems, and IoT platforms.",
    url: "https://micorp.pro/portfolio",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Micorp Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Mirror Corporation Projects & Case Studies",
    description: "Explore Mirror Corporation's portfolio of successful technology projects including web applications, mobile apps, healthcare solutions, financial systems, and IoT platforms.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/portfolio",
  },
}

export default function PortfolioLayout({
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
            "@type": "ItemList",
            "name": "Mirror Corporation Portfolio Projects",
            "description": "Successful technology projects completed by Mirror Corporation",
            "url": "https://micorp.pro/portfolio",
            "itemListElement": [
              {
                "@type": "CreativeWork",
                "position": 1,
                "name": "Watch Health App",
                "description": "Healthcare monitoring application with real-time data tracking",
                "url": "https://micorp.pro/portfolio#watch",
                "creator": {
                  "@type": "Organization",
                  "name": "Micorp"
                },
                "genre": "Healthcare Technology"
              },
              {
                "@type": "CreativeWork",
                "position": 2,
                "name": "Yup Analytics Platform",
                "description": "Data analytics and IoT platform for business intelligence",
                "url": "https://micorp.pro/portfolio#yup",
                "creator": {
                  "@type": "Organization",
                  "name": "Micorp"
                },
                "genre": "Data Analytics"
              },
              {
                "@type": "CreativeWork",
                "position": 3,
                "name": "FinEdge Financial System",
                "description": "Real-time financial management and security platform",
                "url": "https://micorp.pro/portfolio#finedge",
                "creator": {
                  "@type": "Organization",
                  "name": "Micorp"
                },
                "genre": "Financial Technology"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
} 