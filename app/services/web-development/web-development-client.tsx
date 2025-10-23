"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Code, Smartphone, Database, Zap, Shield, ArrowRight, CheckCircle, Star } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function WebDevelopmentClient() {
  const { t } = useTranslations()

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL", category: "API" },
  ]

  const services = [
    {
      title: "Custom Website Development",
      description: "Tailored websites designed to meet your specific business needs and goals.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Web Application Development",
      description: "Complex web applications with advanced functionality and user interactions.",
      features: ["User Authentication", "Real-time Features", "API Integration", "Scalable Architecture"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and inventory management.",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Admin Dashboard"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Content Management Systems",
      description: "Easy-to-use CMS platforms for content management and website updates.",
      features: ["User-Friendly Interface", "Multi-User Support", "Content Scheduling", "Media Management"],
      icon: <Database className="h-6 w-6" />
    }
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project plan."
    },
    {
      step: "2", 
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and prototypes to visualize the user experience and interface."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We build your website using modern technologies and conduct thorough testing for quality assurance."
    },
    {
      step: "4",
      title: "Deployment & Launch",
      description: "We deploy your website to production and provide training for content management and maintenance."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
            <Globe className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Web Development Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transform your digital presence with custom websites and web applications built using cutting-edge technologies. 
          From simple business websites to complex web applications, we deliver solutions that drive results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Web Development Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive web development solutions tailored to your business needs
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

      {/* Technologies */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Technologies We Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage modern, proven technologies to build robust and scalable web solutions
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
            We follow a structured approach to ensure your project is delivered on time and exceeds expectations
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
            <h2 className="text-3xl font-bold">Why Choose Our Web Development Services?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Modern Technologies</h3>
                  <p className="text-muted-foreground">We use the latest frameworks and tools to build fast, secure, and scalable websites.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Responsive Design</h3>
                  <p className="text-muted-foreground">Your website will look perfect on all devices, from mobile phones to desktop computers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">SEO Optimized</h3>
                  <p className="text-muted-foreground">Built with SEO best practices to help your website rank higher in search results.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Ongoing Support</h3>
                  <p className="text-muted-foreground">We provide maintenance and support to keep your website running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Web Development Process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Build Your Website?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's discuss your project requirements and create a custom web solution that drives your business forward.
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
