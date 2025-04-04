"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { CreditCard, Phone } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function DonationStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t } = useTranslations()

  // Sample donation stats
  const stats = {
    raised: 75000,
    goal: 100000,
    donors: 342,
    avgDonation: 219,
    recentDonors: [
      { name: t("donation.anonymous"), amount: 50, time: t("donation.time.hours", { hours: 2 }), method: "card" },
      { name: "Sarah M.", amount: 100, time: t("donation.time.hours", { hours: 5 }), method: "paypal" },
      { name: "John D.", amount: 500, time: t("donation.time.days", { days: 1 }), method: "card" },
      { name: t("donation.techSolutions"), amount: 1000, time: t("donation.time.days", { days: 2 }), method: "card" },
      { name: "Maria L.", amount: 75, time: t("donation.time.days", { days: 3 }), method: "momo" },
    ],
  }

  const percentage = Math.round((stats.raised / stats.goal) * 100)

  const getPaymentIcon = (method) => {
    switch (method) {
      case "card":
        return <CreditCard className="h-4 w-4 text-muted-foreground" />
      case "paypal":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-600">
            <path
              fill="currentColor"
              d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.783 4.643h-2.189c-.11 0-.203.077-.219.185l-.598 3.792a.24.24 0 0 0 .237.28h1.988c.219 0 .405-.158.44-.374l.018-.08.179-1.135.011-.062a.44.44 0 0 1 .434-.374h.273c1.765 0 3.146-.358 3.978-1.385.385-.476.648-1.09.792-1.844a6.37 6.37 0 0 0 .136-.905c.077-.902-.019-1.514-.28-2.07l-.006-.01c-.086-.165-.19-.31-.307-.444l-.277-.278z"
            />
          </svg>
        )
      case "momo":
        return <Phone className="h-4 w-4 text-yellow-600" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6" ref={ref}>
      <Card>
        <CardHeader>
          <CardTitle>{t("donationStats.fundraisingProgress")}</CardTitle>
          <CardDescription>{t("donationStats.helpReachGoal")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">${stats.raised.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">
                {t("donationStats.goal")}: ${stats.goal.toLocaleString()}
              </span>
            </div>
            <Progress
              value={percentage}
              className="h-3"
              style={{
                transition: isInView ? "width 1.5s ease-in-out" : "none",
              }}
            />
            <div className="text-center text-sm text-muted-foreground">
              {percentage}% {t("donationStats.ofOurGoal")}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="space-y-1">
              <p className="text-3xl font-bold">{stats.donors}</p>
              <p className="text-sm text-muted-foreground">{t("donationStats.donors")}</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold">${stats.avgDonation}</p>
              <p className="text-sm text-muted-foreground">{t("donationStats.avgDonation")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("donationStats.recentSupporters")}</CardTitle>
          <CardDescription>{t("donationStats.joinDonors")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {stats.recentDonors.map((donor, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {getPaymentIcon(donor.method)}
                  <div>
                    <p className="font-medium">{donor.name}</p>
                    <p className="text-sm text-muted-foreground">{donor.time}</p>
                  </div>
                </div>
                <p className="font-medium">${donor.amount}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

