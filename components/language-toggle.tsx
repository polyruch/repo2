"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="ml-2"
      title={t("accessibility.toggleLanguage")}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">{t("accessibility.toggleLanguage")}</span>
      <span className="absolute -bottom-1 -right-1 text-xs font-bold bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center">
        {language.toUpperCase()}
      </span>
    </Button>
  )
}
