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

export const metadata: Metadata = {
  title: {
    template: "%s | Micorp",
    default: "Micorp - Technology Solutions & Software Development",
  },
  description:
    "Micorp delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services. Transform your business with our expert team.",
  keywords: [
    "Micorp",
    "software development",
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
  ],
  authors: [{ name: "Chaste Djaziri" }],
  creator: "Chaste Djaziri",
  publisher: "Micorp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'Next.js',
  metadataBase: new URL('https://micorp.pro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://micorp.pro',
    title: 'Micorp - Technology Solutions & Software Development',
    description: 'Micorp delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services.',
    siteName: 'Micorp',
    images: [
      {
        url: '/brand/logo.png',
        width: 1200,
        height: 630,
        alt: 'Micorp Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micorp - Technology Solutions & Software Development',
    description: 'Micorp delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services.',
    images: ['/brand/logo.png'],
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
    google: 'your-google-verification-code',
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
              "name": "Micorp",
              "url": "https://micorp.pro",
              "logo": "https://micorp.pro/brand/logo.png",
              "description": "Micorp delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Rwanda"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+250-xxx-xxx-xxx",
                "contactType": "customer service",
                "email": "contact@micorp.pro"
              },
              "sameAs": [
                "https://github.com/chaste-djaziri",
                "https://instagram.com/chaste_djaziri/"
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
              "name": "Micorp",
              "url": "https://micorp.pro",
              "description": "Micorp delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://micorp.pro/search?q={search_term_string}"
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
                  "item": "https://micorp.pro"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://micorp.pro/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Services",
                  "item": "https://micorp.pro/services"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Portfolio",
                  "item": "https://micorp.pro/portfolio"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Team",
                  "item": "https://micorp.pro/team"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Contact",
                  "item": "https://micorp.pro/contact"
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