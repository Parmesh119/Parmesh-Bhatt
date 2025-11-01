"use client"

import { MotionSection } from "@/components/motion-section"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Web Developer (Internship)",
    company: "Wappzo Infotech Private Limited",
    period: "August 2025 - Present",
    description: "Strengthened MERN stack fundamentals by building responsive websites with HTML, CSS, and Tailwind CSS. Enhanced front-end skills with TypeScript, React, Next.js, and React Native.",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "RESTful APIs", "React Native"],
  },
  {
    title: "Software Developer (Internship)",
    company: "Liquify Solutions",
    period: "December 2025 - May 2025",
    description:
      "Developed enterprise-level web applications using React and Spring Boot, optimizing performance through efficient data handling and implementing best practices for scalable solutions.",
    skills: ["Spring Boot", "Kotlin", "Full Stack Development", "React", "Tanstack Router", "Tanstack Query", "PostgreSQL"],
  },
  {
    title: "Cloud Captain",
    company: "AWS Cloud Club Charusat",
    period: "March 2024 - March 2025",
    description:
      "Development of enterprise-level web applications, handling frontend components, and integrating APIs for actual data.",
    skills: ["React", "Node.js", "API Integration"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <MotionSection>
        <div className="space-y-2 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Experience</h1>
          <p className="text-lg text-muted-foreground">My professional journey in software development</p>
        </div>
      </MotionSection>

      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {experiences.map((exp, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground text-justify leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
