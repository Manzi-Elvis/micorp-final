import type { Metadata } from "next"
import AnalyticsClient from "./analytics-client"

export const metadata: Metadata = {
  title: "Data Analytics Services | Mirror Corporation - Business Intelligence & Insights",
  description: "Professional data analytics services including business intelligence, predictive analytics, data visualization, and custom analytics solutions. Transform your data into actionable business insights.",
  keywords: [
    "data analytics services",
    "business intelligence",
    "predictive analytics",
    "data visualization",
    "data science services",
    "analytics consulting",
    "data insights",
    "business analytics",
    "data analysis",
    "reporting solutions",
    "data dashboard",
    "analytics platform",
    "data consulting",
    "analytics company",
    "data analytics Rwanda",
    "business intelligence solutions",
    "data visualization tools",
    "analytics implementation",
    "data strategy",
    "analytics optimization"
  ],
  openGraph: {
    title: "Data Analytics Services | Mirror Corporation - Business Intelligence & Insights",
    description: "Professional data analytics services including business intelligence, predictive analytics, data visualization, and custom analytics solutions. Transform your data into actionable business insights.",
    url: "https://micorp.pro/services/analytics",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Data Analytics Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analytics Services | Mirror Corporation - Business Intelligence & Insights",
    description: "Professional data analytics services including business intelligence, predictive analytics, data visualization, and custom analytics solutions. Transform your data into actionable business insights.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services/analytics",
  },
}

export default function AnalyticsPage() {
  return <AnalyticsClient />
}
