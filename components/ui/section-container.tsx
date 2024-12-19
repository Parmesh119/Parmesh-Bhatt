"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionContainer({ children, id, className }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-24 relative overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6 relative z-10"
      >
        {children}
      </motion.div>

      {/* Background Decoration */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </motion.div>
    </section>
  );
}