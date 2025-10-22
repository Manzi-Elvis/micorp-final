import type { Metadata } from "next"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { TeamCardSkeleton } from "@/components/ui/loading"

export const metadata: Metadata = {
  title: "Our Team | Mirror Corporation - Expert Software Developers & Technology Professionals",
  description: "Meet the talented team behind Mirror Corporation - expert software developers, AI engineers, cybersecurity specialists, and technology professionals based in Rwanda, delivering innovative solutions across Africa.",
  keywords: [
    "Mirror Corporation team",
    "software development team",
    "technology professionals Rwanda",
    "AI engineers team",
    "cybersecurity experts",
    "software developers Rwanda",
    "technology team Africa",
    "expert developers",
    "tech professionals team",
    "software engineering team",
    "digital solutions team",
    "technology innovation team",
    "software development experts",
    "tech talent Rwanda",
    "technology specialists",
    "development team portfolio",
    "technology professionals",
    "software engineering experts",
    "tech team showcase",
    "innovation technology team"
  ],
  openGraph: {
    title: "Our Team | Mirror Corporation - Expert Software Developers & Technology Professionals",
    description: "Meet the talented team behind Mirror Corporation - expert software developers, AI engineers, cybersecurity specialists, and technology professionals based in Rwanda, delivering innovative solutions across Africa.",
    url: "https://micorp.pro/team",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Our Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Mirror Corporation - Expert Software Developers & Technology Professionals",
    description: "Meet the talented team behind Mirror Corporation - expert software developers, AI engineers, cybersecurity specialists, and technology professionals based in Rwanda, delivering innovative solutions across Africa.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/team",
  },
}

export default function TeamPage() {
  const { t } = useTranslations()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const teamMembers = [
    {
      slug: "chaste-djaziri",
      name: t("teamPage.members.chaste.name"),
      role: t("teamPage.members.chaste.role"),
      bio: t("teamPage.members.chaste.bio"),
      image: "/members/chaste.jpg?height=400&width=300",
      social: {
        github: "https://github.com/Djsensei1/",
        linkedin: "#",
        email: "contact@micorp.pro",
      },
    },
    {
      slug: "thierry-ndayishimiye",
      name: t("teamPage.members.thierry.name"),
      role: t("teamPage.members.thierry.role"),
      bio: t("teamPage.members.thierry.bio"),
      image: "/members/thierry.jpg?height=400&width=300",
      social: {
        github: "https://github.com/Djsensei1/",
        linkedin: "#",
        email: "contact@micorp.pro",
      },
    },
    {
      slug: "patrick-igiraneza",
      name: t("teamPage.members.pazzo.name"),
      role: t("teamPage.members.pazzo.role"),
      bio: t("teamPage.members.pazzo.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "tech@micorp.pro",
      },
    },
    {
      slug: "pacifique-kimana",
      name: t("teamPage.members.paccy.name"),
      role: t("teamPage.members.paccy.role"),
      bio: t("teamPage.members.paccy.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "design@micorp.pro",
      },
    },
    {
      slug: "honorata-umwamikazi",
      name: t("teamPage.members.queen.name"),
      role: t("teamPage.members.queen.role"),
      bio: t("teamPage.members.queen.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "dev@micorp.pro",
      },
    },
    {
      slug: "joshua-ijabo",
      name: t("teamPage.members.josh.name"),
      role: t("teamPage.members.josh.role"),
      bio: t("teamPage.members.josh.bio"),
      image: "/members/joshua.JPG?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "data@micorp.pro",
      },
    },
    {
      slug: "anna-amina",
      name: t("teamPage.members.amina.name"),
      role: t("teamPage.members.amina.role"),
      bio: t("teamPage.members.amina.bio"),
      image: "/members/amina.jpg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "projects@micorp.pro",
      },
    },
    {
      slug: "elvis-manzi",
      name: t("teamPage.members.elvis.name"),
      role: t("teamPage.members.elvis.role"),
      bio: t("teamPage.members.elvis.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "devops@micorp.pro",
      },
    },
    {
      slug: "faylinn-ishimwe",
      name: t("teamPage.members.faylinn.name"),
      role: t("teamPage.members.faylinn.role"),
      bio: t("teamPage.members.faylinn.bio"),
      image: "/members/faylinn.png?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "mobile@micorp.pro",
      },
    },
    {
      slug: "aliza-iganza",
      name: t("teamPage.members.aliza.name"),
      role: t("teamPage.members.aliza.role"),
      bio: t("teamPage.members.aliza.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "security@micorp.pro",
      },
    },
    {
      slug: "danny-ngabonziza",
      name: t("teamPage.members.danny.name"),
      role: t("teamPage.members.danny.role"),
      bio: t("teamPage.members.danny.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "success@micorp.pro",
      },
    },
    {
      slug: "didier-manirakiza",
      name: t("teamPage.members.didier.name"),
      role: t("teamPage.members.didier.role"),
      bio: t("teamPage.members.didier.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "ai@micorp.pro",
      },
    },
    {
      slug: "rukundo-joseph",
      name: t("teamPage.members.rukundo.name"),
      role: t("teamPage.members.rukundo.role"),
      bio: t("teamPage.members.rukundo.bio"),
      image: "/members/joe.jpg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "social@micorp.pro",
      },
    },
    {
      slug: "arnoud-kigenza",
      name: t("teamPage.members.arnoud.name"),
      role: t("teamPage.members.arnoud.role"),
      bio: t("teamPage.members.arnoud.bio"),
      image: "/members/kigenza.JPG?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "marketing@micorp.pro",
      },
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("teamPage.title")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{t("teamPage.subtitle")}</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <TeamCardSkeleton key={index} />
          ))
        ) : (
          teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-md group cursor-pointer">
            {member.slug ? (
              <div>
                <Link href={`/team/${member.slug}`} className="block">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                  <div className="flex gap-2">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={t("teamPage.social.github")}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={t("teamPage.social.linkedin")}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={t("teamPage.social.email")}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </div>
            ) : (
              <div>
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                  <div className="flex gap-2">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={t("teamPage.social.github")}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={t("teamPage.social.linkedin")}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={t("teamPage.social.email")}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </div>
            )}
          </Card>
          ))
        )}
      </section>

      <section className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">{t("teamPage.joinUs.title")}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("teamPage.joinUs.description")}</p>
        <div className="flex justify-center gap-4">
          <Badge className="px-3 py-2 text-base">{t("teamPage.joinUs.positions.developer")}</Badge>
          <Badge className="px-3 py-2 text-base">{t("teamPage.joinUs.positions.designer")}</Badge>
          <Badge className="px-3 py-2 text-base">{t("teamPage.joinUs.positions.dataScientist")}</Badge>
        </div>
      </section>
    </div>
  )
}

