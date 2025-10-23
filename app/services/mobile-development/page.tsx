import type { Metadata } from "next"
import MobileDevelopmentClient from "./mobile-development-client"

export const metadata: Metadata = {
  title: "Mobile App Development Services | Mirror Corporation - iOS & Android Apps",
  description: "Professional mobile app development services for iOS and Android. Custom mobile applications, cross-platform solutions, and native app development using React Native, Flutter, and native technologies.",
  keywords: [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "React Native development",
    "Flutter development",
    "cross-platform apps",
    "native app development",
    "mobile app design",
    "app store optimization",
    "mobile app consulting",
    "custom mobile apps",
    "mobile app maintenance",
    "app development Rwanda",
    "mobile development company",
    "professional app development",
    "mobile app solutions",
    "app development services",
    "mobile app agency",
    "mobile app development team",
    "mobile app consultation"
  ],
  openGraph: {
    title: "Mobile App Development Services | Mirror Corporation - iOS & Android Apps",
    description: "Professional mobile app development services for iOS and Android. Custom mobile applications, cross-platform solutions, and native app development using React Native, Flutter, and native technologies.",
    url: "https://micorp.pro/services/mobile-development",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Mobile App Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services | Mirror Corporation - iOS & Android Apps",
    description: "Professional mobile app development services for iOS and Android. Custom mobile applications, cross-platform solutions, and native app development using React Native, Flutter, and native technologies.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services/mobile-development",
  },
}

export default function MobileDevelopmentPage() {
  return <MobileDevelopmentClient />
}
