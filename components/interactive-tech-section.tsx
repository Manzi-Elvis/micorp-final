"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { useTranslations } from "@/hooks/use-translations"
import ThreeDModel from "@/components/3d-model"

export default function InteractiveTechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t } = useTranslations()

  return (
    <div className="container px-4" ref={ref}>
      <div
        className="space-y-4 text-center"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <h2 className="text-3xl font-bold">{t("interactiveTech.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{t("interactiveTech.description")}</p>
      </div>
      <ThreeDModel height={400} />
    </div>
  )
}

