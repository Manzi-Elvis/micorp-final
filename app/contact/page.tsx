import type React from "react"
import type { Metadata } from "next"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { useTranslations } from "@/hooks/use-translations"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

export const metadata: Metadata = {
  title: "Contact Us | Mirror Corporation - Get in Touch for Technology Solutions",
  description: "Contact Mirror Corporation for custom software development, AI solutions, cybersecurity, and cloud services. Based in Kigali, Rwanda, serving clients across Africa and beyond. Get your free consultation today.",
  keywords: [
    "contact Mirror Corporation",
    "technology consulting contact",
    "software development consultation",
    "AI solutions contact",
    "cybersecurity services contact",
    "cloud services consultation",
    "technology partner contact",
    "software development inquiry",
    "digital transformation consultation",
    "technology solutions contact",
    "IT consulting Rwanda",
    "tech company contact",
    "software development company contact",
    "technology services inquiry",
    "digital solutions contact",
    "innovation technology contact",
    "software engineering consultation",
    "technology solutions provider contact",
    "digital platform development contact",
    "technology implementation consultation"
  ],
  openGraph: {
    title: "Contact Us | Mirror Corporation - Get in Touch for Technology Solutions",
    description: "Contact Mirror Corporation for custom software development, AI solutions, cybersecurity, and cloud services. Based in Kigali, Rwanda, serving clients across Africa and beyond. Get your free consultation today.",
    url: "https://micorp.pro/contact",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mirror Corporation - Get in Touch for Technology Solutions",
    description: "Contact Mirror Corporation for custom software development, AI solutions, cybersecurity, and cloud services. Based in Kigali, Rwanda, serving clients across Africa and beyond. Get your free consultation today.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  const { t } = useTranslations()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowSuccess(false)

    try {
      const { error } = await supabase.from("contact_submissions").insert([formData])

      if (error) throw error

      // Send notification email to admin
      try {
        await fetch("/api/send-contact-notification", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError)
        // Don't fail the whole process if email fails
      }

      setShowSuccess(true)
      toast.success("Message sent successfully! We'll get back to you soon.")

      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      console.error("Error submitting contact form:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("contactPage.title")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{t("contactPage.subtitle")}</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>{t("contactPage.form.title")}</CardTitle>
            <CardDescription>{t("contactPage.form.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            {showSuccess && (
              <Alert className="mb-6 border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Message sent successfully!</strong> We've received your message and will get back to you within 24-48 hours.
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">{t("contactPage.form.firstName")}</Label>
                  <Input
                    id="first-name"
                    value={formData.first_name}
                    onChange={(e) => handleInputChange("first_name", e.target.value)}
                    placeholder={t("contactPage.form.firstNamePlaceholder")}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">{t("contactPage.form.lastName")}</Label>
                  <Input
                    id="last-name"
                    value={formData.last_name}
                    onChange={(e) => handleInputChange("last_name", e.target.value)}
                    placeholder={t("contactPage.form.lastNamePlaceholder")}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("contactPage.form.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder={t("contactPage.form.emailPlaceholder")}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{t("contactPage.form.subject")}</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder={t("contactPage.form.subjectPlaceholder")}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t("contactPage.form.message")}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder={t("contactPage.form.messagePlaceholder")}
                  className="min-h-[150px]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : t("contactPage.form.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("contactPage.info.title")}</CardTitle>
              <CardDescription>{t("contactPage.info.description")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">{t("contactPage.info.address.title")}</p>
                  <p className="text-muted-foreground">{t("contactPage.info.address.line1")}</p>
                  <p className="text-muted-foreground">{t("contactPage.info.address.line2")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">{t("contactPage.info.phone.title")}</p>
                  <p className="text-muted-foreground">{t("contactPage.info.phone.number")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">{t("contactPage.info.email.title")}</p>
                  <p className="text-muted-foreground">{t("contactPage.info.email.address")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">{t("contactPage.info.hours.title")}</p>
                  <p className="text-muted-foreground">{t("contactPage.info.hours.weekdays")}</p>
                  <p className="text-muted-foreground">{t("contactPage.info.hours.saturday")}</p>
                  <p className="text-muted-foreground">{t("contactPage.info.hours.sunday")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("contactPage.social.title")}</CardTitle>
              <CardDescription>{t("contactPage.social.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-label={t("contactPage.social.facebook")}
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-label={t("contactPage.social.instagram")}
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-label={t("contactPage.social.twitter")}
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-label={t("contactPage.social.linkedin")}
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
