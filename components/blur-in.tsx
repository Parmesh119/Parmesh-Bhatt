"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BlurInProps {
  children: ReactNode
  delay?: number
}

export function BlurIn({ children, delay = 0 }: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
