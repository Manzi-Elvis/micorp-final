"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Heart, CreditCardIcon, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations"

export default function DonationForm() {
  const [amount, setAmount] = useState("50")
  const [customAmount, setCustomAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("stripe")
  const { t } = useTranslations()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setAmount("50")
        setCustomAmount("")
      }, 3000)
    }, 1500)
  }

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
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">{t("donation.thankYou")}</h3>
            <p className="text-muted-foreground">{t("donation.contributionHelps")}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <Tabs defaultValue="one-time">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="one-time">{t("donation.oneTime")}</TabsTrigger>
                <TabsTrigger value="monthly">{t("donation.monthly")}</TabsTrigger>
              </TabsList>
              <TabsContent value="one-time" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>{t("donation.selectAmount")}</Label>
                  <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-3 gap-4">
                    {["20", "50", "100", "250", "500", "custom"].map((value) => (
                      <div key={value} className="flex items-center">
                        <RadioGroupItem value={value} id={`amount-${value}`} className="peer sr-only" />
                        <Label
                          htmlFor={`amount-${value}`}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          {value === "custom" ? t("donation.customAmount") : `$${value}`}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {amount === "custom" && (
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">{t("donation.customAmount")}</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                      <Input
                        id="custom-amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="pl-7"
                        placeholder={t("donation.enterAmount")}
                      />
                    </div>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="monthly" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>{t("donation.selectMonthlyAmount")}</Label>
                  <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-3 gap-4">
                    {["10", "25", "50", "100", "200", "custom"].map((value) => (
                      <div key={value} className="flex items-center">
                        <RadioGroupItem value={value} id={`monthly-${value}`} className="peer sr-only" />
                        <Label
                          htmlFor={`monthly-${value}`}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          {value === "custom" ? t("donation.customAmount") : `$${value}`}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {amount === "custom" && (
                  <div className="space-y-2">
                    <Label htmlFor="custom-monthly">{t("donation.customMonthlyAmount")}</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                      <Input
                        id="custom-monthly"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="pl-7"
                        placeholder={t("donation.enterAmount")}
                      />
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">{t("donation.firstName")}</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">{t("donation.lastName")}</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("donation.email")}</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-px flex-1 bg-muted"></div>
                <span className="mx-2 text-muted-foreground text-sm">{t("donation.paymentMethod")}</span>
                <div className="h-px flex-1 bg-muted"></div>
              </div>

              <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="stripe" className="flex items-center gap-2">
                    <CreditCardIcon className="h-4 w-4" /> Stripe
                  </TabsTrigger>
                  <TabsTrigger value="paypal" className="flex items-center gap-2">
                    <div className="relative h-4 w-4">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-600">
                        <path
                          fill="currentColor"
                          d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.783 4.643h-2.189c-.11 0-.203.077-.219.185l-.598 3.792a.24.24 0 0 0 .237.28h1.988c.219 0 .405-.158.44-.374l.018-.08.179-1.135.011-.062a.44.44 0 0 1 .434-.374h.273c1.765 0 3.146-.358 3.978-1.385.385-.476.648-1.09.792-1.844a6.37 6.37 0 0 0 .136-.905c.077-.902-.019-1.514-.28-2.07l-.006-.01c-.086-.165-.19-.31-.307-.444l-.277-.278z"
                        />
                      </svg>
                    </div>{" "}
                    PayPal
                  </TabsTrigger>
                  <TabsTrigger value="momo" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Mobile Money
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="stripe" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">{t("donation.cardNumber")}</Label>
                    <div className="relative">
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">{t("donation.expiryDate")}</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">{t("donation.cvc")}</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="h-8 w-12 relative">
                      <Image src="/placeholder.svg?height=30&width=45" alt="Visa" fill className="object-contain" />
                    </div>
                    <div className="h-8 w-12 relative">
                      <Image
                        src="/placeholder.svg?height=30&width=45"
                        alt="Mastercard"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="h-8 w-12 relative">
                      <Image src="/placeholder.svg?height=30&width=45" alt="Amex" fill className="object-contain" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="paypal" className="space-y-4 pt-4">
                  <div className="text-center p-4 space-y-4">
                    <div className="mx-auto w-16 h-16 relative">
                      <svg viewBox="0 0 24 24" className="h-16 w-16 text-blue-600">
                        <path
                          fill="currentColor"
                          d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.783 4.643h-2.189c-.11 0-.203.077-.219.185l-.598 3.792a.24.24 0 0 0 .237.28h1.988c.219 0 .405-.158.44-.374l.018-.08.179-1.135.011-.062a.44.44 0 0 1 .434-.374h.273c1.765 0 3.146-.358 3.978-1.385.385-.476.648-1.09.792-1.844a6.37 6.37 0 0 0 .136-.905c.077-.902-.019-1.514-.28-2.07l-.006-.01c-.086-.165-.19-.31-.307-.444l-.277-.278z"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">{t("donation.paypalRedirect")}</p>
                    <Button
                      type="button"
                      className="bg-[#0070ba] hover:bg-[#003087] text-white"
                      onClick={() => {
                        setIsSubmitting(true)
                        setTimeout(() => {
                          setIsSubmitting(false)
                          setIsSuccess(true)
                          setTimeout(() => setIsSuccess(false), 3000)
                        }, 1500)
                      }}
                    >
                      {isSubmitting ? t("donation.processing") : t("donation.donateWithPayPal")}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="momo" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="bg-[#ffcc00] text-[#d40511] font-bold px-4 py-2 rounded-md">MTN Mobile Money</div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone-number">{t("donation.phoneNumber")}</Label>
                      <Input id="phone-number" placeholder="+250 78 123 4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">{t("donation.country")}</Label>
                      <select
                        id="country"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="rwanda">Rwanda</option>
                        <option value="uganda">Uganda</option>
                        <option value="kenya">Kenya</option>
                        <option value="ghana">Ghana</option>
                        <option value="cameroon">Cameroon</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <p className="text-sm text-muted-foreground">{t("donation.momoPrompt")}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t("donation.processing") : t("donation.donateNow")}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

