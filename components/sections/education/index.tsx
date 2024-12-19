"use client";

import { motion } from "framer-motion";
import { EducationCard } from "./education-card";
import { SectionContainer } from "@/components/ui/section-container";

const educationData = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Charotar University of Science and Technology",
    year: "Oct 2021 - April 2025",
    description: "8.54 CGPA",
  },
  {
    degree: "HSC - 12th Standard",
    institution: "The Ambika High School, Gadat",
    year: "June 2020 - July 2021",
    description: "87.23 %",
  },

  {
    degree: "SSC - 10th Standard",
    institution: "The Ambika High School, Gadat",
    year: "June 2018 - May 2019",
    description: "87 %",
  },
];

export function EducationSection() {
  return (
    <SectionContainer id="education" className="bg-muted/50">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            Education <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-[800px] mx-auto text-balance"
          >
            My academic background and qualifications that have shaped my technical expertise
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 tracking-wide">
          {educationData.map((education, index) => (
            <EducationCard key={index} {...education} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}