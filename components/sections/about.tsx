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
              I’m Parmesh Bhatt, a Cloud Captain at AWS Cloud Club Charusat and a fourth-year B.Tech student at Charusat University, Gujarat, India. Passionate about web development, DevOps, and cloud computing, I’ve led the WebDev team at DeCodeCafe and contributed as a Cloud Developer at CLDC. I’ve also worked on open-source projects, including contributing to the Charusatv4 and Charusatv5 websites, and am preparing for Google Summer of Code (GSoC).
              </p>
              <p className="text-lg text-muted-foreground">
              Recently, I started my journey as a Software Development Engineer (SDE) Intern at Liquify Solutions, where I continue to expand my skills. I’m deeply committed to learning through coding, open-source education, and community involvement. If you’re interested in my projects, feel free to explore the code and provide feedback as I believe collaboration is key to growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
