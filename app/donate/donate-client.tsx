"use client"

import { useTranslations } from "@/hooks/use-translations"
import DonationForm from "@/components/donation-form"
import DonationStats from "@/components/donation-stats"
import DonationProjects from "@/components/donation-projects"

export default function DonatePageClient() {
  const { t } = useTranslations()

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{t("donation.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("donation.subtitle")}</p>
        <div className="flex justify-center gap-6 pt-4">
          <div className="flex items-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 24 24">
              <path
                fill="#635BFF"
                d="M14.24 0H9.76C4.37 0 0 4.37 0 9.76v4.48C0 19.63 4.37 24 9.76 24h4.48C19.63 24 24 19.63 24 14.24V9.76C24 4.37 19.63 0 14.24 0zm-1.66 14.57l-2.95 2.31c-.11.08-.24.12-.38.12-.15 0-.29-.05-.4-.14-.22-.19-.28-.5-.14-.76l1.37-2.49H7.57c-.32 0-.59-.26-.59-.59 0-.32.26-.59.59-.59h2.51l-1.37-2.49c-.14-.25-.07-.57.14-.76.22-.19.54-.16.78.02l2.95 2.31c.2.15.31.38.31.63s-.12.48-.31.63zm3.9 2.43c-.32 0-.59-.26-.59-.59V7.59c0-.32.26-.59.59-.59.32 0 .59.26.59.59v8.82c0 .33-.27.59-.59.59z"
              />
            </svg>
            <span className="font-medium">Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-600">
              <path
                fill="currentColor"
                d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.783 4.643h-2.189c-.11 0-.203.077-.219.185l-.598 3.792a.24.24 0 0 0 .237.28h1.988c.219 0 .405-.158.44-.374l.018-.08.179-1.135.011-.062a.44.44 0 0 1 .434-.374h.273c1.765 0 3.146-.358 3.978-1.385.385-.476.648-1.09.792-1.844a6.37 6.37 0 0 0 .136-.905c.077-.902-.019-1.514-.28-2.07l-.006-.01c-.086-.165-.19-.31-.307-.444l-.277-.278z"
              />
            </svg>
            <span className="font-medium">PayPal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#ffcc00] text-[#d40511] font-bold px-2 py-1 rounded text-xs">MTN MoMo</div>
            <span className="font-medium">{t("donation.mobileMoney")}</span>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <DonationForm />
        <DonationStats />
      </div>

      <DonationProjects />
    </div>
  )
}
