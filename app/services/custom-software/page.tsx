import type { Metadata } from "next"
import CustomSoftwareClient from "./custom-software-client"

export const metadata: Metadata = {
  title: "Custom Software Development | Mirror Corporation - Tailored Business Solutions",
  description: "Professional custom software development services including enterprise applications, workflow automation, system integration, and bespoke business solutions. Expert team delivering scalable software solutions.",
  keywords: [
    "custom software development",
    "enterprise software development",
    "business software solutions",
    "workflow automation",
    "system integration",
    "bespoke software",
    "custom application development",
    "software consulting",
    "enterprise solutions",
    "business process automation",
    "custom software company",
    "software development services",
    "enterprise application development",
    "custom software solutions",
    "business software consulting",
    "software development Rwanda",
    "custom software agency",
    "enterprise software consulting",
    "business automation software",
    "custom software development team"
  ],
  openGraph: {
    title: "Custom Software Development | Mirror Corporation - Tailored Business Solutions",
    description: "Professional custom software development services including enterprise applications, workflow automation, system integration, and bespoke business solutions. Expert team delivering scalable software solutions.",
    url: "https://micorp.pro/services/custom-software",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Custom Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development | Mirror Corporation - Tailored Business Solutions",
    description: "Professional custom software development services including enterprise applications, workflow automation, system integration, and bespoke business solutions. Expert team delivering scalable software solutions.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services/custom-software",
  },
}

export default function CustomSoftwarePage() {
  return <CustomSoftwareClient />
}
