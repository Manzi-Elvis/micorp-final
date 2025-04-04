"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useTranslations()
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote: t("testimonials.quote1"),
      author: "Sarah Johnson",
      position: "CTO, HealthTech Innovations",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote: t("testimonials.quote2"),
      author: "Michael Chen",
      position: "Founder, EcoSolutions",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote: t("testimonials.quote3"),
      author: "Emily Rodriguez",
      position: "Director of Operations, FinEdge",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-muted/30 py-16" ref={ref}>
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t("testimonials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <Card className="border-blue-200 dark:border-blue-900">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="text-blue-600">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="text-lg italic">{testimonials[activeIndex].quote}</p>
                  <div>
                    <p className="font-bold">{testimonials[activeIndex].author}</p>
                    <p className="text-muted-foreground">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

