"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import { useTheme } from "next-themes";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/certificates", label: "Certificates" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
]

export function SiteHeader() {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "dark" ? "dark" : "light";
  
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="font-semibold tracking-tight text-pretty" aria-label="Go to home">
          <Image
            src={currentTheme === "dark" ? "/images/pb2.png" : "/images/pb1.png"}
            alt="Parmesh Bhatt"
            priority
            width={60}
            height={10}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground hover:bg-accent",
                "text-foreground/80",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" aria-label="Open menu">
                  Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {nav.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
