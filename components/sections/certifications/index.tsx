"use client";

import { motion } from "framer-motion";
import { CertificationCard } from "./certification-card";

const certifications = [
  {
    title: "Operating System fundamentals",
    issuer: "NPTEL",
    date: "2023",
    credentialUrl: "https://drive.google.com/file/d/1VvfSFR78TtKXY8sOa-dfR8mw02TKJ1cq/view?usp=sharing",
  },
  {
    title: "Amazon Elastic Container Service (AWS ECS)",
    issuer: "KodeKloud",
    date: "2024",
    credentialUrl: "https://kodekloud.com/certificate-verification/2DECEF9C12E3-2ED7E8611CF1-2DECE969023B/",
  },
  {
    title: "Docker Training Course for the Absolute Beginner",
    issuer: "KodeKloud",
    date: "2024",
    credentialUrl: "https://kodekloud.com/certificate-verification/2DECEF9C12E3-2DECE9978BE7-2DECE969023B/",
  },
  {
    title: "Machine Learning Foundations",
    issuer: "AWS",
    date: "2023",
    credentialUrl: "https://www.credly.com/badges/1a7acb0d-938b-4a51-a3a0-da8de36e621e/linked_in_profile",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold tracking-tighter"
            >
              Professional <span className="text-gradient">Certifications</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-[800px] mx-auto text-balance"
            >
              Industry-recognized certifications that validate my expertise and commitment to continuous learning
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} {...certification} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}