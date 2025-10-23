"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Brain, Eye, MessageSquare, BarChart, Zap, ArrowRight, CheckCircle, Target } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function AIMLClient() {
  const { t } = useTranslations()

  const services = [
    {
      title: "Custom AI Models",
      description: "Tailored machine learning models designed specifically for your business needs and data.",
      features: ["Deep Learning", "Neural Networks", "Model Training", "Performance Optimization"],
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Natural Language Processing",
      description: "AI solutions that understand and process human language for chatbots, sentiment analysis, and more.",
      features: ["Chatbots", "Sentiment Analysis", "Text Classification", "Language Translation"],
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: "Computer Vision",
      description: "AI-powered image and video analysis for object detection, facial recognition, and visual insights.",
      features: ["Object Detection", "Facial Recognition", "Image Classification", "Video Analysis"],
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Predictive Analytics",
      description: "Advanced analytics and forecasting to help you make data-driven business decisions.",
      features: ["Forecasting", "Risk Assessment", "Trend Analysis", "Business Intelligence"],
      icon: <BarChart className="h-6 w-6" />
    }
  ]

  const technologies = [
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "PyTorch", category: "Deep Learning" },
    { name: "Scikit-learn", category: "ML Library" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "NLTK", category: "NLP" },
    { name: "SpaCy", category: "NLP" },
    { name: "Pandas", category: "Data Analysis" },
    { name: "NumPy", category: "Numerical Computing" },
    { name: "AWS SageMaker", category: "Cloud ML" },
    { name: "Google Cloud AI", category: "Cloud ML" },
  ]

  const applications = [
    {
      title: "Intelligent Chatbots",
      description: "AI-powered customer service bots that understand context and provide helpful responses.",
      icon: "🤖"
    },
    {
      title: "Predictive Maintenance",
      description: "ML models that predict equipment failures before they happen, reducing downtime.",
      icon: "🔧"
    },
    {
      title: "Fraud Detection",
      description: "Advanced algorithms that identify suspicious activities and prevent fraudulent transactions.",
      icon: "🛡️"
    },
    {
      title: "Recommendation Systems",
      description: "Personalized recommendations that improve user engagement and increase sales.",
      icon: "💡"
    },
    {
      title: "Image Recognition",
      description: "Computer vision solutions for automated image tagging, quality control, and analysis.",
      icon: "👁️"
    },
    {
      title: "Process Automation",
      description: "AI-driven automation that streamlines workflows and reduces manual tasks.",
      icon: "⚡"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Data Analysis & Strategy",
      description: "We analyze your data and business requirements to design the optimal AI solution."
    },
    {
      step: "2", 
      title: "Model Development",
      description: "Our data scientists develop and train custom AI models using your specific data."
    },
    {
      step: "3",
      title: "Testing & Validation",
      description: "We rigorously test and validate the AI models to ensure accuracy and reliability."
    },
    {
      step: "4",
      title: "Deployment & Integration",
      description: "We deploy the AI solution and integrate it seamlessly with your existing systems."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
            <Cpu className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">AI & Machine Learning Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Harness the power of artificial intelligence and machine learning to transform your business. 
          From custom AI models to intelligent automation, we deliver cutting-edge AI solutions that drive results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Explore AI Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View AI Projects</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our AI & ML Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive artificial intelligence and machine learning solutions for modern businesses
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

      {/* AI Applications */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">AI Applications We Build</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world AI solutions that solve complex business challenges and drive innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{app.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
              <p className="text-muted-foreground">{app.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">AI Technologies We Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage the latest AI and machine learning frameworks and tools
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
          <h2 className="text-3xl font-bold">Our AI Development Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to developing and deploying AI solutions that deliver real business value
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
            <h2 className="text-3xl font-bold">Why Choose Our AI Services?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Expert Data Scientists</h3>
                  <p className="text-muted-foreground">Our team has deep expertise in AI, machine learning, and data science.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Custom Solutions</h3>
                  <p className="text-muted-foreground">We build AI solutions tailored to your specific business needs and data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Proven Results</h3>
                  <p className="text-muted-foreground">Our AI solutions deliver measurable business impact and ROI.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Ongoing Support</h3>
                  <p className="text-muted-foreground">We provide continuous monitoring and optimization of your AI systems.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="AI and Machine Learning Solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Transform Your Business with AI?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's discuss how AI and machine learning can solve your business challenges and drive innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your AI Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/request-project">Get AI Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
