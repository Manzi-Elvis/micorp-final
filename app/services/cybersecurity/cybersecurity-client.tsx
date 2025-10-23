"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Eye, Lock, AlertTriangle, ArrowRight, CheckCircle, Target, Users, Zap } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function CybersecurityClient() {
  const { t } = useTranslations()

  const services = [
    {
      title: "Security Audits & Assessments",
      description: "Comprehensive security evaluations to identify vulnerabilities and assess your current security posture.",
      features: ["Vulnerability Scanning", "Risk Assessment", "Security Gap Analysis", "Compliance Review"],
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to test your defenses and identify potential security weaknesses.",
      features: ["Network Penetration", "Web Application Testing", "Social Engineering", "Physical Security"],
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Security Implementation",
      description: "Deploy and configure security solutions to protect your systems and data from cyber threats.",
      features: ["Firewall Configuration", "Intrusion Detection", "Access Controls", "Encryption Setup"],
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery services when security incidents occur to minimize damage.",
      features: ["24/7 Monitoring", "Incident Investigation", "Forensic Analysis", "Recovery Planning"],
      icon: <AlertTriangle className="h-6 w-6" />
    }
  ]

  const technologies = [
    { name: "Nessus", category: "Vulnerability Scanner" },
    { name: "Metasploit", category: "Penetration Testing" },
    { name: "Wireshark", category: "Network Analysis" },
    { name: "Burp Suite", category: "Web Security" },
    { name: "Nmap", category: "Network Scanner" },
    { name: "OWASP ZAP", category: "Security Testing" },
    { name: "Splunk", category: "Security Monitoring" },
    { name: "Snort", category: "Intrusion Detection" },
    { name: "Kali Linux", category: "Security Platform" },
    { name: "OpenVAS", category: "Vulnerability Management" },
  ]

  const solutions = [
    {
      title: "Network Security",
      description: "Protect your network infrastructure with firewalls, intrusion detection, and monitoring systems.",
      icon: "🛡️"
    },
    {
      title: "Application Security",
      description: "Secure your web and mobile applications with comprehensive security testing and implementation.",
      icon: "🔒"
    },
    {
      title: "Data Protection",
      description: "Encrypt and protect sensitive data with advanced encryption and access control solutions.",
      icon: "🔐"
    },
    {
      title: "Compliance",
      description: "Ensure compliance with security standards like ISO 27001, GDPR, and industry regulations.",
      icon: "📋"
    },
    {
      title: "Security Training",
      description: "Educate your team on cybersecurity best practices and threat awareness.",
      icon: "🎓"
    },
    {
      title: "Security Monitoring",
      description: "24/7 monitoring and alerting to detect and respond to security threats in real-time.",
      icon: "👁️"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Security Assessment",
      description: "We evaluate your current security posture and identify potential vulnerabilities."
    },
    {
      step: "2", 
      title: "Strategy Development",
      description: "We develop a comprehensive security strategy tailored to your specific needs."
    },
    {
      step: "3",
      title: "Implementation",
      description: "We implement security solutions and best practices to protect your systems."
    },
    {
      step: "4",
      title: "Monitoring & Support",
      description: "We provide ongoing monitoring and support to maintain your security posture."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
            <ShieldCheck className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Cybersecurity Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Protect your business from cyber threats with our comprehensive cybersecurity services. 
          From security audits to incident response, we provide the expertise you need to stay secure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Secure Your Business
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View Security Projects</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Cybersecurity Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions to protect your business from cyber threats
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
          <h2 className="text-3xl font-bold">Security Solutions We Provide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized cybersecurity solutions for different aspects of your business
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
          <h2 className="text-3xl font-bold">Security Tools We Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage industry-leading security tools and technologies to protect your business
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
          <h2 className="text-3xl font-bold">Our Security Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to securing your business and maintaining your security posture
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
            <h2 className="text-3xl font-bold">Why Choose Our Cybersecurity Services?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Expert Security Team</h3>
                  <p className="text-muted-foreground">Our certified security professionals have extensive experience in cybersecurity.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Comprehensive Protection</h3>
                  <p className="text-muted-foreground">We provide end-to-end security solutions covering all aspects of your business.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Proactive Approach</h3>
                  <p className="text-muted-foreground">We help prevent security incidents before they occur with proactive measures.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock monitoring and support to protect your business at all times.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Cybersecurity and Security Solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Secure Your Business?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's assess your current security posture and create a comprehensive security strategy for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Security Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/request-project">Request Security Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
