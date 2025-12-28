"use client"

import { motion } from "framer-motion"
import { MotionSection } from "@/components/motion-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = {
  Languages: ["TypeScript", "JavaScript", "Kotlin", "Java"],
  Frameworks: ["Next.js", "React", "Node.js", "Express.js", "NestJs", "Spring Boot", "Tanstack Router", "Tanstack Query", "TypeORM", "Tailwind CSS", "Shadcn UI"],
  Tools: ["Git", "Docker", "Keycloak"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <MotionSection>
        <h1 className="text-2xl md:text-3xl font-semibold">⚡ Skills</h1>
      </MotionSection>
      <motion.div
        className="grid sm:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {Object.entries(skills).map(([group, items]) => (
          <motion.div key={group} variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>{group === "Frameworks" ? "Frameworks / Libraries" : group}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {items.map((i) => (
                    <li key={i} className="rounded-md bg-secondary text-secondary-foreground px-3 py-1 text-sm">
                      {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
