"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const resolved = theme === "system" ? (systemTheme ?? "light") : (theme ?? "light")
  const isDark = resolved === "dark"

  function toggle() {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
      <span className="sr-only">{isDark ? "Light" : "Dark"}</span>
    </Button>
  )
}
