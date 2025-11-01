"use client"

import type { PropsWithChildren } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function MotionSection({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.section
      className={cn("relative", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariants}
    >
      {children}
    </motion.section>
  )
}
