import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Micorp Technology Solutions",
  description: "Explore Micorp's comprehensive technology services including web development, mobile apps, AI/ML, cybersecurity, cloud services, database solutions, and data analytics.",
  keywords: [
    "Micorp services",
    "web development services",
    "mobile app development",
    "AI/ML services",
    "cybersecurity services",
    "cloud services",
    "database solutions",
    "data analytics",
    "custom software development",
    "technology consulting",
    "software development company",
  ],
  openGraph: {
    title: "Services - Micorp Technology Solutions",
    description: "Explore Micorp's comprehensive technology services including web development, mobile apps, AI/ML, cybersecurity, cloud services, database solutions, and data analytics.",
    url: "https://micorp.pro/services",
    siteName: "Micorp",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Micorp Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Micorp Technology Solutions",
    description: "Explore Micorp's comprehensive technology services including web development, mobile apps, AI/ML, cybersecurity, cloud services, database solutions, and data analytics.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesLayout({
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
            "name": "Micorp Technology Services",
            "description": "Comprehensive technology services offered by Micorp",
            "url": "https://micorp.pro/services",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Custom Software Development",
                "description": "Tailored software solutions for enterprise needs",
                "url": "https://micorp.pro/services#custom-software"
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Web Development",
                "description": "Modern web applications and e-commerce solutions",
                "url": "https://micorp.pro/services#web-development"
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Mobile App Development",
                "description": "iOS and Android mobile applications",
                "url": "https://micorp.pro/services#mobile-development"
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Database Solutions",
                "description": "Database design, optimization, and migration",
                "url": "https://micorp.pro/services#database"
              },
              {
                "@type": "Service",
                "position": 5,
                "name": "Data Analytics",
                "description": "Business intelligence and predictive analytics",
                "url": "https://micorp.pro/services#analytics"
              },
              {
                "@type": "Service",
                "position": 6,
                "name": "Cybersecurity",
                "description": "Security audits, penetration testing, and compliance",
                "url": "https://micorp.pro/services#cybersecurity"
              },
              {
                "@type": "Service",
                "position": 7,
                "name": "Cloud Services",
                "description": "AWS, Azure, and Google Cloud solutions",
                "url": "https://micorp.pro/services#cloud"
              },
              {
                "@type": "Service",
                "position": 8,
                "name": "AI/ML Services",
                "description": "Machine learning models and AI solutions",
                "url": "https://micorp.pro/services#ai-ml"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
} 