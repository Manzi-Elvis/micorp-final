"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, Zap, Shield, ArrowRight, CheckCircle, Target, Settings, BarChart } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function DatabaseClient() {
  const { t } = useTranslations()

  const services = [
    {
      title: "Database Design & Architecture",
      description: "Custom database designs optimized for your specific business requirements and data patterns.",
      features: ["Schema Design", "Data Modeling", "Performance Optimization", "Scalability Planning"],
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Database Migration",
      description: "Seamless migration of your data from legacy systems to modern database platforms.",
      features: ["Data Transfer", "Schema Conversion", "Zero Downtime", "Data Validation"],
      icon: <ArrowRight className="h-6 w-6" />
    },
    {
      title: "Performance Optimization",
      description: "Database tuning and optimization to improve query performance and system efficiency.",
      features: ["Query Optimization", "Index Tuning", "Performance Monitoring", "Bottleneck Analysis"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Database Security",
      description: "Comprehensive security measures to protect your data from threats and unauthorized access.",
      features: ["Access Control", "Encryption", "Audit Logging", "Compliance"],
      icon: <Shield className="h-6 w-6" />
    }
  ]

  const technologies = [
    { name: "PostgreSQL", category: "SQL Database" },
    { name: "MySQL", category: "SQL Database" },
    { name: "MongoDB", category: "NoSQL Database" },
    { name: "Redis", category: "Cache Database" },
    { name: "Elasticsearch", category: "Search Engine" },
    { name: "Oracle", category: "Enterprise Database" },
    { name: "SQL Server", category: "Microsoft Database" },
    { name: "DynamoDB", category: "Cloud Database" },
    { name: "Cassandra", category: "NoSQL Database" },
    { name: "Neo4j", category: "Graph Database" },
  ]

  const solutions = [
    {
      title: "Data Warehousing",
      description: "Centralized data storage solutions for business intelligence and analytics.",
      icon: "📊"
    },
    {
      title: "Real-time Analytics",
      description: "Databases optimized for real-time data processing and analytics.",
      icon: "⚡"
    },
    {
      title: "Cloud Database",
      description: "Scalable database solutions hosted on cloud platforms.",
      icon: "☁️"
    },
    {
      title: "Backup & Recovery",
      description: "Comprehensive backup and disaster recovery solutions for your data.",
      icon: "💾"
    },
    {
      title: "Data Integration",
      description: "Connecting multiple data sources for unified data management.",
      icon: "🔗"
    },
    {
      title: "Database Monitoring",
      description: "24/7 monitoring and alerting for database performance and health.",
      icon: "👁️"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Assessment & Analysis",
      description: "We analyze your current database setup and identify areas for improvement."
    },
    {
      step: "2", 
      title: "Design & Planning",
      description: "We design a database architecture that meets your performance and scalability needs."
    },
    {
      step: "3",
      title: "Implementation",
      description: "We implement the database solution with proper security and optimization measures."
    },
    {
      step: "4",
      title: "Monitoring & Support",
      description: "We provide ongoing monitoring and support to ensure optimal database performance."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
            <Database className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Database Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Optimize your data management with professional database solutions. From design and migration to 
          performance optimization and security, we ensure your data infrastructure supports your business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Optimize Your Database
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View Database Projects</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Database Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive database solutions to optimize your data management and performance
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
          <h2 className="text-3xl font-bold">Database Solutions We Provide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized database solutions for various business needs and use cases
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
          <h2 className="text-3xl font-bold">Database Technologies We Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with a wide range of database technologies to meet your specific requirements
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
          <h2 className="text-3xl font-bold">Our Database Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to delivering optimal database solutions for your business
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
            <h2 className="text-3xl font-bold">Why Choose Our Database Solutions?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Performance Optimization</h3>
                  <p className="text-muted-foreground">We optimize your database for maximum performance and efficiency.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Data Security</h3>
                  <p className="text-muted-foreground">Comprehensive security measures to protect your valuable data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Scalability</h3>
                  <p className="text-muted-foreground">Database solutions that grow with your business needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock monitoring and support for your database systems.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Database Solutions and Management"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Optimize Your Database?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's analyze your current database setup and create a solution that improves performance and security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Database Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/request-project">Request Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
