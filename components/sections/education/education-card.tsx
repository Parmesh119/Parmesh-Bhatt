"use client";

import { motion } from "framer-motion";
import { School } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  description: string;
  index: number;
}

export function EducationCard({
  degree,
  institution,
  year,
  description,
  index,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      className="tilt-card"
    >
      <Card className="p-6 group hover:border-primary/50 transition-all duration-500 tilt-card-inner">
        <div className="flex items-start gap-4">
          <motion.div
            className="p-2 rounded-lg bg-primary/10 text-primary"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <School className="w-6 h-6" />
          </motion.div>
          <div className="space-y-2">
            <motion.h3
              className="text-xl font-semibold group-hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {degree}
            </motion.h3>
            <p className="text-muted-foreground">{institution}</p>
            <p className="text-sm text-primary">{year}</p>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}