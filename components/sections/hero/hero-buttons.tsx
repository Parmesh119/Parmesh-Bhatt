"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { scrollToSection } from "@/lib/utils";

export function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white group"
        onClick={() => scrollToSection('projects')}
      >
        View My Work
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-white group"
        asChild
      >
        <Link href="https://drive.google.com/file/d/132MFGfr0Cen2ggKwNRxlEW8gTHNrCHGD/view?usp=sharing" target="_blank">
          Download CV
          <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Link>
      </Button>
    </motion.div>
  );
}