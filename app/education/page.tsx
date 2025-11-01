"use client"

import { MotionSection } from "@/components/motion-section"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "State University",
    period: "2017 - 2021",
    details: "Focused on full-stack development, data structures, and software engineering principles.",
  },
  {
    degree: "Advanced Web Development Certification",
    school: "Tech Academy",
    period: "2021 - 2022",
    details: "Specialized in modern web technologies including React, Node.js, and cloud deployment.",
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

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <MotionSection>
        <div className="space-y-2 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Education</h1>
          <p className="text-lg text-muted-foreground">My academic journey and certifications</p>
        </div>
      </MotionSection>

      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {education.map((edu, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>

                  <p className="text-muted-foreground text-justify leading-relaxed">{edu.details}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
