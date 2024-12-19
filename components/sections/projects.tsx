"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Charusat University Official Website in Version 4 and Version 5",
    description: "Official website of Charusat University, developed to provide seamless access to academic resources, admission details, and campus updates, built using modern web technologies for an enhanced user experience.",
    image: "data:image/jpeg;base64,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",
    tags: ["Next.js", "TypeScript", "React.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Parmesh119/charusat-v5",
    liveUrl: "https://charusat-v5.vercel.app/",
  },
  {
    title: "RitualPlanner",
    description: "RitualPlanner is a specialized task management platform designed for individuals engaged in Karmakand, offering tools to streamline the planning and execution of daily rituals and tasks. With features like task scheduling, note-taking with reminders, and automated notifications, RitualPlanner helps users manage their commitments efficiently. ",
    image: "https://i.ibb.co/wS8fFBn/logo-color.png",
    tags: ["Next.js", "ExpressJs", "MongoDB", "Tailwind CSS", "Clerk", "Rozarpay"],
    githubUrl: "https://github.com/Parmesh119/RitualPlanner",
    liveUrl: "https://ritual-planner.vercel.app/",
  },
  {
    title: "Furniture Rentals",
    description: "The main aim is to make high-quality furniture accessible to everyone through flexible renting options. We believe in sustainability, convenience, and affordability.",
    image: "https://furniture-renting-client.onrender.com/assets/Signin_SignUp-DDSVzmpP.png",
    tags: ["React.js", "NodeJs", "ExpressJs", "Rozarpay", "MongoDB", "bcryptjs", "CORS", "JWT", "EmailJs", "React-router-dom"],
    githubUrl: "https://github.com/Omi-Patel/Furniture_Renting",
    liveUrl: "https://furniture-renting-client.onrender.com/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work that showcases my skills and experience"
            className="mb-12"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group">
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="tracking-wide text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4 justify-be">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="flex gap-4 justify-between">
            <Button size="sm" variant="outline" asChild>
              <Link href={project.githubUrl} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}