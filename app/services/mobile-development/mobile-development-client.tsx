"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Code, Zap, Shield, ArrowRight, CheckCircle, Star, Users, Target } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function MobileDevelopmentClient() {
  const { t } = useTranslations()

  const platforms = [
    { name: "iOS", description: "Native iOS apps for iPhone and iPad", icon: "🍎" },
    { name: "Android", description: "Native Android apps for all devices", icon: "🤖" },
    { name: "React Native", description: "Cross-platform apps for both iOS and Android", icon: "⚛️" },
    { name: "Flutter", description: "Google's cross-platform framework", icon: "🎯" },
  ]

  const services = [
    {
      title: "Native iOS Development",
      description: "High-performance iOS apps built with Swift and SwiftUI for the best user experience.",
      features: ["Swift/SwiftUI", "Core Data", "App Store Optimization", "iOS Guidelines"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Native Android Development",
      description: "Robust Android applications using Kotlin and Jetpack Compose for modern UI.",
      features: ["Kotlin/Java", "Jetpack Compose", "Material Design", "Google Play Store"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Cross-Platform Development",
      description: "Single codebase apps that work on both iOS and Android platforms.",
      features: ["React Native", "Flutter", "Code Reusability", "Faster Development"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "App Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your mobile applications.",
      features: ["Bug Fixes", "Feature Updates", "Performance Optimization", "24/7 Support"],
      icon: <Shield className="h-6 w-6" />
    }
  ]

  const process = [
    {
      step: "1",
      title: "Strategy & Planning",
      description: "We analyze your requirements and create a comprehensive mobile app strategy."
    },
    {
      step: "2", 
      title: "UI/UX Design",
      description: "Our designers create intuitive and engaging user interfaces for your app."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We build your app using the latest technologies and conduct thorough testing."
    },
    {
      step: "4",
      title: "Launch & Optimization",
      description: "We help you launch your app and optimize it for app store success."
    }
  ]

  const technologies = [
    { name: "React Native", category: "Cross-Platform" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Swift", category: "iOS" },
    { name: "Kotlin", category: "Android" },
    { name: "SwiftUI", category: "iOS UI" },
    { name: "Jetpack Compose", category: "Android UI" },
    { name: "Firebase", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "GraphQL", category: "API" },
    { name: "Redux", category: "State Management" },
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
            <Smartphone className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Mobile App Development</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Create powerful mobile applications that engage users and drive business growth. 
          From native iOS and Android apps to cross-platform solutions, we deliver exceptional mobile experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your App Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View Our Apps</Link>
          </Button>
        </div>
      </section>

      {/* Platforms */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Platforms We Develop For</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We create mobile apps for all major platforms using the most suitable technology for your project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <p className="text-muted-foreground">{platform.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Mobile Development Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mobile app development solutions tailored to your business needs
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
            We leverage cutting-edge technologies to build robust and scalable mobile applications
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
            A proven methodology that ensures your mobile app is delivered on time and exceeds expectations
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
            <h2 className="text-3xl font-bold">Why Choose Our Mobile Development Services?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Expert Team</h3>
                  <p className="text-muted-foreground">Our developers have years of experience in mobile app development across all platforms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Modern Technologies</h3>
                  <p className="text-muted-foreground">We use the latest frameworks and tools to build fast, secure, and scalable mobile apps.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">App Store Optimization</h3>
                  <p className="text-muted-foreground">We help optimize your app for better visibility and downloads in app stores.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Ongoing Support</h3>
                  <p className="text-muted-foreground">We provide maintenance and updates to keep your app running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Mobile App Development Process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Build Your Mobile App?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's discuss your mobile app idea and create a solution that engages users and drives business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your App Project
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
