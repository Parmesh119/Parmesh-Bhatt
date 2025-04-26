"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "SDE (Software Developer)",
    company: "Liquify Solutions",
    period: "Dec 2024 - Present",
    description: "Collaborated within a team of 4 developers to build scalable web applications using React, TanStack Router, TanStack Query, and Spring Boot. Contributed to project planning, code reviews, and implemented best practices to deliver high-quality solutions.",
    skills: ["Tanstack router and query", "React.Js",  "JS", "TS", "Spring Boot", "Kotlin", "Docker","PostgreSQL"],
  },
  {
    title: "Cloud Captain",
    company: "AWS Cloud Club Charusat",
    period: "March 2024 - March 2025",
    description: "Developed and maintained multiple client projects. Implemented responsive designs and optimized application performance.",
    skills: ["Event Management", "Team Management", "Team Leadership", "AWS"],
  },
  {
    title: "Cloud Developer",
    company: "Charusat Learning and Development Club",
    period: "March 2023 - Oct 2023",
    description: "Created responsive web applications and implemented UI/UX designs. Collaborated with designers and backend developers.",
    skills: ["JavaScript", "HTML/CSS", "React.js"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey and the companies I've worked with"
            className="mb-12"
          />

          <div className="space-y-8 tracking-wide">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          {/* <button className="text-center items-center justify-center mx-auto">More</button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <p className="text-muted-foreground">{experience.company}</p>
          </div>
          <Badge variant="secondary" className="mt-2 md:mt-0">
            {experience.period}
          </Badge>
        </div>
        <p className="text-muted-foreground mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <Badge key={skill} variant="outline">{skill}</Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}