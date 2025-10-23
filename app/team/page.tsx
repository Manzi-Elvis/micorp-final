import type { Metadata } from "next"
import TeamPageClient from "./team-client"

export const metadata: Metadata = {
  title: "Our Team | Mirror Corporation - Expert Software Developers & Technology Professionals",
  description: "Meet the talented team behind Mirror Corporation - expert software developers, AI engineers, cybersecurity specialists, and technology professionals based in Rwanda, delivering innovative solutions across Africa.",
  keywords: [
    "Mirror Corporation team",
    "software development team",
    "technology professionals Rwanda",
    "AI engineers team",
    "cybersecurity experts",
    "software developers Rwanda",
    "technology team Africa",
    "expert developers",
    "tech professionals team",
    "software engineering team",
    "digital solutions team",
    "technology innovation team",
    "software development experts",
    "tech talent Rwanda",
    "technology specialists",
    "development team portfolio",
    "technology professionals",
    "software engineering experts",
    "tech team showcase",
    "innovation technology team"
  ],
  openGraph: {
    title: "Our Team | Mirror Corporation - Expert Software Developers & Technology Professionals",
    description: "Meet the talented team behind Mirror Corporation - expert software developers, AI engineers, cybersecurity specialists, and technology professionals based in Rwanda, delivering innovative solutions across Africa.",
    url: "https://micorp.pro/team",
    siteName: "Mirror Corporation",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Corporation - Our Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Mirror Corporation - Expert Software Developers & Technology Professionals",
    description: "Meet the talented team behind Mirror Corporation - expert software developers, AI engineers, cybersecurity specialists, and technology professionals based in Rwanda, delivering innovative solutions across Africa.",
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: "/team",
  },
}

export default function TeamPage() {
  return <TeamPageClient />
}

