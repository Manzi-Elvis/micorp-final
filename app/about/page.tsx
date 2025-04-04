"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Lightbulb, Target, Heart } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function AboutPage() {
  const { t } = useTranslations()

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("about.title")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{t("about.subtitle")}</p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{t("about.story.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("about.story.paragraph1")}</p>
          <p className="text-lg text-muted-foreground">{t("about.story.paragraph2")}</p>
          <p className="text-lg text-muted-foreground">{t("about.story.paragraph3")}</p>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/5 z-10"></div>
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt={t("about.story.imageAlt")}
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">{t("about.values.title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t("about.values.innovation.title")}</h3>
              <p className="text-muted-foreground text-center">{t("about.values.innovation.description")}</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t("about.values.excellence.title")}</h3>
              <p className="text-muted-foreground text-center">{t("about.values.excellence.description")}</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t("about.values.collaboration.title")}</h3>
              <p className="text-muted-foreground text-center">{t("about.values.collaboration.description")}</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t("about.values.integrity.title")}</h3>
              <p className="text-muted-foreground text-center">{t("about.values.integrity.description")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">{t("about.founder.title")}</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-[1fr_2fr]">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt={t("about.founder.name")}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">{t("about.founder.name")}</h3>
                  <p className="text-muted-foreground">{t("about.founder.position")}</p>
                </div>
                <p className="text-muted-foreground">{t("about.founder.bio")}</p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="px-3 py-1">
                    <a
                      href="https://github.com/Djsensei1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      GitHub
                    </a>
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    <a
                      href="https://instagram.com/chaste_djaziri/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Instagram
                    </a>
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    <a
                      href="https://chastedjaziri.micorp.pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      {t("about.founder.portfolio")}
                    </a>
                  </Badge>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

