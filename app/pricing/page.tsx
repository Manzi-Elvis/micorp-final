import type { Metadata } from "next"
import PricingPageClient from "./pricing-client"

export const metadata: Metadata = {
  title: "Pricing | Mirror Corporation - Web Development, Hosting, Design & Growth Plans",
  description:
    "Transparent pricing for web development, hosting, UI/UX design, SEO, and cloud services. Choose monthly, annual, or one-time project options tailored to your goals.",
  openGraph: {
    title: "Pricing | Mirror Corporation - Web Development, Hosting, Design & Growth Plans",
    description:
      "Transparent pricing for web development, hosting, UI/UX design, SEO, and cloud services with monthly, annual, and one-time options.",
    url: "https://micorp.pro/pricing",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation Pricing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Mirror Corporation - Web Development, Hosting, Design & Growth Plans",
    description:
      "Transparent pricing for web development, hosting, UI/UX design, SEO, and cloud services with monthly, annual, and one-time options.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/pricing",
  },
}

export default function PricingPage() {
  return <PricingPageClient />
}
