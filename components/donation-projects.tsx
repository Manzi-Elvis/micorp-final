"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Lightbulb, Code, Microscope } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function DonationProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t } = useTranslations()

  const projects = [
    {
      title: t("donationProjects.innovationLab.title"),
      description: t("donationProjects.innovationLab.description"),
      icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
      raised: 28000,
      goal: 50000,
      donors: 124,
    },
    {
      title: t("donationProjects.openSource.title"),
      description: t("donationProjects.openSource.description"),
      icon: <Code className="h-6 w-6 text-blue-600" />,
      raised: 15000,
      goal: 30000,
      donors: 87,
    },
    {
      title: t("donationProjects.techEducation.title"),
      description: t("donationProjects.techEducation.description"),
      icon: <Microscope className="h-6 w-6 text-blue-600" />,
      raised: 32000,
      goal: 40000,
      donors: 131,
    },
  ]

  return (
    <section ref={ref}>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">{t("donationProjects.ourInitiatives")}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("donationProjects.chooseProject")}</p>
      </div>

      <div
        className="grid md:grid-cols-3 gap-6"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {projects.map((project, index) => {
          const percentage = Math.round((project.raised / project.goal) * 100)

          return (
            <Card
              key={index}
              className="border-blue-200 dark:border-blue-900 transition-all hover:shadow-md"
              style={{
                transitionDelay: `${0.1 * index}s`,
              }}
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">{project.icon}</div>
                </div>
                <CardTitle className="text-center">{project.title}</CardTitle>
                <CardDescription className="text-center">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">${project.raised.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">
                      {t("donationStats.goal")}: ${project.goal.toLocaleString()}
                    </span>
                  </div>
                  <Progress
                    value={percentage}
                    className="h-2"
                    style={{
                      transition: isInView ? "width 1.5s ease-in-out" : "none",
                    }}
                  />
                  <div className="flex justify-between text-sm">
                    <span>
                      {percentage}% {t("donationProjects.funded")}
                    </span>
                    <span>
                      {project.donors} {t("donationStats.donors")}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  {t("donationProjects.supportProject")}
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

