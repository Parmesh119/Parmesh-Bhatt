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
    title: "RitualPlanner",
    description: "RitualPlanner is a specialized task management platform designed for individuals engaged in Karmakand, offering tools to streamline the planning and execution of daily rituals and tasks. With features like task scheduling, note-taking with reminders, and automated notifications, RitualPlanner helps users manage their commitments efficiently. ",
    image: "https://i.ibb.co/wS8fFBn/logo-color.png",
    tags: ["ReactJs", "Tanstack Router", "Tanstack Query", "Spring Boot", "Kotlin", "PostgreSQL", "MongoDB", "Firebase"],
    githubUrl: "https://github.com/Parmesh119/RitualPlanner",
    liveUrl: "https://ritual-planner.vercel.app/",
  },
  {
    title: "Furniture Rentals",
    description: "The main aim is to make high-quality furniture accessible to everyone through flexible renting options. We believe in sustainability, convenience, and affordability.",
    image: "https://i.ibb.co/yB8X9QhP/Screenshot-2025-05-19-172407.png",
    tags: ["React.js", "NodeJs", "ExpressJs", "Rozarpay", "MongoDB", "bcryptjs", "CORS", "JWT", "EmailJs", "React-router-dom"],
    githubUrl: "https://github.com/Omi-Patel/Furniture_Renting",
    liveUrl: "https://furniture-renting-client.onrender.com/",
  },
  {
    title: "HomeMakers",
    description: "The Homemakers Project is a home service booking platform that allows users to easily schedule and manage various household services. The platform aims to simplify the process of booking appointments for services like carpentry, plumbing, painting, movers, and packers, making it easier for users to maintain and improve their home environment.",
    image: "https://i.ibb.co/BVK0mhVy/Screenshot-2025-05-19-172513.png",
    tags: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "bcryptjs", "CORS", "JWT", "EmailJs", "React-router-dom"],
    githubUrl: "https://github.com/ChauhanDishant/Homemakers",
    liveUrl: "https://github.com/ChauhanDishant/Homemakers",
  }
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
      className="h-full"
    >
      <Card className="overflow-hidden group h-full flex flex-col">
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="tracking-wide text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="flex gap-4 justify-between mt-auto">
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