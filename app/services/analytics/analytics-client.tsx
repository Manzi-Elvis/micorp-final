"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LineChart, BarChart, Target, Zap, ArrowRight, CheckCircle, TrendingUp, PieChart } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function AnalyticsClient() {
  const { t } = useTranslations()

  const services = [
    {
      title: "Business Intelligence",
      description: "Comprehensive BI solutions that transform raw data into actionable business insights and reports.",
      features: ["Interactive Dashboards", "Real-time Reports", "KPI Tracking", "Executive Summaries"],
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: "Predictive Analytics",
      description: "Advanced analytics that forecast future trends and outcomes to guide strategic decision-making.",
      features: ["Trend Analysis", "Forecasting", "Risk Assessment", "Predictive Modeling"],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Data Visualization",
      description: "Beautiful and intuitive data visualizations that make complex information easy to understand.",
      features: ["Interactive Charts", "Custom Dashboards", "Real-time Updates", "Mobile Responsive"],
      icon: <PieChart className="h-6 w-6" />
    },
    {
      title: "Data Mining & Analysis",
      description: "Deep analysis of your data to uncover hidden patterns, correlations, and valuable insights.",
      features: ["Pattern Recognition", "Statistical Analysis", "Data Cleansing", "Insight Generation"],
      icon: <Target className="h-6 w-6" />
    }
  ]

  const technologies = [
    { name: "Python", category: "Programming" },
    { name: "R", category: "Statistical Analysis" },
    { name: "Tableau", category: "Visualization" },
    { name: "Power BI", category: "Business Intelligence" },
    { name: "Apache Spark", category: "Big Data" },
    { name: "Pandas", category: "Data Analysis" },
    { name: "NumPy", category: "Numerical Computing" },
    { name: "Matplotlib", category: "Visualization" },
    { name: "Seaborn", category: "Statistical Visualization" },
    { name: "D3.js", category: "Interactive Charts" },
  ]

  const solutions = [
    {
      title: "Sales Analytics",
      description: "Track sales performance, identify trends, and optimize your sales strategy with data-driven insights.",
      icon: "📈"
    },
    {
      title: "Customer Analytics",
      description: "Understand customer behavior, preferences, and lifetime value to improve customer experience.",
      icon: "👥"
    },
    {
      title: "Marketing Analytics",
      description: "Measure marketing campaign effectiveness and ROI to optimize your marketing spend.",
      icon: "📊"
    },
    {
      title: "Financial Analytics",
      description: "Monitor financial performance, cash flow, and profitability with comprehensive financial dashboards.",
      icon: "💰"
    },
    {
      title: "Operational Analytics",
      description: "Optimize business operations and processes with data-driven insights and recommendations.",
      icon: "⚙️"
    },
    {
      title: "Risk Analytics",
      description: "Identify and assess business risks using advanced analytics and predictive modeling.",
      icon: "⚠️"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Data Assessment",
      description: "We analyze your data sources and quality to understand what insights are possible."
    },
    {
      step: "2", 
      title: "Strategy Development",
      description: "We develop a comprehensive analytics strategy tailored to your business objectives."
    },
    {
      step: "3",
      title: "Implementation",
      description: "We build and deploy analytics solutions with custom dashboards and reports."
    },
    {
      step: "4",
      title: "Training & Support",
      description: "We train your team and provide ongoing support to maximize the value of your analytics."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
            <LineChart className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Data Analytics Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transform your data into powerful business insights with our comprehensive analytics services. 
          From business intelligence to predictive analytics, we help you make data-driven decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Unlock Your Data
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View Analytics Projects</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Analytics Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive data analytics solutions to drive your business forward
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
          <h2 className="text-3xl font-bold">Analytics Solutions We Provide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized analytics solutions for different business functions and industries
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
          <h2 className="text-3xl font-bold">Analytics Technologies We Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge analytics tools and technologies to deliver powerful insights
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
          <h2 className="text-3xl font-bold">Our Analytics Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to delivering actionable insights from your data
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
            <h2 className="text-3xl font-bold">Why Choose Our Analytics Services?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Expert Data Scientists</h3>
                  <p className="text-muted-foreground">Our team has deep expertise in data science, statistics, and analytics.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Actionable Insights</h3>
                  <p className="text-muted-foreground">We deliver insights that you can immediately act upon to improve your business.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Custom Solutions</h3>
                  <p className="text-muted-foreground">Every analytics solution is tailored to your specific business needs and goals.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Ongoing Support</h3>
                  <p className="text-muted-foreground">We provide continuous support to help you maximize the value of your analytics.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Data Analytics and Business Intelligence"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Transform Your Data into Insights?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's analyze your data and create powerful analytics solutions that drive your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Analytics Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/request-project">Get Analytics Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
