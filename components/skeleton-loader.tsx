"use client"

export function SkeletonLoader({ className = "" }: { className?: string }) {
  return <div className={`animate-skeleton bg-gradient-to-r from-muted via-background to-muted ${className}`} />
}
