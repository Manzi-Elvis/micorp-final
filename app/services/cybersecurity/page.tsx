import type { Metadata } from "next"
import CybersecurityClient from "./cybersecurity-client"

export const metadata: Metadata = {
  title: "Cybersecurity Services | Mirror Corporation - Security Solutions & Protection",
  description: "Professional cybersecurity services including security audits, penetration testing, compliance consulting, and security implementation. Protect your business from cyber threats with expert security solutions.",
  keywords: [
    "cybersecurity services",
    "security audit",
    "penetration testing",
    "security consulting",
    "cyber security",
    "information security",
    "security compliance",
    "vulnerability assessment",
    "security implementation",
    "cyber protection",
    "security solutions",
    "cybersecurity company",
    "security services Rwanda",
    "cybersecurity consulting",
    "security assessment",
    "cyber threat protection",
    "security monitoring",
    "incident response",
    "security training",
    "cybersecurity solutions"
  ],
  openGraph: {
    title: "Cybersecurity Services | Mirror Corporation - Security Solutions & Protection",
    description: "Professional cybersecurity services including security audits, penetration testing, compliance consulting, and security implementation. Protect your business from cyber threats with expert security solutions.",
    url: "https://micorp.pro/services/cybersecurity",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Cybersecurity Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Services | Mirror Corporation - Security Solutions & Protection",
    description: "Professional cybersecurity services including security audits, penetration testing, compliance consulting, and security implementation. Protect your business from cyber threats with expert security solutions.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/services/cybersecurity",
  },
}

export default function CybersecurityPage() {
  return <CybersecurityClient />
}
