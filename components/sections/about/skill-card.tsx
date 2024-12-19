"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

export function SkillCard({ title, skills, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-all duration-300"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300" />
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-secondary hover:bg-secondary/80"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}