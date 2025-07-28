// app/page.tsx

import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import InteractiveTechSection from "@/components/interactive-tech-section"

export const metadata: Metadata = {
  title: "Micorp - Technology Solutions & Software Development",
  description:
    "Micorp delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services. Transform your business with our expert team.",
  keywords: [
    "Micorp",
    "software development",
    "web development",
    "mobile app development",
    "technology solutions",
    "digital transformation",
    "AI/ML services",
    "cybersecurity",
    "cloud services",
    "database solutions",
    "data analytics",
    "custom software",
    "e-commerce development",
    "UI/UX design",
    "API development",
    "technology consulting",
  ],
  openGraph: {
    title: "Micorp - Technology Solutions & Software Development",
    description: "Micorp delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services.",
    url: "https://micorp.pro",
    siteName: "Micorp",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Micorp - Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Micorp - Technology Solutions & Software Development",
    description: "Micorp delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <InteractiveTechSection />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}

