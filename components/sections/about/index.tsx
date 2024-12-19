"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Palette } from "lucide-react";
import { ProfileCard } from "./profile-card";
import { SkillCard } from "./skill-card";

const skills = [
  {
    title: "Frontend Development",
    icon: <Palette className="w-6 h-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="space-y-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold tracking-tighter"
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-[800px] mx-auto text-balance"
            >
              A passionate full-stack developer with expertise in building scalable web applications
              and cloud solutions. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            <ProfileCard />
            
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <SkillCard key={skill.title} {...skill} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}