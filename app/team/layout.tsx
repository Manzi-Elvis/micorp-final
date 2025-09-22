import type { Metadata } from "next"

const siteUrl = "https://micorp.pro"
const ogImage = `${siteUrl}/brand/logo.png`

export const metadata: Metadata = {
  title: "Team - Mirror Corporation Technology Experts",
  description:
    "Meet the technology experts at Mirror Corporation. Our cross-functional team of software engineers, designers, analysts, and product leaders delivers secure, scalable digital solutions.",
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
    "Rwanda tech talent",
  ],
  openGraph: {
    title: "Team - Mirror Corporation Technology Experts",
    description:
      "Meet the technology experts at Mirror Corporation. Our cross-functional team of software engineers, designers, analysts, and product leaders delivers secure, scalable digital solutions.",
    url: `${siteUrl}/team`,
    siteName: "Mirror Corporation",
    images: [
      {
        url: ogImage,
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
    description:
      "Meet the technology experts at Mirror Corporation. Our cross-functional team of software engineers, designers, analysts, and product leaders delivers secure, scalable digital solutions.",
    images: [ogImage],
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
            "url": `${siteUrl}/team`,
            "itemListElement": [
              {
                "@type": "Person",
                "position": 1,
                "name": "Chaste Djaziri",
                "jobTitle": "Founder & CEO",
                "url": `${siteUrl}/team#chaste`,
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
                "url": `${siteUrl}/team#amina`,
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
                "url": `${siteUrl}/team#faylinn`,
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
