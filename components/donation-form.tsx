// app/components/DonationForm.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCardIcon, Phone } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { motion } from "framer-motion"

export default function DonationForm() {
  const [paymentMethod, setPaymentMethod] = useState("paypal")
  const [isSuccess, setIsSuccess] = useState(false)
  const scriptLoaded = useRef(false)
  const { t } = useTranslations()

  useEffect(() => {
    const container = document.getElementById("donate-button")
    if (paymentMethod === "paypal" && container) {
      container.innerHTML = ""

      const renderButton = () => {
        // @ts-ignore
        if (window.PayPal) {
          // @ts-ignore
          window.PayPal.Donation.Button({
            env: "production",
            hosted_button_id: "8SJUMBBGGHPZS",
            image: {
              src: "https://pics.paypal.com/00/s/MjhhMDFjNjgtZjFmOS00MDZjLTg2OTEtYWJkNDE4ZTIwMjEw/file.PNG",
              alt: "Donate with PayPal button",
              title: "PayPal - The safer, easier way to pay online!",
            },
          }).render("#donate-button")
        }
      }

      if (!scriptLoaded.current) {
        const script = document.createElement("script")
        script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        script.charset = "UTF-8"
        script.onload = () => {
          scriptLoaded.current = true
          renderButton()
        }
        document.body.appendChild(script)
      } else {
        renderButton()
      }
    }
  }, [paymentMethod])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{t("donation.makeADonation")}</CardTitle>
        <CardDescription>{t("donation.supportHelps")}</CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8 space-y-4"
          >
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-2xl">✔</span>
            </div>
            <h3 className="text-xl font-bold">{t("donation.thankYou")}</h3>
            <p className="text-muted-foreground">{t("donation.contributionHelps")}</p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-px flex-1 bg-muted" />
                <span className="mx-2 text-muted-foreground text-sm">{t("donation.paymentMethod")}</span>
                <div className="h-px flex-1 bg-muted" />
              </div>

              <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="stripe" disabled className="flex items-center gap-2">
                    <CreditCardIcon className="h-4 w-4" />
                    Stripe <span className="text-xs text-muted-foreground">(Not yet available)</span>
                  </TabsTrigger>
                  <TabsTrigger value="paypal" className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-600">
                      <path
                        fill="currentColor"
                        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"
                      />
                    </svg>
                    PayPal
                  </TabsTrigger>
                  <TabsTrigger value="momo" disabled className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    MTN <span className="text-xs text-muted-foreground">(Not yet available)</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="paypal" className="text-center pt-6">
                  <p className="text-muted-foreground text-sm mb-4">{t("donation.donateWithPayPal")}</p>
                  <div id="donate-button-container">
                    <div id="donate-button" className="flex justify-center" />
                  </div>
                </TabsContent>

                <TabsContent value="stripe" className="pt-4 text-center text-muted-foreground text-sm">
                  {t("donation.stripeUnavailable")}
                </TabsContent>

                <TabsContent value="momo" className="pt-4 text-center text-muted-foreground text-sm">
                  {t("donation.momoUnavailable")}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
