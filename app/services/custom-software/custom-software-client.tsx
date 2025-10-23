"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Building, Zap, Shield, ArrowRight, CheckCircle, Target, Users, Settings } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function CustomSoftwareClient() {
  const { t } = useTranslations()

  const services = [
    {
      title: "Enterprise Applications",
      description: "Comprehensive business applications designed to streamline operations and improve efficiency.",
      features: ["Scalable Architecture", "Multi-User Support", "Data Security", "Integration Ready"],
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Workflow Automation",
      description: "Automated business processes that reduce manual work and increase productivity.",
      features: ["Process Optimization", "Task Automation", "Notification Systems", "Reporting"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "System Integration",
      description: "Connect existing systems and applications for seamless data flow and operations.",
      features: ["API Development", "Data Migration", "Legacy System Integration", "Real-time Sync"],
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Business Intelligence",
      description: "Data-driven solutions that provide insights and analytics for better decision making.",
      features: ["Data Visualization", "Custom Dashboards", "Analytics", "Reporting Tools"],
      icon: <Target className="h-6 w-6" />
    }
  ]

  const technologies = [
    { name: "Python", category: "Backend" },
    { name: "Java", category: "Enterprise" },
    { name: "C#", category: "Microsoft Stack" },
    { name: "Node.js", category: "JavaScript" },
    { name: "React", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "NoSQL" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
  ]

  const industries = [
    {
      title: "Healthcare",
      description: "Patient management systems, electronic health records, and medical workflow automation.",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Banking applications, payment processing systems, and financial analytics platforms.",
      icon: "💰"
    },
    {
      title: "Education",
      description: "Learning management systems, student portals, and educational content platforms.",
      icon: "🎓"
    },
    {
      title: "Manufacturing",
      description: "Production management systems, quality control software, and supply chain solutions.",
      icon: "🏭"
    },
    {
      title: "Retail",
      description: "E-commerce platforms, inventory management, and customer relationship systems.",
      icon: "🛒"
    },
    {
      title: "Real Estate",
      description: "Property management systems, listing platforms, and real estate analytics tools.",
      icon: "🏠"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Requirements Analysis",
      description: "We analyze your business needs and create detailed specifications for your custom software."
    },
    {
      step: "2", 
      title: "Architecture Design",
      description: "Our architects design a scalable and maintainable system architecture for your solution."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We develop your software using agile methodologies with continuous testing and feedback."
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "We deploy your software and provide ongoing maintenance and support services."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
            <Code className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Custom Software Development</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transform your business with tailor-made software solutions designed specifically for your unique needs. 
          From enterprise applications to workflow automation, we create software that drives your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View Our Solutions</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Custom Software Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development solutions tailored to your business requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="px-3 py-1">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We have experience developing custom software solutions across various industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Technologies We Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage modern technologies and frameworks to build robust and scalable software solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-md transition-all">
              <div className="space-y-2">
                <h3 className="font-semibold">{tech.name}</h3>
                <Badge variant="outline" className="text-xs">{tech.category}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Development Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures your custom software is delivered on time and meets your requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Our Custom Software Development?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Tailored Solutions</h3>
                  <p className="text-muted-foreground">Every software solution is designed specifically for your business needs and requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Scalable Architecture</h3>
                  <p className="text-muted-foreground">We build software that grows with your business and handles increasing demands.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Expert Team</h3>
                  <p className="text-muted-foreground">Our experienced developers have expertise in various technologies and industries.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Ongoing Support</h3>
                  <p className="text-muted-foreground">We provide maintenance, updates, and support to keep your software running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Custom Software Development Process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Build Your Custom Software?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's discuss your requirements and create a software solution that transforms your business operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/request-project">Get Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
