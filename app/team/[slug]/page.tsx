"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Github, Linkedin, Mail, MapPin, Calendar, Award, Code, Users, Target } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { notFound } from "next/navigation"

interface TeamMember {
  slug: string
  name: string
  role: string
  bio: string
  image: string
  location: string
  joinDate: string
  skills: string[]
  experience: string
  education: string
  achievements: string[]
  social: {
    github: string
    linkedin: string
    email: string
  }
  projects: {
    name: string
    description: string
    tech: string[]
    link: string
  }[]
}

export default function TeamMemberProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { t } = useTranslations()
  const { slug } = use(params)

  // Get team member data based on slug
  const getTeamMemberData = (slug: string): TeamMember | null => {
    const teamMembers: Record<string, TeamMember> = {
      'chaste-djaziri': {
        slug: 'chaste-djaziri',
        name: t("teamPage.members.chaste.name"),
        role: t("teamPage.members.chaste.role"),
        bio: t("teamPage.members.chaste.bio"),
        image: "/members/chaste.jpg",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Leadership", "Software Architecture", "Full-Stack Development", "AI/ML", "Cloud Computing"],
        experience: "8+ years in software development and technology leadership",
        education: "Computer Science & Engineering",
        achievements: ["Founded Mirror Corporation", "Led 50+ successful projects", "Mentored 20+ developers"],
        social: {
          github: "https://github.com/chaste-djaziri",
          linkedin: "https://www.linkedin.com/in/chaste-djaziri-6bb4b62a5/",
          email: "chaste@micorp.pro"
        },
        projects: [
          {
            name: "Mirror Corporation Platform",
            description: "Comprehensive business management platform",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
            link: "https://micorp.pro"
          }
        ]
      },
      'thierry-ndayishimiye': {
        slug: 'thierry-ndayishimiye',
        name: t("teamPage.members.thierry.name"),
        role: t("teamPage.members.thierry.role"),
        bio: t("teamPage.members.thierry.bio"),
        image: "/members/thierry.jpg",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Marketing Strategy", "Brand Development", "Content Creation", "Analytics", "Campaign Management"],
        experience: "4+ years in marketing and brand development",
        education: "Marketing & Business",
        achievements: ["Developed successful marketing campaigns", "Increased brand visibility", "Led marketing initiatives"],
        social: {
          github: "https://github.com/Djsensei1/",
          linkedin: "#",
          email: "contact@micorp.pro"
        },
        projects: [
          {
            name: "Marketing Campaigns",
            description: "Strategic marketing initiatives and brand development",
            tech: ["Digital Marketing", "Content Strategy", "Analytics"],
            link: "#"
          }
        ]
      },
      'rukundo-joseph': {
        slug: 'rukundo-joseph',
        name: t("teamPage.members.rukundo.name"),
        role: t("teamPage.members.rukundo.role"),
        bio: t("teamPage.members.rukundo.bio"),
        image: "/members/joe.jpg",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Social Media Strategy", "Content Creation", "Digital Marketing", "Brand Management", "Analytics"],
        experience: "5+ years in social media and digital marketing",
        education: "Marketing & Communications",
        achievements: ["Grew social media following by 300%", "Launched successful campaigns", "Expert in multiple platforms"],
        social: {
          github: "#",
          linkedin: "#",
          email: "social@micorp.pro"
        },
        projects: [
          {
            name: "Social Media Campaigns",
            description: "Multi-platform social media strategies",
            tech: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
            link: "#"
          }
        ]
      },
      'arnoud-kigenza': {
        slug: 'arnoud-kigenza',
        name: t("teamPage.members.arnoud.name"),
        role: t("teamPage.members.arnoud.role"),
        bio: t("teamPage.members.arnoud.bio"),
        image: "/members/kigenza.JPG",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Digital Marketing", "SEO/SEM", "Email Marketing", "Analytics", "Campaign Management"],
        experience: "6+ years in digital marketing and brand development",
        education: "Marketing & Business Administration",
        achievements: ["Increased brand awareness by 250%", "Optimized conversion rates", "Led successful product launches"],
        social: {
          github: "#",
          linkedin: "#",
          email: "marketing@micorp.pro"
        },
        projects: [
          {
            name: "Digital Marketing Strategies",
            description: "Comprehensive digital marketing solutions",
            tech: ["Google Ads", "Facebook Ads", "Analytics", "CRM"],
            link: "#"
          }
        ]
      },
      'patrick-igiraneza': {
        slug: 'patrick-igiraneza',
        name: t("teamPage.members.pazzo.name"),
        role: t("teamPage.members.pazzo.role"),
        bio: t("teamPage.members.pazzo.bio"),
        image: "/placeholder.svg?height=400&width=300",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Frontend Development", "React", "JavaScript", "UI/UX", "Responsive Design"],
        experience: "3+ years in frontend development",
        education: "Computer Science",
        achievements: ["Built responsive web applications", "Improved user experience", "Developed modern interfaces"],
        social: {
          github: "#",
          linkedin: "#",
          email: "tech@micorp.pro"
        },
        projects: [
          {
            name: "Frontend Applications",
            description: "Modern, responsive web applications",
            tech: ["React", "JavaScript", "CSS", "HTML"],
            link: "#"
          }
        ]
      },
      'pacifique-kimana': {
        slug: 'pacifique-kimana',
        name: t("teamPage.members.paccy.name"),
        role: t("teamPage.members.paccy.role"),
        bio: t("teamPage.members.paccy.bio"),
        image: "/placeholder.svg?height=400&width=300",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["UX/UI Design", "Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
        experience: "4+ years in UX/UI design",
        education: "Design & Visual Arts",
        achievements: ["Designed award-winning interfaces", "Improved user satisfaction", "Led design system development"],
        social: {
          github: "#",
          linkedin: "#",
          email: "design@micorp.pro"
        },
        projects: [
          {
            name: "UI/UX Design Projects",
            description: "User-centered design solutions",
            tech: ["Figma", "Adobe XD", "Sketch", "InVision"],
            link: "#"
          }
        ]
      },
      'honorata-umwamikazi': {
        slug: 'honorata-umwamikazi',
        name: t("teamPage.members.queen.name"),
        role: t("teamPage.members.queen.role"),
        bio: t("teamPage.members.queen.bio"),
        image: "/placeholder.svg?height=400&width=300",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Videography", "Video Editing", "Motion Graphics", "Cinematography", "Post-Production"],
        experience: "5+ years in video production and editing",
        education: "Media & Communications",
        achievements: ["Produced award-winning videos", "Led video production teams", "Created engaging visual content"],
        social: {
          github: "#",
          linkedin: "#",
          email: "dev@micorp.pro"
        },
        projects: [
          {
            name: "Video Production",
            description: "Professional video production and editing",
            tech: ["Adobe Premiere", "After Effects", "Final Cut Pro"],
            link: "#"
          }
        ]
      },
      'joshua-ijabo': {
        slug: 'joshua-ijabo',
        name: t("teamPage.members.josh.name"),
        role: t("teamPage.members.josh.role"),
        bio: t("teamPage.members.josh.bio"),
        image: "/placeholder.svg?height=400&width=300",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Data Science", "Python", "Machine Learning", "Statistics", "Data Visualization"],
        experience: "4+ years in data science and analytics",
        education: "Data Science & Statistics",
        achievements: ["Developed predictive models", "Improved business insights", "Led data-driven initiatives"],
        social: {
          github: "#",
          linkedin: "#",
          email: "data@micorp.pro"
        },
        projects: [
          {
            name: "Data Science Projects",
            description: "Advanced analytics and machine learning solutions",
            tech: ["Python", "R", "TensorFlow", "Pandas"],
            link: "#"
          }
        ]
      },
      'anna-amina': {
        slug: 'anna-amina',
        name: t("teamPage.members.amina.name"),
        role: t("teamPage.members.amina.role"),
        bio: t("teamPage.members.amina.bio"),
        image: "/members/amina.jpg",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Full-Stack Development", "React", "Database Design", "API Development", "Tailwind CSS", "TypeScript"],
        experience: "2+ years in full-stack development",
        education: "Software Development",
        achievements: ["Built scalable applications", "Led development teams", "Optimized system performance"],
        social: {
          github: "#",
          linkedin: "#",
          email: "aminafaida1000@gmail.com"
        },
        projects: [
          {
            name: "Full-Stack Applications",
            description: "End-to-end web application development",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            link: "#"
          }
        ]
      },
      'elvis-manzi': {
        slug: 'elvis-manzi',
        name: t("teamPage.members.elvis.name"),
        role: t("teamPage.members.elvis.role"),
        bio: t("teamPage.members.elvis.bio"),
        image: "/placeholder.svg?height=400&width=300",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Backend Development", "DevOps", "Cloud Computing", "Database Management", "System Administration"],
        experience: "4+ years in backend development and DevOps",
        education: "Computer Science",
        achievements: ["Improved system reliability", "Automated deployment processes", "Optimized server performance"],
        social: {
          github: "#",
          linkedin: "#",
          email: "devops@micorp.pro"
        },
        projects: [
          {
            name: "Backend Systems",
            description: "Robust backend infrastructure and APIs",
            tech: ["Node.js", "Docker", "AWS", "PostgreSQL"],
            link: "#"
          }
        ]
      },
      'faylinn-ishimwe': {
        slug: 'faylinn-ishimwe',
        name: t("teamPage.members.faylinn.name"),
        role: t("teamPage.members.faylinn.role"),
        bio: t("teamPage.members.faylinn.bio"),
        image: "/members/faylinn.png",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Mobile Development", "React Native", "Flutter", "iOS", "Android"],
        experience: "4+ years in mobile application development",
        education: "Computer Science",
        achievements: ["Published mobile apps", "Improved app performance", "Led mobile development teams"],
        social: {
          github: "#",
          linkedin: "#",
          email: "mobile@micorp.pro"
        },
        projects: [
          {
            name: "Mobile Applications",
            description: "Cross-platform mobile app development",
            tech: ["React Native", "Flutter", "Swift", "Kotlin"],
            link: "#"
          }
        ]
      },
      'aliza-iganza': {
        slug: 'aliza-iganza',
        name: t("teamPage.members.aliza.name"),
        role: t("teamPage.members.aliza.role"),
        bio: t("teamPage.members.aliza.bio"),
        image: "/placeholder.svg?height=400&width=300",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Cybersecurity", "Network Security", "Penetration Testing", "Security Auditing", "Risk Assessment"],
        experience: "5+ years in cybersecurity and information security",
        education: "Cybersecurity & Information Technology",
        achievements: ["Secured critical systems", "Prevented security breaches", "Led security assessments"],
        social: {
          github: "#",
          linkedin: "#",
          email: "security@micorp.pro"
        },
        projects: [
          {
            name: "Security Solutions",
            description: "Comprehensive cybersecurity implementations",
            tech: ["Security Tools", "Penetration Testing", "Risk Management"],
            link: "#"
          }
        ]
      },
      'danny-ngabonziza': {
        slug: 'danny-ngabonziza',
        name: t("teamPage.members.danny.name"),
        role: t("teamPage.members.danny.role"),
        bio: t("teamPage.members.danny.bio"),
        image: "/placeholder.svg?height=400&width=300",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Marketing", "Customer Relations", "Business Development", "Sales", "Client Management"],
        experience: "3+ years in marketing and customer success",
        education: "Business & Marketing",
        achievements: ["Improved customer satisfaction", "Increased sales revenue", "Led successful campaigns"],
        social: {
          github: "#",
          linkedin: "#",
          email: "success@micorp.pro"
        },
        projects: [
          {
            name: "Marketing Initiatives",
            description: "Strategic marketing and customer success programs",
            tech: ["CRM", "Marketing Automation", "Analytics"],
            link: "#"
          }
        ]
      },
      'didier-manirakiza': {
        slug: 'didier-manirakiza',
        name: t("teamPage.members.didier.name"),
        role: t("teamPage.members.didier.role"),
        bio: t("teamPage.members.didier.bio"),
        image: "/placeholder.svg?height=400&width=300",
        location: "Kigali, Rwanda",
        joinDate: "2024",
        skills: ["Data Science", "Machine Learning", "AI", "Python", "Deep Learning"],
        experience: "6+ years in data science and AI",
        education: "Data Science & AI",
        achievements: ["Developed AI models", "Led data science teams", "Published research papers"],
        social: {
          github: "#",
          linkedin: "#",
          email: "ai@micorp.pro"
        },
        projects: [
          {
            name: "AI & ML Projects",
            description: "Advanced artificial intelligence and machine learning solutions",
            tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
            link: "#"
          }
        ]
      }
    }

    return teamMembers[slug] || null
  }

  const member = getTeamMemberData(slug)

  if (!member) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      {/* Back Button */}
      <Link href="/team">
        <Button variant="outline" className="mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("teamPage.backToTeam")}
        </Button>
      </Link>

      {/* Header Section */}
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        {/* Profile Image */}
        <div className="space-y-4">
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Social Links */}
          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild>
              <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={`mailto:${member.social.email}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{member.name}</h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 mt-2">{member.role}</p>
            <div className="flex items-center gap-4 mt-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{member.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{t("teamPage.joined")} {member.joinDate}</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">{member.bio}</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{member.skills.length}</div>
                <div className="text-sm text-muted-foreground">{t("teamPage.skills")}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{member.projects.length}</div>
                <div className="text-sm text-muted-foreground">{t("teamPage.projects")}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{member.achievements.length}</div>
                <div className="text-sm text-muted-foreground">{t("teamPage.achievements")}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Separator />

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Code className="h-6 w-6" />
          {t("teamPage.skills")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      {/* Experience & Education */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              {t("teamPage.experience")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{member.experience}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              {t("teamPage.education")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{member.education}</p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Achievements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Target className="h-6 w-6" />
          {t("teamPage.achievements")}
        </h2>
        <ul className="space-y-2">
          {member.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">{achievement}</span>
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">{t("teamPage.projects")}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {member.projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {t("teamPage.viewProject")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
