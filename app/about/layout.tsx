import type { Metadata } from "next"

const siteUrl = "https://micorp.pro"
const ogImage = `${siteUrl}/brand/logo.png`

export const metadata: Metadata = {
  title: "About Mirror Corporation - Rwanda Technology Partner",
  description:
    "Discover Mirror Corporation's mission, values, and leadership team. We are a Kigali-based technology company delivering software, AI, and secure digital solutions for ambitious organisations.",
  keywords: [
    "About Mirror Corporation",
    "About Micorp",
    "Rwanda technology company",
    "technology innovation",
    "software development team",
    "digital transformation partner",
    "technology leadership",
  ],
  openGraph: {
    title: "About Mirror Corporation - Rwanda Technology Partner",
    description:
      "Discover Mirror Corporation's mission, values, and leadership team. We are a Kigali-based technology company delivering software, AI, and secure digital solutions for ambitious organisations.",
    url: `${siteUrl}/about`,
    siteName: "Mirror Corporation",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "About Mirror Corporation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mirror Corporation - Rwanda Technology Partner",
    description:
      "Discover Mirror Corporation's mission, values, and leadership team. We are a Kigali-based technology company delivering software, AI, and secure digital solutions for ambitious organisations.",
    images: [ogImage],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutLayout({
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
            "@type": "AboutPage",
            "name": "About Mirror Corporation",
            "url": `${siteUrl}/about`,
            "description": "Learn about Mirror Corporation's mission, values, and leadership team.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Mirror Corporation",
              "url": siteUrl,
              "logo": ogImage,
              "foundingLocation": "Kigali, Rwanda",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@micorp.pro",
                "telephone": "+250-794-578-640"
              },
              "sameAs": [
                "https://github.com/chaste-djaziri",
                "https://instagram.com/chaste_djaziri/",
                "https://www.linkedin.com/in/chaste-djaziri-6bb4b62a5/"
              ]
            }
          })
        }}
      />
      {children}
    </>
  )
}
