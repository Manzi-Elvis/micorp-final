"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function TeamPage() {
  const { t } = useTranslations()

  const teamMembers = [
    {
      name: t("team.members.chaste.name"),
      role: t("team.members.chaste.role"),
      bio: t("team.members.chaste.bio"),
      image: "/members/chaste.jpg?height=400&width=300",
      social: {
        github: "https://github.com/Djsensei1/",
        linkedin: "#",
        email: "contact@micorp.pro",
      },
    },
    {
      name: t("team.members.thierry.name"),
      role: t("team.members.thierry.role"),
      bio: t("team.members.thierry.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "https://github.com/Djsensei1/",
        linkedin: "#",
        email: "contact@micorp.pro",
      },
    },
    {
      name: t("team.members.pazzo.name"),
      role: t("team.members.pazzo.role"),
      bio: t("team.members.pazzo.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "tech@micorp.pro",
      },
    },
    {
      name: t("team.members.paccy.name"),
      role: t("team.members.paccy.role"),
      bio: t("team.members.paccy.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "design@micorp.pro",
      },
    },
    {
      name: t("team.members.queen.name"),
      role: t("team.members.queen.role"),
      bio: t("team.members.queen.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "dev@micorp.pro",
      },
    },
    {
      name: t("team.members.josh.name"),
      role: t("team.members.josh.role"),
      bio: t("team.members.josh.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "data@micorp.pro",
      },
    },
    {
      name: t("team.members.amina.name"),
      role: t("team.members.amina.role"),
      bio: t("team.members.amina.bio"),
      image: "/members/amina.jpg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "projects@micorp.pro",
      },
    },
    {
      name: t("team.members.elvis.name"),
      role: t("team.members.elvis.role"),
      bio: t("team.members.elvis.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "devops@micorp.pro",
      },
    },
    {
      name: t("team.members.faylinn.name"),
      role: t("team.members.faylinn.role"),
      bio: t("team.members.faylinn.bio"),
      image: "/members/faylinn.png?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "mobile@micorp.pro",
      },
    },
    {
      name: t("team.members.aliza.name"),
      role: t("team.members.aliza.role"),
      bio: t("team.members.aliza.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "security@micorp.pro",
      },
    },
    {
      name: t("team.members.danny.name"),
      role: t("team.members.danny.role"),
      bio: t("team.members.danny.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "success@micorp.pro",
      },
    },
    {
      name: t("team.members.didier.name"),
      role: t("team.members.didier.role"),
      bio: t("team.members.didier.bio"),
      image: "/placeholder.svg?height=400&width=300",
      social: {
        github: "#",
        linkedin: "#",
        email: "ai@micorp.pro",
      },
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("team.title")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{t("team.subtitle")}</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
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
                  aria-label={t("team.social.github")}
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={t("team.social.linkedin")}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={t("team.social.email")}
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">{t("team.joinUs.title")}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("team.joinUs.description")}</p>
        <div className="flex justify-center gap-4">
          <Badge className="px-3 py-2 text-base">{t("team.joinUs.positions.developer")}</Badge>
          <Badge className="px-3 py-2 text-base">{t("team.joinUs.positions.designer")}</Badge>
          <Badge className="px-3 py-2 text-base">{t("team.joinUs.positions.dataScientist")}</Badge>
        </div>
      </section>
    </div>
  )
}

