"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Button } from "@/components/ui/button"
import { WifiOff, RefreshCw } from "lucide-react"

export default function OfflinePage() {
  const { t } = useTranslations()

  const handleRetryConnection = () => {
    if (navigator.onLine) {
      window.location.href = "/"
    } else {
      alert(t("offline.stillOffline"))
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 text-center">
      <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-6 mb-6">
        <WifiOff className="h-12 w-12 text-blue-600" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("offline.title")}</h1>
      <p className="text-xl text-muted-foreground max-w-md mb-8">{t("offline.description")}</p>
      <div className="space-y-4">
        <Button size="lg" className="gap-2" onClick={handleRetryConnection}>
          <RefreshCw className="h-5 w-5" /> {t("offline.retryConnection")}
        </Button>
        <p className="text-sm text-muted-foreground">{t("offline.persistProblem")}</p>
      </div>
    </div>
  )
}

