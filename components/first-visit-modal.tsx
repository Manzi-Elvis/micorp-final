"use client"

import { useState, useEffect, useContext } from "react"
import { useTheme } from "next-themes"
import { LanguageContext } from "@/components/language-provider"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Sun, Moon, Monitor, Globe } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function FirstVisitModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useContext(LanguageContext)
  const { t } = useTranslations()

  useEffect(() => {
    setMounted(true)
    const hasVisited = localStorage.getItem("hasVisited")
    if (!hasVisited) {
      setIsOpen(true)
      localStorage.setItem("hasVisited", "true")
    }
  }, [])

  if (!mounted) return null

  const handleSave = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("firstVisit.welcome")}</DialogTitle>
          <DialogDescription>{t("firstVisit.personalize")}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t("firstVisit.selectLanguage")}</h3>
            <RadioGroup
              value={language}
              onValueChange={(value) => setLanguage(value as "en" | "fr" | "rw" | "es" | "de")}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="en" id="lang-en" />
                <Label htmlFor="lang-en" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> English
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fr" id="lang-fr" />
                <Label htmlFor="lang-fr" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Français
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rw" id="lang-rw" />
                <Label htmlFor="lang-rw" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Kinyarwanda
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="es" id="lang-es" />
                <Label htmlFor="lang-es" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Español
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="de" id="lang-de" />
                <Label htmlFor="lang-de" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Deutsch
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t("firstVisit.selectTheme")}</h3>
            <RadioGroup value={theme} onValueChange={setTheme} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="theme-light" />
                <Label htmlFor="theme-light" className="flex items-center gap-2">
                  <Sun className="h-4 w-4" /> {t("firstVisit.light")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="theme-dark" />
                <Label htmlFor="theme-dark" className="flex items-center gap-2">
                  <Moon className="h-4 w-4" /> {t("firstVisit.dark")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="theme-system" />
                <Label htmlFor="theme-system" className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" /> {t("firstVisit.system")}
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSave}>{t("firstVisit.savePreferences")}</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

