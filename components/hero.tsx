"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-translations"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const { t } = useTranslations()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/5 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 dark:bg-blue-500/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1.1, 1],
              opacity: [0, 0.3, 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-2"
            >
              {t("hero.established")} 2025
            </motion.div>

            <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("hero.title1")} <span className="text-blue-600">{t("hero.titleHighlight")}</span> {t("hero.title2")}
            </motion.h1>

            <motion.p variants={item} className="text-xl text-muted-foreground">
              {t("hero.subtitle")}
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/services">
                  {t("hero.exploreServices")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">{t("hero.contactUs")}</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            // className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            className="relative h-[400px] lg:h-[500px]"
          >
            <Image
              src="/brand/heroo3.png"
              alt={t("hero.imageAlt")}
              fill
              className="object-cover"
            />
            <motion.div
              // className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="p-6">
                {/* <motion.h3
                  className="text-white text-xl font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {t("hero.innovationMeetsIntegrity")}
                </motion.h3>
                <motion.p
                  className="text-white/80"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  {t("hero.deliveringExcellence")}
                </motion.p> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
