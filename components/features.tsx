"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { useTranslations } from "@/hooks/use-translations"
import { CheckCircle } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useTranslations()

  const features = [
    t("features.feature1"),
    t("features.feature2"),
    t("features.feature3"),
    t("features.feature4"),
    t("features.feature5"),
    t("features.feature6"),
  ]

  return (
    <section className="container px-4 py-16" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div
          className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateX(-20px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <Image src="/placeholder.svg?height=800&width=600" alt="Features" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/5"></div>
        </div>

        <div
          className="space-y-6"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateX(20px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">{t("features.title")}</h2>
          <p className="text-xl text-muted-foreground">{t("features.subtitle")}</p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

