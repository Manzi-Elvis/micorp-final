"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Check, ArrowRight, Shield, Sparkles, Zap } from "lucide-react"

type BillingCycle = "monthly" | "yearly"

type Plan = {
  id: string
  title: string
  description: string
  monthly: number
  annual: number
  oneTime: number
  badge?: string
  bestFor: string
  deliverables: string[]
  extras?: string[]
}

type OneTimePackage = {
  title: string
  price: number
  summary: string
  details: string[]
}

const formatCurrency = (value: number) => `$${value.toLocaleString("en-US")}`

const plans: Plan[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom marketing sites, booking portals, and web apps built on modern stacks (Next.js, Node, headless CMS).",
    monthly: 850,
    annual: 9000,
    oneTime: 5200,
    badge: "Most booked",
    bestFor: "Funded startups & SMEs",
    deliverables: [
      "Custom UX/UI design and responsive build",
      "CMS setup (Sanity, Contentful, or headless WordPress)",
      "Performance, accessibility, and SEO foundations",
      "Launch support, analytics, and QA included",
    ],
    extras: ["Typical timeline: 6–10 weeks", "Integrates with Stripe, HubSpot, or your CRM", "Staging + production environments"],
  },
  {
    id: "ui-ux",
    title: "UI/UX & Product Design",
    description: "Research, flows, and design systems that make your product clear and conversion-friendly.",
    monthly: 900,
    annual: 10500,
    oneTime: 2400,
    badge: "Design sprint",
    bestFor: "New products & redesigns",
    deliverables: [
      "User flows, wireframes, and interactive prototypes",
      "Figma design system with reusable components",
      "Conversion-focused landing pages",
      "Handover spec for engineering",
    ],
    extras: ["Usability testing on key journeys", "Design QA during build", "Two-week design sprint available"],
  },
  {
    id: "hosting",
    title: "Managed Hosting & Care",
    description: "Fast, secure hosting plus ongoing maintenance so you don't worry about uptime.",
    monthly: 65,
    annual: 690,
    oneTime: 320,
    badge: "Care plan",
    bestFor: "Live sites & web apps",
    deliverables: [
      "Cloud hosting (Vercel/Netlify/AWS) with CDN",
      "24/7 monitoring, backups, and patching",
      "Uptime target: 99.9% with alerts",
      "Monthly performance & security health check",
    ],
    extras: ["Roll-back safe deploys", "Priority incident response", "DNS and domain management"],
  },
  {
    id: "seo",
    title: "SEO & Growth Content",
    description: "Technical SEO, on-page fixes, and content that ranks for buyer keywords.",
    monthly: 600,
    annual: 6600,
    oneTime: 700,
    bestFor: "Growth teams",
    deliverables: [
      "Keyword & intent research mapped to your funnel",
      "Technical SEO fixes and schema markup",
      "4 long-form articles or landing pages per month",
      "Monthly reporting with prioritized backlog",
    ],
    extras: ["CMS publishing included", "Internal linking and CRO quick wins", "Backlink outreach optional"],
  },
  {
    id: "branding",
    title: "Branding & Creative",
    description: "Visual identity, messaging, and launch collateral that feel premium and consistent.",
    monthly: 480,
    annual: 5200,
    oneTime: 2100,
    bestFor: "New launches & refreshes",
    deliverables: [
      "Logo suite and typography palette",
      "Brand style guide with usage rules",
      "Social + pitch deck templates",
      "Voice & messaging playbook",
    ],
    extras: ["Two concept rounds included", "Asset export for web & print", "Can pair with web build"],
  },
  {
    id: "cloud",
    title: "Cloud, DevOps & Security",
    description: "Hardening, observability, and CI/CD so your product is fast, secure, and compliant.",
    monthly: 1100,
    annual: 12500,
    oneTime: 3600,
    badge: "Ops & security",
    bestFor: "Scaling products",
    deliverables: [
      "Cloud architecture review and cost plan",
      "Infrastructure-as-code baseline (Terraform/CloudFormation)",
      "CI/CD pipeline with automated testing",
      "Monitoring, alerting, and security hardening",
    ],
    extras: ["Disaster recovery playbook", "Access management & SSO setup", "Compliance-ready logging"],
  },
]

const oneTimePackages: OneTimePackage[] = [
  {
    title: "Security & Performance Audit",
    price: 950,
    summary: "Full audit of your web stack with prioritized fixes.",
    details: ["OWASP-inspired security sweep", "Lighthouse + Core Web Vitals tuning", "Action plan delivered in 5 business days"],
  },
  {
    title: "E-commerce Setup (Shopify/Medusa)",
    price: 3800,
    summary: "Commerce-ready storefront with payments, tax, and shipping.",
    details: ["Theme customization and UX polish", "Payment, shipping, and tax setup", "Handover training + SOPs"],
  },
  {
    title: "Data & Analytics Starter",
    price: 1200,
    summary: "Analytics stack that business and product teams can trust.",
    details: ["GA4/Matomo + server-side tracking", "Dashboards for KPIs and funnels", "Event taxonomy and governance"],
  },
]

export default function PricingPageClient() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly")

  const billingNote = useMemo(
    () =>
      billingCycle === "yearly"
        ? "Annual billing saves ~15% compared to monthly."
        : "Billed monthly. Cancel or pause with 30 days' notice.",
    [billingCycle],
  )

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6 text-center">
        <div className="flex justify-center">
          <Badge variant="outline" className="px-4 py-1 text-sm">
            Pricing built for real projects
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Transparent pricing for builds, hosting, and design</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Practical numbers for teams who want a modern website, ongoing hosting, design support, or growth services.
          Choose monthly, annual, or one-time project options.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 rounded-full border px-4 py-2">
            <span className="text-sm font-medium">Monthly</span>
            <Switch
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
              aria-label="Toggle annual billing"
            />
            <span className="text-sm font-medium">Annual</span>
            <Badge variant="secondary" className="ml-2">Save 15%</Badge>
          </div>
          <div className="text-sm text-muted-foreground">{billingNote}</div>
        </div>
        <p className="text-xs text-muted-foreground">
          Pricing shown in USD. We can invoice in RWF, EUR, or GBP on request.
        </p>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200 px-3 py-1 text-xs font-semibold">
              <Sparkles className="h-4 w-4" /> Core service plans
            </div>
            <h2 className="text-3xl font-bold">Pick a plan that fits the way you work</h2>
            <p className="text-muted-foreground max-w-2xl">
              Each plan can start as a one-time project, then roll into a monthly or annual care plan so you stay live, secure,
              and continuously improved.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg">
              <Link href="/request-project">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Book a call</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => {
            const headlinePrice = billingCycle === "monthly" ? plan.monthly : plan.annual
            const secondaryPrice =
              billingCycle === "yearly"
                ? `≈ ${formatCurrency(Math.round(plan.annual / 12))}/mo when billed annually`
                : "Billed monthly, flexible commitment"

            return (
              <Card key={plan.id} className="flex h-full flex-col overflow-hidden border-border/60">
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-2">
                    {plan.badge ? (
                      <Badge variant="secondary" className="rounded-full">
                        {plan.badge}
                      </Badge>
                    ) : null}
                    <span className="text-sm text-muted-foreground">{plan.bestFor}</span>
                  </div>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{formatCurrency(headlinePrice)}</span>
                      <span className="text-sm text-muted-foreground">
                        {billingCycle === "monthly" ? "per month" : "per year"}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">{secondaryPrice}</div>
                  </div>
                  <div className="rounded-lg bg-muted/60 px-3 py-2 text-sm text-muted-foreground">
                    One-time projects from <span className="font-semibold text-foreground">{formatCurrency(plan.oneTime)}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-6">
                  <div className="space-y-3">
                    {plan.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 text-green-600" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                    {plan.extras ? (
                      <div className="rounded-lg border bg-muted/40 px-3 py-3 space-y-2">
                        {plan.extras.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Shield className="mt-0.5 h-3.5 w-3.5 text-blue-600" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <Button asChild className="w-full">
                      <Link href="/request-project">
                        Choose plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Talk to sales</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-amber-500" />
          <h2 className="text-2xl font-bold">One-time project packages</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Clear pricing for focused deliverables. Perfect when you need a specific outcome without a long-term retainer.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {oneTimePackages.map((pack) => (
            <Card key={pack.title} className="h-full">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl">{pack.title}</CardTitle>
                <div className="text-2xl font-semibold">{formatCurrency(pack.price)}</div>
                <p className="text-sm text-muted-foreground">{pack.summary}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {pack.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>{detail}</span>
                  </div>
                ))}
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/request-project">Book this package</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          <h2 className="text-2xl font-bold">Every engagement includes</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Dedicated project manager and weekly check-ins",
            "Source code, design files, and documentation handed over",
            "QA across devices and modern browsers",
            "Privacy, security, and accessibility baked into delivery",
            "Slack/Teams channel with our team during your project",
            "Roadmap suggestions after launch so you keep growing",
          ].map((item) => (
            <Card key={item} className="bg-muted/50">
              <CardContent className="flex items-start gap-3 p-4 text-sm">
                <Check className="mt-0.5 h-4 w-4 text-green-600" />
                <span>{item}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Need a custom scope?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tell us what you are trying to ship and we will tailor a plan that matches your timeline and budget. Fixed bids and
          milestone-based payments are available for well-defined scopes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/request-project">
              Tell us about your project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Schedule a call</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
