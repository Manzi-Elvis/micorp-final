"use client"

import { useContext } from "react"
import { LanguageContext } from "@/components/language-provider"
import { en } from "@/translations/en"
import { fr } from "@/translations/fr"
import { rw } from "@/translations/rw"
import { es } from "@/translations/es"
import { de } from "@/translations/de"

export function useTranslations() {
  const { language } = useContext(LanguageContext)

  const translations = {
    en,
    fr,
    rw,
    es,
    de,
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback to English if translation is missing
        let fallback: any = translations.en
        for (const fk of keys) {
          if (fallback && typeof fallback === "object" && fk in fallback) {
            fallback = fallback[fk]
          } else {
            return key // Return the key if no translation found
          }
        }

        // If fallback is an object, return the key instead
        if (typeof fallback === "object") {
          return key
        }

        return fallback
      }
    }

    // If value is an object, return the key instead
    if (typeof value === "object") {
      return key
    }

    return value
  }

  return { t, language }
}

