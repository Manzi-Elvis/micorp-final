import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import InteractiveTechSection from "@/components/interactive-tech-section"

export const metadata: Metadata = {
  title: "Reflecting Excellence in Technology Solutions",
  description:
    "Mirror Corporation (Micorp) - Where innovation meets integrity. We deliver top-tier technology solutions that inspire and empower across industries.",
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

