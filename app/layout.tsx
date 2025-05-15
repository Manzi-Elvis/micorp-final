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
    template: "%s | Micorp - Mirror Corporation",
    default: "Mirror Corporation – Technology with Clarity",
  },
  description:
    "Mirror Corporation (Micorp) - Where innovation meets integrity. We deliver top-tier technology solutions that inspire and empower across industries.",
  keywords: [
    "Mirror Corporation",
    "Micorp",
    "software development",
    "technology solutions",
    "digital transformation",
    "innovation",
  ],
  authors: [{ name: "Chaste Djaziri" }],
  creator: "Chaste Djaziri",
  publisher: "Mirror Corporation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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



import './globals.css'