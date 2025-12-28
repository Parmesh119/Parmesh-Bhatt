"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Send, FileUser } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
        {/* Content */}
        <motion.div
          className="max-w-2xl w-full space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-lg text-muted-foreground">Hello 👋, I&apos;m</p>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground">Parmesh Bhatt</h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">Software Developer</p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-justify leading-relaxed max-w-xl">
              Passionate about crafting meaningful, scalable, and beautifully designed software that simplifies real-world challenges — blending modern technology with purposeful impact.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-wrap gap-3 sm:gap-4 pt-4" variants={itemVariants}>
            <Button asChild size="lg" className="gap-2 text-sm sm:text-base">
              <Link href="/contact">
                Get in Touch <Send />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-sm sm:text-base bg-transparent">
              <Link href="/resume"> Resume <FileUser /></Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex gap-4 sm:gap-6 pt-8" variants={itemVariants}>
            <Link
              href="https://github.com/Parmesh119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/parmesh-bhatt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="https://twitter.com/Parmesh_119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter size={20} className="sm:w-6 sm:h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
