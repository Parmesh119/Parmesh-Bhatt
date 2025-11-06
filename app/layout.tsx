import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProgressBar } from "@/components/progress-bar"
import { Poppins } from "next/font/google"
import { Toaster } from "sonner"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "| Parmsh Bhatt |",
  description: "Portfolio of Parmsh Bhatt, a full-stack developer specializing in Next.js and modern web technologies.",
  icons: {
    icon: "/parmesh2.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${poppins.className} ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBar />
          <div className="relative min-h-dvh flex flex-col bg-background text-foreground">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
        <Toaster position="bottom-right" style={{
          fontSize: '14px',
          padding: '12px 20px',
          borderRadius: '8px',
          color: '#fff',
          backgroundColor: '#333',
          fontWeight: "bold"
        }} />
      </body>
    </html>
  )
}
