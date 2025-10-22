"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { Menu, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslations } from "@/hooks/use-translations"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("Home"), href: "/" },
    { name: t("About"), href: "/about" },
    { name: t("Services"), href: "/services" },
    { name: t("Portfolio"), href: "/portfolio" },
    { name: t("Team"), href: "/team" },
    { name: t("Blog"), href: "/blog" },
    { name: t("Request"), href: "/request-project" },
    { name: t("Contact"), href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-only-W05SunvA2feXvvbxwYJYwFjPevj0yN.png"
              alt="Micorp Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl">Micorp</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Heart className="h-4 w-4" /> Donate
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSelector />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/donate"
                  className="flex items-center gap-1 text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Heart className="h-4 w-4" /> Donate
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

