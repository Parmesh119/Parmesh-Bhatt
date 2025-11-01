"use client"

import { motion } from "framer-motion"

interface TypingTextProps {
  text: string
  delay?: number
  duration?: number
}

export function TypingText({ text, delay = 0, duration = 3 }: TypingTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="animate-typing"
      style={{
        animationDuration: `${duration}s`,
      }}
    >
      {text}
    </motion.span>
  )
}
