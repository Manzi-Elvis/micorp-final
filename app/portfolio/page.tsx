"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function PortfolioPage() {
  const { t } = useTranslations()

  const projects = [
    {
      title: t("portfolioPage.projects.watch.title"),
      description: t("portfolioPage.projects.watch.description"),
      image: "/portfolio/watch.png?height=600&width=800",
      tags: [t("portfolioPage.tags.healthcare"), t("portfolioPage.tags.webApp"), t("portfolioPage.tags.mobileApp")],
      link: "#",
    },
    {
      title: t("portfolioPage.projects.yup.title"),
      description: t("portfolioPage.projects.yup.description"),
      image: "/portfolio/yup.png?height=600&width=800",
      tags: [t("portfolioPage.tags.dataAnalytics"), t("portfolioPage.tags.iot"), t("portfolioPage.tags.dashboard")],
      link: "#",
    },
    {
      title: t("portfolioPage.projects.finEdge.title"),
      description: t("portfolioPage.projects.finEdge.description"),
      image: "/portfolio/sms.png?height=600&width=800",
      tags: [t("portfolioPage.tags.finance"), t("portfolioPage.tags.realtime"), t("portfolioPage.tags.security")],
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("portfolioPage.title")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{t("portfolioPage.subtitle")}</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group transition-all hover:shadow-md">
            <div className="relative h-64">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href={project.link} className="flex items-center gap-1">
                  {t("portfolioPage.viewProject")} <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">{t("portfolioPage.cta.title")}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("portfolioPage.cta.description")}</p>
        <Button size="lg" asChild>
          <Link href="/request-project">{t("portfolioPage.cta.button")}</Link>
        </Button>
      </section>
    </div>
  )
}

