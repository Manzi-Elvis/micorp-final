"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Phone } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { supabase } from "@/lib/supabase"

export default function DonationStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t } = useTranslations()
  const [recentSupporters, setRecentSupporters] = useState([])
  const [loading, setLoading] = useState(true)

  // Sample donation stats - you can replace with real data
  const stats = {
    raised: 75000,
    goal: 100000,
    donors: 342,
    avgDonation: 219,
  }

  useEffect(() => {
    fetchRecentSupporters()
  }, [])

  const fetchRecentSupporters = async () => {
    try {
      // Fetch recent job requests (our "supporters" - people who trust us with their projects)
      const { data: jobRequests, error } = await supabase
        .from("job_requests")
        .select("client_name, client_email, project_title, created_at, project_type")
        .order("created_at", { ascending: false })
        .limit(5)

      if (error) throw error

      // Transform job requests into supporter format
      const supporters =
        jobRequests?.map((request, index) => {
          const timeAgo = getTimeAgo(new Date(request.created_at))
          const paymentMethods = ["card", "paypal", "momo"]
          const randomMethod = paymentMethods[Math.floor(Math.random() * paymentMethods.length)]
          const randomAmount = Math.floor(Math.random() * 500) + 50

          return {
            name: request.client_name,
            amount: randomAmount,
            time: timeAgo,
            method: randomMethod,
            project: request.project_title,
            type: request.project_type,
            initials: request.client_name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase(),
          }
        }) || []

      // Add some static donors to fill the list
      const staticDonors = [
        // {
        //   name: t("donation.anonymous") || "Anonymous",
        //   amount: 50,
        //   time: t("donation.time.hours", { hours: 2 }) || "2 hours ago",
        //   method: "card",
        //   initials: "AN",
        // },
        // {
        //   name: "Sarah M.",
        //   amount: 100,
        //   time: t("donation.time.hours", { hours: 5 }) || "5 hours ago",
        //   method: "paypal",
        //   initials: "SM",
        // },
        // {
        //   name: "John D.",
        //   amount: 500,
        //   time: t("donation.time.days", { days: 1 }) || "1 day ago",
        //   method: "card",
        //   initials: "JD",
        // },
      ]

      // Combine and limit to 5 most recent
      const allSupporters = [...supporters, ...staticDonors].slice(0, 5)
      setRecentSupporters(allSupporters)
    } catch (error) {
      console.error("Error fetching recent supporters:", error)
      // Fallback to static data
      setRecentSupporters([
        // { name: "Anonymous", amount: 50, time: "2 hours ago", method: "card", initials: "AN" },
        // { name: "Sarah M.", amount: 100, time: "5 hours ago", method: "paypal", initials: "SM" },
        // { name: "John D.", amount: 500, time: "1 day ago", method: "card", initials: "JD" },
      ])
    } finally {
      setLoading(false)
    }
  }

  const getTimeAgo = (date) => {
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours} hours ago`

    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays === 1) return "1 day ago"
    return `${diffInDays} days ago`
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
          <CardTitle>{t("donationStats.fundraisingProgress") || "Fundraising Progress"}</CardTitle>
          <CardDescription>{t("donationStats.helpReachGoal") || "Help us reach our goal"}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">${stats.raised.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">
                {t("donationStats.goal") || "Goal"}: ${stats.goal.toLocaleString()}
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
              {percentage}% {t("donationStats.ofOurGoal") || "of our goal"}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="space-y-1">
              <p className="text-3xl font-bold">{stats.donors}</p>
              <p className="text-sm text-muted-foreground">{t("donationStats.donors") || "Donors"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold">${stats.avgDonation}</p>
              <p className="text-sm text-muted-foreground">{t("donationStats.avgDonation") || "Avg. Donation"}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("donationStats.recentSupporters") || "Recent Supporters"}</CardTitle>
          <CardDescription>
            {t("donationStats.joinDonors") || "Join these amazing people supporting our mission"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-muted rounded-full animate-pulse" />
                    <div className="space-y-1">
                      <div className="h-4 bg-muted rounded w-20 animate-pulse" />
                      <div className="h-3 bg-muted rounded w-16 animate-pulse" />
                    </div>
                  </div>
                  <div className="h-4 bg-muted rounded w-12 animate-pulse" />
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-4">
              {recentSupporters.map((supporter, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder-user.jpg`} alt={supporter.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                        {supporter.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-2">
                      {getPaymentIcon(supporter.method)}
                      <div>
                        <p className="font-medium text-sm">{supporter.name}</p>
                        <p className="text-xs text-muted-foreground">{supporter.time}</p>
                        {supporter.project && (
                          <p className="text-xs text-blue-600 truncate max-w-32" title={supporter.project}>
                            {supporter.project}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">${supporter.amount}</p>
                    {supporter.type && (
                      <Badge variant="outline" className="text-xs">
                        {supporter.type.replace("-", " ")}
                      </Badge>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
