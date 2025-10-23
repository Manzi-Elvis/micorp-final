"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, Zap, Shield, ArrowRight, CheckCircle, Target, Settings, BarChart, Database } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function CloudClient() {
  const { t } = useTranslations()

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud with minimal downtime and maximum efficiency.",
      features: ["Zero Downtime Migration", "Data Transfer", "Application Modernization", "Performance Optimization"],
      icon: <ArrowRight className="h-6 w-6" />
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Design and implement scalable cloud infrastructure tailored to your business requirements and growth plans.",
      features: ["Infrastructure Design", "Auto-scaling", "Load Balancing", "High Availability"],
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for better performance, cost efficiency, and security compliance.",
      features: ["Cost Optimization", "Performance Tuning", "Resource Management", "Security Hardening"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Managed Cloud Services",
      description: "Complete cloud management including monitoring, maintenance, and 24/7 support for your cloud infrastructure.",
      features: ["24/7 Monitoring", "Automated Backups", "Security Updates", "Performance Monitoring"],
      icon: <Shield className="h-6 w-6" />
    }
  ]

  const technologies = [
    { name: "AWS", category: "Cloud Platform" },
    { name: "Azure", category: "Microsoft Cloud" },
    { name: "Google Cloud", category: "Google Platform" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Container Orchestration" },
    { name: "Terraform", category: "Infrastructure as Code" },
    { name: "Ansible", category: "Configuration Management" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Visualization" },
  ]

  const solutions = [
    {
      title: "Hybrid Cloud",
      description: "Combine on-premises infrastructure with cloud services for optimal flexibility and control.",
      icon: "🔗"
    },
    {
      title: "Multi-Cloud",
      description: "Distribute workloads across multiple cloud providers for redundancy and vendor independence.",
      icon: "☁️"
    },
    {
      title: "Cloud Backup",
      description: "Automated backup solutions to protect your data with secure cloud storage and recovery options.",
      icon: "💾"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security measures to protect your cloud infrastructure and data from threats.",
      icon: "🔒"
    },
    {
      title: "Cloud Monitoring",
      description: "Real-time monitoring and alerting to ensure optimal performance and availability of your cloud services.",
      icon: "📊"
    },
    {
      title: "Cloud Cost Management",
      description: "Optimize cloud spending with cost analysis, budgeting, and resource optimization strategies.",
      icon: "💰"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Cloud Strategy",
      description: "We assess your current infrastructure and develop a comprehensive cloud strategy."
    },
    {
      step: "2", 
      title: "Migration Planning",
      description: "We create a detailed migration plan with timelines and risk mitigation strategies."
    },
    {
      step: "3",
      title: "Implementation",
      description: "We execute the migration and set up your cloud infrastructure with best practices."
    },
    {
      step: "4",
      title: "Optimization & Support",
      description: "We optimize your cloud environment and provide ongoing support and monitoring."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
            <Cloud className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Cloud Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Accelerate your digital transformation with our comprehensive cloud services. 
          From migration to optimization, we help you leverage the power of cloud computing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Cloud Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View Cloud Projects</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Cloud Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cloud solutions to modernize your infrastructure and drive business growth
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

      {/* Solutions */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Cloud Solutions We Provide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized cloud solutions for different business needs and use cases
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Cloud Technologies We Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with leading cloud platforms and modern cloud technologies
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
          <h2 className="text-3xl font-bold">Our Cloud Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology for successful cloud adoption and optimization
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
            <h2 className="text-3xl font-bold">Why Choose Our Cloud Services?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Expert Cloud Architects</h3>
                  <p className="text-muted-foreground">Our certified cloud professionals have extensive experience with all major cloud platforms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Cost Optimization</h3>
                  <p className="text-muted-foreground">We help you optimize cloud costs while maintaining performance and security.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Scalable Solutions</h3>
                  <p className="text-muted-foreground">We design cloud infrastructure that scales with your business growth.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock monitoring and support to ensure your cloud infrastructure runs smoothly.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Cloud Services and Infrastructure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Move to the Cloud?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's assess your current infrastructure and create a cloud strategy that transforms your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Cloud Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/request-project">Request Cloud Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
