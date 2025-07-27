"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const { t } = useTranslations()

  return (
    <section className="container px-4">
      <div className="bg-blue-600 text-white rounded-xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">{t("cta.title")}</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t("cta.subtitle")}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/request-job">{t("cta.contactUs")}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10"
            asChild
          >
            <Link href="/services" className="flex items-center gap-1">
              {t("cta.exploreServices")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

