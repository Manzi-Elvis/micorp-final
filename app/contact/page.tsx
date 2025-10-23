import type React from "react"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Contact Us | Mirror Corporation - Get in Touch for Technology Solutions",
  description: "Contact Mirror Corporation for custom software development, AI solutions, cybersecurity, and cloud services. Based in Kigali, Rwanda, serving clients across Africa and beyond. Get your free consultation today.",
  keywords: [
    "contact Mirror Corporation",
    "technology consulting contact",
    "software development consultation",
    "AI solutions contact",
    "cybersecurity services contact",
    "cloud services consultation",
    "technology partner contact",
    "software development inquiry",
    "digital transformation consultation",
    "technology solutions contact",
    "IT consulting Rwanda",
    "tech company contact",
    "software development company contact",
    "technology services inquiry",
    "digital solutions contact",
    "innovation technology contact",
    "software engineering consultation",
    "technology solutions provider contact",
    "digital platform development contact",
    "technology implementation consultation"
  ],
  openGraph: {
    title: "Contact Us | Mirror Corporation - Get in Touch for Technology Solutions",
    description: "Contact Mirror Corporation for custom software development, AI solutions, cybersecurity, and cloud services. Based in Kigali, Rwanda, serving clients across Africa and beyond. Get your free consultation today.",
    url: "https://micorp.pro/contact",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mirror Corporation - Get in Touch for Technology Solutions",
    description: "Contact Mirror Corporation for custom software development, AI solutions, cybersecurity, and cloud services. Based in Kigali, Rwanda, serving clients across Africa and beyond. Get your free consultation today.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
