"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, ExternalLink, Code, Smartphone, Globe, Lightbulb, Microscope } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default function DonationProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t } = useTranslations()
  const [acceptedProjects, setAcceptedProjects] = useState([])
  const [loading, setLoading] = useState(true)

  // Static donation projects
  const staticProjects = [
    // {
    //   title: t("donationProjects.innovationLab.title") || "Innovation Lab",
    //   description:
    //     t("donationProjects.innovationLab.description") ||
    //     "Supporting cutting-edge technology research and development",
    //   icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
    //   raised: 28000,
    //   goal: 50000,
    //   donors: 124,
    //   type: "static",
    // },
    // {
    //   title: t("donationProjects.openSource.title") || "Open Source Initiative",
    //   description:
    //     t("donationProjects.openSource.description") || "Contributing to open source projects and community tools",
    //   icon: <Code className="h-6 w-6 text-blue-600" />,
    //   raised: 15000,
    //   goal: 30000,
    //   donors: 87,
    //   type: "static",
    // },
    // {
    //   title: t("donationProjects.techEducation.title") || "Tech Education Program",
    //   description:
    //     t("donationProjects.techEducation.description") ||
    //     "Providing technology education and training to underserved communities",
    //   icon: <Microscope className="h-6 w-6 text-blue-600" />,
    //   raised: 32000,
    //   goal: 40000,
    //   donors: 131,
    //   type: "static",
    // },
  ]

  useEffect(() => {
    fetchAcceptedProjects()
  }, [])

  const fetchAcceptedProjects = async () => {
    try {
      // Fetch accepted job requests (our current initiatives)
      const { data: projects, error } = await supabase
        .from("job_requests")
        .select("*")
        .eq("status", "accepted")
        .order("created_at", { ascending: false })
        .limit(3)

      if (error) throw error

      // Transform job requests into project format
      const initiatives =
        projects?.map((project, index) => {
          const getProjectIcon = (type) => {
            switch (type) {
              case "web-development":
                return <Globe className="h-6 w-6 text-blue-600" />
              case "mobile-app":
                return <Smartphone className="h-6 w-6 text-blue-600" />
              case "desktop-app":
                return <Code className="h-6 w-6 text-blue-600" />
              default:
                return <Code className="h-6 w-6 text-blue-600" />
            }
          }

          const getProgressValue = () => {
            // Simulate progress based on project age
            const daysSinceCreated = Math.floor(
              (new Date().getTime() - new Date(project.created_at).getTime()) / (1000 * 60 * 60 * 24),
            )
            return Math.min(Math.max(daysSinceCreated * 10, 15), 85)
          }

          // Simulate funding data
          const baseFunding = 5000 + index * 3000
          const goalFunding = baseFunding + 10000

          return {
            title: project.project_title,
            description: project.project_description.substring(0, 120) + "...",
            client: project.client_name,
            company: project.company_name,
            type: project.project_type,
            budget: project.budget_range,
            timeline: project.timeline,
            progress: getProgressValue(),
            startDate: new Date(project.created_at).toLocaleDateString(),
            icon: getProjectIcon(project.project_type),
            raised: baseFunding,
            goal: goalFunding,
            donors: Math.floor(Math.random() * 50) + 20,
            projectType: "client",
          }
        }) || []

      setAcceptedProjects(initiatives)
    } catch (error) {
      console.error("Error fetching accepted projects:", error)
    } finally {
      setLoading(false)
    }
  }

  // Combine static projects with client projects
  const allProjects = [...staticProjects, ...acceptedProjects]

  return (
    <section ref={ref}>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">{t("donationProjects.ourInitiatives") || "Our Initiatives"}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t("donationProjects.chooseProject") ||
            "Choose a project to support and help us make a difference in the tech community"}
        </p>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-3/4 mx-auto" />
                <div className="h-4 bg-muted rounded w-full" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div
          className="grid md:grid-cols-3 gap-6"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {allProjects.map((project, index) => {
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
                  <div className="flex justify-center mb-2">
                    {project.projectType === "client" ? (
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Client Project
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        Community Initiative
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-center">{project.title}</CardTitle>
                  <CardDescription className="text-center">{project.description}</CardDescription>
                  {project.client && (
                    <div className="text-center text-sm text-muted-foreground">
                      <span className="flex items-center justify-center gap-1">
                        <Users className="h-3 w-3" />
                        Client: {project.client}
                      </span>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">${project.raised.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">
                        {t("donationStats.goal") || "Goal"}: ${project.goal.toLocaleString()}
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
                        {percentage}% {t("donationProjects.funded") || "funded"}
                      </span>
                      <span>
                        {project.donors} {t("donationStats.donors") || "donors"}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-transparent" variant="outline">
                    {t("donationProjects.supportProject") || "Support Project"}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      )}

      {allProjects.length === 0 && !loading && (
        <Card className="text-center py-12">
          <CardContent>
            <Code className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No Active Projects Yet</h3>
            <p className="text-muted-foreground mb-4">
              We're currently reviewing project proposals. Check back soon to see our latest initiatives!
            </p>
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              <Link href="/request-job">Request a Project</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  )
}
