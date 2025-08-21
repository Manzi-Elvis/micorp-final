import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team - Mirror Corporation Technology Experts",
  description: "Meet the talented team of technology experts at Mirror Corporation. Our diverse team of developers, designers, data scientists, and technology professionals deliver innovative solutions.",
  keywords: [
    "Mirror Corporation team",
    "Micorp team",
    "technology experts",
    "software developers",
    "UI/UX designers",
    "data scientists",
    "technology professionals",
    "development team",
    "technology consulting team",
  ],
  openGraph: {
    title: "Team - Mirror Corporation Technology Experts",
    description: "Meet the talented team of technology experts at Mirror Corporation. Our diverse team of developers, designers, data scientists, and technology professionals deliver innovative solutions.",
    url: "https://micorp.pro/team",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Micorp Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team - Mirror Corporation Technology Experts",
    description: "Meet the talented team of technology experts at Mirror Corporation. Our diverse team of developers, designers, data scientists, and technology professionals deliver innovative solutions.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/team",
  },
}

export default function TeamLayout({
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
            "name": "Mirror Corporation Team Members",
            "description": "Technology experts and professionals at Mirror Corporation",
            "url": "https://micorp.pro/team",
            "itemListElement": [
              {
                "@type": "Person",
                "position": 1,
                "name": "Chaste Djaziri",
                "jobTitle": "Founder & CEO",
                "url": "https://micorp.pro/team#chaste",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Micorp"
                },
                "sameAs": [
                  "https://github.com/chaste-djaziri",
                  "https://instagram.com/chaste_djaziri/"
                ]
              },
              {
                "@type": "Person",
                "position": 2,
                "name": "Amina",
                "jobTitle": "Project Manager",
                "url": "https://micorp.pro/team#amina",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Micorp"
                }
              },
              {
                "@type": "Person",
                "position": 3,
                "name": "Faylinn",
                "jobTitle": "Mobile Developer",
                "url": "https://micorp.pro/team#faylinn",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Micorp"
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
} 