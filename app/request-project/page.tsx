import type React from "react"
import type { Metadata } from "next"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, DollarSign, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import { useTranslations } from "@/hooks/use-translations"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { Loading } from "@/components/ui/loading"

export const metadata: Metadata = {
  title: "Request a Project | Mirror Corporation - Get Your Custom Software Development Quote",
  description: "Submit your project requirements to Mirror Corporation for custom software development, web applications, mobile apps, AI solutions, and digital transformation. Get a free quote from our expert team.",
  keywords: [
    "request project quote",
    "custom software development quote",
    "web development project request",
    "mobile app development quote",
    "AI solutions project",
    "digital transformation project",
    "software development consultation",
    "technology project proposal",
    "custom software quote",
    "web application development",
    "mobile application development",
    "AI machine learning project",
    "cybersecurity project",
    "cloud services project",
    "technology consulting quote",
    "software development services",
    "digital solutions project",
    "technology implementation",
    "software engineering project",
    "innovation technology project"
  ],
  openGraph: {
    title: "Request a Project | Mirror Corporation - Get Your Custom Software Development Quote",
    description: "Submit your project requirements to Mirror Corporation for custom software development, web applications, mobile apps, AI solutions, and digital transformation. Get a free quote from our expert team.",
    url: "https://micorp.pro/request-project",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Request a Project",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Project | Mirror Corporation - Get Your Custom Software Development Quote",
    description: "Submit your project requirements to Mirror Corporation for custom software development, web applications, mobile apps, AI solutions, and digital transformation. Get a free quote from our expert team.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/request-project",
  },
}

export default function RequestJobPage() {
  const { t } = useTranslations()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    client_phone: "",
    company_name: "",
    project_title: "",
    project_description: "",
    project_type: "",
    budget_range: "",
    timeline: "",
    requirements: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowSuccess(false)

    try {
      const { error } = await supabase.from("job_requests").insert([formData])

      if (error) throw error

      // Send email notification
      try {
        const response = await fetch("/api/send-job-notification", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          console.error("Failed to send notification email")
        }
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError)
        // Don't fail the whole process if email fails
      }

      setShowSuccess(true)
      toast.success("Job request submitted successfully! We'll get back to you soon.")

      // Reset form
      setFormData({
        client_name: "",
        client_email: "",
        client_phone: "",
        company_name: "",
        project_title: "",
        project_description: "",
        project_type: "",
        budget_range: "",
        timeline: "",
        requirements: "",
      })

      // Hide success message after 8 seconds
      setTimeout(() => setShowSuccess(false), 8000)
    } catch (error) {
      console.error("Error submitting job request:", error)
      toast.error("Failed to submit job request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("requestProject.title")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
          {t("requestProject.subtitle")}
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        {showSuccess && (
          <Alert className="mb-8 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <div className="space-y-2">
                <p className="font-semibold">Project request submitted successfully!</p>
                <p>Thank you for choosing Micorp. We've received your project details and our team will review them carefully.</p>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight className="h-4 w-4" />
                  <span>You'll receive a confirmation email shortly</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight className="h-4 w-4" />
                  <span>We'll get back to you within 24-48 hours with a proposal or questions</span>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Project Details
            </CardTitle>
            <CardDescription>Please provide as much detail as possible about your project requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Client Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Client Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="client_name">Full Name *</Label>
                    <Input
                      id="client_name"
                      value={formData.client_name}
                      onChange={(e) => handleInputChange("client_name", e.target.value)}
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client_email">Email Address *</Label>
                    <Input
                      id="client_email"
                      type="email"
                      value={formData.client_email}
                      onChange={(e) => handleInputChange("client_email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="client_phone">Phone Number</Label>
                    <Input
                      id="client_phone"
                      value={formData.client_phone}
                      onChange={(e) => handleInputChange("client_phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company_name">Company Name</Label>
                    <Input
                      id="company_name"
                      value={formData.company_name}
                      onChange={(e) => handleInputChange("company_name", e.target.value)}
                      placeholder="Your company name (optional)"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Project Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="project_title">Project Title *</Label>
                  <Input
                    id="project_title"
                    value={formData.project_title}
                    onChange={(e) => handleInputChange("project_title", e.target.value)}
                    placeholder="Brief title for your project"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project_type">Project Type *</Label>
                  <Select
                    value={formData.project_type}
                    onValueChange={(value) => handleInputChange("project_type", value)}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-app">Mobile App</SelectItem>
                      <SelectItem value="desktop-app">Desktop Application</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="e-commerce">E-commerce</SelectItem>
                      <SelectItem value="cms">Content Management System</SelectItem>
                      <SelectItem value="api-development">API Development</SelectItem>
                      <SelectItem value="maintenance">Website Maintenance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project_description">Project Description *</Label>
                  <Textarea
                    id="project_description"
                    value={formData.project_description}
                    onChange={(e) => handleInputChange("project_description", e.target.value)}
                    placeholder="Describe your project in detail. What do you want to build? What features do you need?"
                    className="min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Specific Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => handleInputChange("requirements", e.target.value)}
                    placeholder="Any specific technologies, integrations, or requirements you have in mind?"
                    className="min-h-[100px]"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Budget and Timeline */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Budget & Timeline
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget_range">Budget Range</Label>
                    <Select
                      value={formData.budget_range}
                      onValueChange={(value) => handleInputChange("budget_range", value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under $1,000</SelectItem>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-plus">$50,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Expected Timeline</Label>
                    <Select 
                      value={formData.timeline} 
                      onValueChange={(value) => handleInputChange("timeline", value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-months-plus">6+ months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <Loading size="sm" />
                    {t("requestProject.submitting")}
                  </div>
                ) : (
                  t("requestProject.submitProjectRequest")
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
