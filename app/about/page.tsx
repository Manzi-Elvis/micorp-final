// app/about/page.tsx

import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Lightbulb, Target, Heart } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export const metadata: Metadata = {
  title: "About Us | Mirror Corporation - Technology Solutions & Software Development",
  description: "Learn about Mirror Corporation, a Rwanda-based technology company delivering custom software, AI, cybersecurity, and cloud solutions. Meet our expert team and discover our mission to drive digital transformation across Africa.",
  keywords: [
    "about Mirror Corporation",
    "Rwanda technology company",
    "software development team",
    "technology solutions Rwanda",
    "digital transformation Africa",
    "custom software development",
    "AI engineering team",
    "cybersecurity experts",
    "cloud solutions provider",
    "technology consulting Rwanda",
    "software outsourcing Africa",
    "tech company Kigali",
    "Mirror Corporation team",
    "technology innovation Rwanda",
    "software engineering team",
    "digital solutions provider",
    "technology partner Africa",
    "software development company",
    "tech startup Rwanda",
    "innovation technology solutions"
  ],
  openGraph: {
    title: "About Us | Mirror Corporation - Technology Solutions & Software Development",
    description: "Learn about Mirror Corporation, a Rwanda-based technology company delivering custom software, AI, cybersecurity, and cloud solutions. Meet our expert team and discover our mission to drive digital transformation across Africa.",
    url: "https://micorp.pro/about",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mirror Corporation - Technology Solutions & Software Development",
    description: "Learn about Mirror Corporation, a Rwanda-based technology company delivering custom software, AI, cybersecurity, and cloud solutions. Meet our expert team and discover our mission to drive digital transformation across Africa.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  const { t } = useTranslations()

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("aboutPage.title")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{t("aboutPage.subtitle")}</p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{t("aboutPage.story.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("aboutPage.story.paragraph1")}</p>
          <p className="text-lg text-muted-foreground">{t("aboutPage.story.paragraph2")}</p>
          <p className="text-lg text-muted-foreground">{t("aboutPage.story.paragraph3")}</p>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/5 z-10"></div>
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt={t("aboutPage.story.imageAlt")}
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">{t("aboutPage.values.title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t("aboutPage.values.innovation.title")}</h3>
              <p className="text-muted-foreground text-center">{t("aboutPage.values.innovation.description")}</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t("aboutPage.values.excellence.title")}</h3>
              <p className="text-muted-foreground text-center">{t("aboutPage.values.excellence.description")}</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t("aboutPage.values.collaboration.title")}</h3>
              <p className="text-muted-foreground text-center">{t("aboutPage.values.collaboration.description")}</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t("aboutPage.values.integrity.title")}</h3>
              <p className="text-muted-foreground text-center">{t("aboutPage.values.integrity.description")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">{t("aboutPage.founder.title")}</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-[1fr_2fr]">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src="/members/chaste.jpg?height=400&width=300"
                  alt={t("aboutPage.founder.name")}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">{t("aboutPage.founder.name")}</h3>
                  <p className="text-muted-foreground">{t("aboutPage.founder.position")}</p>
                </div>
                <p className="text-muted-foreground">{t("aboutPage.founder.bio")}</p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="px-3 py-1">
                    <a
                      href="https://github.com/chaste-djaziri"
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
                      {t("aboutPage.founder.portfolio")}
                    </a>
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    <a
                      href="https://www.linkedin.com/in/chaste-djaziri-6bb4b62a5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      {t("aboutPage.founder.linkedin")}
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

