import type { Metadata } from "next"
import { useTranslations } from "@/hooks/use-translations"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Smartphone, Database, LineChart, ShieldCheck, Cloud, Cpu } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Mirror Corporation - Custom Software, AI, Cybersecurity & Cloud Solutions",
  description: "Comprehensive technology services including custom software development, web & mobile apps, AI/ML solutions, cybersecurity, cloud services, and data analytics. Expert team based in Rwanda serving Africa and beyond.",
  keywords: [
    "custom software development",
    "web development services",
    "mobile app development",
    "AI machine learning solutions",
    "cybersecurity services",
    "cloud computing solutions",
    "data analytics services",
    "database solutions",
    "technology consulting",
    "software outsourcing",
    "digital transformation",
    "enterprise software",
    "e-commerce development",
    "API development",
    "UI/UX design",
    "cloud migration",
    "IT consulting Rwanda",
    "technology solutions Africa",
    "software development company",
    "tech services provider"
  ],
  openGraph: {
    title: "Our Services | Mirror Corporation - Custom Software, AI, Cybersecurity & Cloud Solutions",
    description: "Comprehensive technology services including custom software development, web & mobile apps, AI/ML solutions, cybersecurity, cloud services, and data analytics. Expert team based in Rwanda serving Africa and beyond.",
    url: "https://micorp.pro/services",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Our Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Mirror Corporation - Custom Software, AI, Cybersecurity & Cloud Solutions",
    description: "Comprehensive technology services including custom software development, web & mobile apps, AI/ML solutions, cybersecurity, cloud services, and data analytics. Expert team based in Rwanda serving Africa and beyond.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  const { t } = useTranslations()

  const services = [
    {
      title: t("servicesPage.customSoftware.title"),
      description: t("servicesPage.customSoftware.description"),
      icon: <Code className="h-6 w-6 text-blue-600" />,
      tags: [t("servicesPage.tags.enterprise"), t("servicesPage.tags.workflow"), t("servicesPage.tags.integration")],
      image: "/placeholder.svg?height=300&width=400",
      anchor: "custom-software",
    },
    {
      title: t("servicesPage.webDevelopment.title"),
      description: t("servicesPage.webDevelopment.description"),
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      tags: [
        t("servicesPage.tags.frontend"),
        t("servicesPage.tags.backend"),
        t("servicesPage.tags.ecommerce"),
        t("servicesPage.tags.cms"),
      ],
      image: "/placeholder.svg?height=300&width=400",
      anchor: "web-development",
    },
    {
      title: t("servicesPage.mobileDevelopment.title"),
      description: t("servicesPage.mobileDevelopment.description"),
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      tags: [
        t("servicesPage.tags.ios"),
        t("servicesPage.tags.android"),
        t("servicesPage.tags.reactNative"),
        t("servicesPage.tags.flutter"),
      ],
      image: "/placeholder.svg?height=300&width=400",
      anchor: "mobile-development",
    },
    {
      title: t("servicesPage.databaseSolutions.title"),
      description: t("servicesPage.databaseSolutions.description"),
      icon: <Database className="h-6 w-6 text-blue-600" />,
      tags: [
        t("servicesPage.tags.sql"),
        t("servicesPage.tags.nosql"),
        t("servicesPage.tags.migration"),
        t("servicesPage.tags.performance"),
      ],
      image: "/placeholder.svg?height=300&width=400",
      anchor: "database",
    },
    {
      title: t("servicesPage.dataAnalytics.title"),
      description: t("servicesPage.dataAnalytics.description"),
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
      tags: [t("servicesPage.tags.bi"), t("servicesPage.tags.predictive"), t("servicesPage.tags.visualization")],
      image: "/placeholder.svg?height=300&width=400",
      anchor: "analytics",
    },
    {
      title: t("servicesPage.cybersecurity.title"),
      description: t("servicesPage.cybersecurity.description"),
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      tags: [t("servicesPage.tags.security"), t("servicesPage.tags.penetration"), t("servicesPage.tags.compliance")],
      image: "/placeholder.svg?height=300&width=400",
      anchor: "cybersecurity",
    },
    {
      title: t("servicesPage.cloudServices.title"),
      description: t("servicesPage.cloudServices.description"),
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
      tags: [t("servicesPage.tags.aws"), t("servicesPage.tags.azure"), t("servicesPage.tags.google"), t("servicesPage.tags.migration")],
      image: "/placeholder.svg?height=300&width=400",
      anchor: "cloud",
    },
    {
      title: t("servicesPage.aiMl.title"),
      description: t("servicesPage.aiMl.description"),
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      tags: [t("servicesPage.tags.models"), t("servicesPage.tags.nlp"), t("servicesPage.tags.vision")],
      image: "/placeholder.svg?height=300&width=400",
      anchor: "ai-ml",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("servicesPage.pageTitle")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{t("servicesPage.pageDescription")}</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card id={service.anchor} key={service.anchor} className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={`${service.title} service illustration`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">{service.icon}</div>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{t("servicesPage.approach.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("servicesPage.approach.description")}</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-muted-foreground">{t("servicesPage.approach.step1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-muted-foreground">{t("servicesPage.approach.step2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-muted-foreground">{t("servicesPage.approach.step3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-muted-foreground">{t("servicesPage.approach.step4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-muted-foreground">{t("servicesPage.approach.step5")}</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt={t("servicesPage.approach.imageAlt")}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
