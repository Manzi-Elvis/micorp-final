import type { Metadata } from "next"
import AIMLClient from "./ai-ml-client"

export const metadata: Metadata = {
  title: "AI & Machine Learning Services | Mirror Corporation - Custom AI Solutions",
  description: "Professional AI and machine learning services including custom AI models, natural language processing, computer vision, predictive analytics, and intelligent automation solutions for businesses.",
  keywords: [
    "AI development services",
    "machine learning solutions",
    "artificial intelligence consulting",
    "custom AI models",
    "natural language processing",
    "computer vision",
    "predictive analytics",
    "AI automation",
    "deep learning",
    "neural networks",
    "AI integration",
    "machine learning consulting",
    "AI solutions Rwanda",
    "AI development company",
    "intelligent automation",
    "AI-powered applications",
    "data science services",
    "AI model training",
    "AI implementation",
    "AI consulting services"
  ],
  openGraph: {
    title: "AI & Machine Learning Services | Mirror Corporation - Custom AI Solutions",
    description: "Professional AI and machine learning services including custom AI models, natural language processing, computer vision, predictive analytics, and intelligent automation solutions for businesses.",
    url: "https://micorp.pro/services/ai-ml",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - AI & Machine Learning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Machine Learning Services | Mirror Corporation - Custom AI Solutions",
    description: "Professional AI and machine learning services including custom AI models, natural language processing, computer vision, predictive analytics, and intelligent automation solutions for businesses.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services/ai-ml",
  },
}

export default function AIMLPage() {
  return <AIMLClient />
}
