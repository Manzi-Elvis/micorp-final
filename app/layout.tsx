import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FirstVisitModal from "@/components/first-visit-modal"
import ScrollToTop from "@/components/scroll-to-top"
import ResetScroll from "@/components/reset-scroll"
import OfflineHandler from "@/app/offline"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const siteUrl = "https://micorp.pro"
const ogImage = `${siteUrl}/brand/logo.png`

export const metadata: Metadata = {
  title: {
    template: "%s | Mirror Corporation",
    default: "Mirror Corporation | Technology Solutions & Software Development",
  },
  applicationName: "Mirror Corporation",
  description:
    "Mirror Corporation is a Rwanda-based technology partner delivering custom software, web and mobile development, AI, cybersecurity, and cloud engineering for startups and enterprises across Africa and beyond.",
  keywords: [
    "Micorp",
    "Mirror Corporation",
    "Mirror Corporation Rwanda",
    "software development",
    "software outsourcing Africa",
    "custom software engineering",
    "web development",
    "mobile app development",
    "technology solutions",
    "digital transformation",
    "AI/ML services",
    "cybersecurity",
    "cloud services",
    "database solutions",
    "data analytics",
    "custom software",
    "e-commerce development",
    "UI/UX design",
    "API development",
    "technology consulting",
    "IT consulting Rwanda",
    "digital transformation partner",
    "product design and development",
    "cloud migration experts",
    "enterprise application modernization",
  ],
  authors: [{ name: "Chaste Djaziri" }],
  creator: "Chaste Djaziri",
  publisher: "Mirror Corporation",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Next.js",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Mirror Corporation | Technology Solutions & Software Development',
    description: 'Mirror Corporation is a technology partner delivering custom software, digital transformation, and secure cloud solutions for ambitious organisations.',
    siteName: 'Mirror Corporation',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Micorp Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirror Corporation | Technology Solutions & Software Development',
    description: 'Mirror Corporation is a technology partner delivering custom software, digital transformation, and secure cloud solutions for ambitious organisations.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mirror Corporation",
              "url": siteUrl,
              "logo": ogImage,
              "description": "Mirror Corporation delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Rwanda"
              },
              "areaServed": [
                {
                  "@type": "AdministrativeArea",
                  "name": "Africa"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Europe"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+250-794-578-640",
                "contactType": "customer service",
                "email": "contact@micorp.pro"
              },
              "sameAs": [
                "https://github.com/chaste-djaziri",
                "https://instagram.com/chaste_djaziri/",
                "https://www.linkedin.com/in/chaste-djaziri-6bb4b62a5/"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mirror Corporation",
              "url": siteUrl,
              "description": "Mirror Corporation delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${siteUrl}/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": siteUrl
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": `${siteUrl}/about`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Services",
                  "item": `${siteUrl}/services`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Portfolio",
                  "item": `${siteUrl}/portfolio`
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Team",
                  "item": `${siteUrl}/team`
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Contact",
                  "item": `${siteUrl}/contact`
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Mirror Corporation",
              "alternateName": "Micorp",
              "url": siteUrl,
              "image": ogImage,
              "description": "Mirror Corporation provides full-stack software development, AI engineering, cybersecurity, and cloud services for global organisations.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Rwanda",
                "addressLocality": "Kigali"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Rwanda"
                },
                {
                  "@type": "Country", 
                  "name": "Africa"
                },
                {
                  "@type": "Country",
                  "name": "Europe"
                }
              ],
              "telephone": "+250-794-578-640",
              "email": "contact@micorp.pro",
              "foundingDate": "2024",
              "numberOfEmployees": "15",
              "sameAs": [
                "https://github.com/chaste-djaziri",
                "https://instagram.com/chaste_djaziri/",
                "https://www.linkedin.com/in/chaste-djaziri-6bb4b62a5/"
              ],
              "serviceType": [
                "Custom Software Development",
                "Web Application Development", 
                "Mobile Application Development",
                "Artificial Intelligence Engineering",
                "Machine Learning Solutions",
                "Cybersecurity Consulting",
                "Cloud Infrastructure Services",
                "Data Analytics",
                "Database Solutions",
                "UI/UX Design",
                "API Development",
                "Digital Transformation",
                "Technology Consulting"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Software Development"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Mobile App Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & Machine Learning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cybersecurity Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud Services"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mirror Corporation",
              "alternateName": "Micorp",
              "url": siteUrl,
              "logo": ogImage,
              "image": ogImage,
              "description": "Mirror Corporation is a technology company based in Kigali, Rwanda, specializing in custom software development, AI solutions, cybersecurity, and cloud services.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Rwanda",
                "addressLocality": "Kigali"
              },
              "telephone": "+250-794-578-640",
              "email": "contact@micorp.pro",
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$",
              "currenciesAccepted": "USD, RWF, EUR",
              "paymentAccepted": "Credit Card, Bank Transfer, Mobile Money",
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Rwanda"
                },
                {
                  "@type": "Country",
                  "name": "Africa"
                },
                {
                  "@type": "Country", 
                  "name": "Europe"
                }
              ],
              "hasMap": "https://maps.google.com/?q=Kigali,Rwanda",
              "sameAs": [
                "https://github.com/chaste-djaziri",
                "https://instagram.com/chaste_djaziri/",
                "https://www.linkedin.com/in/chaste-djaziri-6bb4b62a5/"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Mirror Corporation offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mirror Corporation offers comprehensive technology services including custom software development, web and mobile application development, AI and machine learning solutions, cybersecurity services, cloud computing, data analytics, and digital transformation consulting."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Where is Mirror Corporation located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mirror Corporation is based in Kigali, Rwanda, and serves clients across Africa and beyond. We provide remote and on-site services to organizations worldwide."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I get a quote for my project?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "You can request a project quote by visiting our Request Project page, filling out our contact form, or emailing us directly at contact@micorp.pro. We provide free consultations and detailed project proposals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies does Mirror Corporation specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in modern web technologies (React, Next.js, Node.js), mobile development (React Native, Flutter), AI/ML frameworks, cloud platforms (AWS, Azure, Google Cloud), cybersecurity solutions, and database technologies."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Analytics />
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <FirstVisitModal />
              <ScrollToTop />
              <ResetScroll />
              <OfflineHandler />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
