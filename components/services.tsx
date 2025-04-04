"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "@/hooks/use-translations"
import { Code, Globe, Smartphone, Database, LineChart, ShieldCheck, Cloud, Cpu } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useTranslations()

  const services = [
    {
      title: t("services.customSoftware.title"),
      description: t("services.customSoftware.description"),
      icon: <Code className="h-6 w-6 text-blue-600" />,
    },
    {
      title: t("services.webDevelopment.title"),
      description: t("services.webDevelopment.description"),
      icon: <Globe className="h-6 w-6 text-blue-600" />,
    },
    {
      title: t("services.mobileDevelopment.title"),
      description: t("services.mobileDevelopment.description"),
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
    },
    {
      title: t("services.databaseSolutions.title"),
      description: t("services.databaseSolutions.description"),
      icon: <Database className="h-6 w-6 text-blue-600" />,
    },
    {
      title: t("services.dataAnalytics.title"),
      description: t("services.dataAnalytics.description"),
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
    },
    {
      title: t("services.cybersecurity.title"),
      description: t("services.cybersecurity.description"),
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    },
    {
      title: t("services.cloudServices.title"),
      description: t("services.cloudServices.description"),
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
    },
    {
      title: t("services.aiMl.title"),
      description: t("services.aiMl.description"),
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <section className="container px-4 py-16" ref={ref}>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{t("services.sectionTitle")}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("services.sectionSubtitle")}</p>
      </div>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md"
            style={{
              transitionDelay: `${0.1 * index}s`,
            }}
          >
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-center">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

