"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

const ROUTE_PROGRESS_MAP: Record<string, number> = {
  "/": 0,
  "/about": 10,
  "/experience": 20,
  "/projects": 30,
  "/education": 40,
  "/certificates": 50,
  "/skills": 60,
  "/contact": 70,
  "/resume": 100,
}

export function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const prevPathnameRef = useRef("")
  const pathname = usePathname()

  useEffect(() => {
    const targetProgress = ROUTE_PROGRESS_MAP[pathname] || 0

    setProgress(targetProgress)
    prevPathnameRef.current = pathname
  }, [pathname])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-primary transition-all duration-500"
      style={{
        width: `${progress}%`,
        zIndex: 9999,
      }}
    />
  )
}
