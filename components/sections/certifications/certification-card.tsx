"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  index: number;
}

export function CertificationCard({ title, issuer, date, credentialUrl, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -10 }}
      className="tilt-card"
    >
      <Card className="group p-4 sm:p-6 hover:border-primary/50 transition-all duration-500 tilt-card-inner h-full">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <motion.div
            className="p-2 rounded-lg bg-primary/10 text-primary mb-2 sm:mb-0"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
          <div className="space-y-2 flex-1">
            <motion.h3 
              className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <p className="text-sm sm:text-base text-muted-foreground">{issuer}</p>
            <p className="text-xs sm:text-sm text-primary">{date}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 sm:mt-4"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white group-hover:shadow-lg transition-all duration-300"
                asChild
              >
                <Link href={credentialUrl} target="_blank">
                  View Credential
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}