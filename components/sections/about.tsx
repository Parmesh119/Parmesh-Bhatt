"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="About Me"
            subtitle="Passionate about creating innovative solutions through code"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/101285245?v=4"
                alt="Profile picture"
                fill
                className="object-cover rounded-full"

                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 text-justify tracking-wider"
            >
              <p className="text-lg text-muted-foreground">
                My name is Parmesh Bhatt. Recently, I completed my B. Tech from Charusat University with practical experience in full-stack development. I have just finished an internship at Liquify Solutions, where I worked together to develop scalable web applications on React, TanStack technologies, and Spring Boot.
              </p>
              <p className="text-lg text-muted-foreground">
                My technical skills include Java, Kotlin, TypeScript, and JavaScript, with experience in frameworks such as React and Spring Boot. I have also been an AWS Cloud Captain, where I organized workshops and training for 500+ students and coordinated various AWS events.
              </p>
              <p className="text-lg text-muted-foreground">
                Now, I&apos;m working on RitualPlanner, a task management platform for people engaged in Karmakand, using my expertise in React, Spring Boot, and Kotlin. I&apos;m interested in developing effective, intuitive solutions that address everyday issues.
              </p>
              <p className="text-lg text-muted-foreground">
                With development and cloud technology experience, I blend technical expertise with leadership skills, as evidenced through my appointment as an AWS Cloud Captain out of more than 1,600 candidates and reaching the top 150 among 2,300 teams in the Odoo Combat National Level Hackathon.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
