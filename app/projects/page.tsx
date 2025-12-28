"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MotionSection } from "@/components/motion-section"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "RitualPlanner",
    description:
      "RitualPlanner is a powerful web-based tool designed for priests to efficiently manage their daily religious tasks. From scheduling rituals and tracking clients to handling payments and reminders, it brings complete organization to every aspect of religious service management.",
    image: "/images/projects/rp.webp",
    skills: ["React", "Tanstack Router", "Tanstack Query", "Tailwind CSS", "TypeScript", "RESTful APIs", "Kotlin", "Spring boot", "PostgreSQL"],
    featured: true,
    links: { demo: "https://ritual-planner-v1.vercel.app/", source: "https://github.com/Parmesh119/RitualPlanner-V1" },
  },
  {
    title: "Furniture Rentals",
    description: "Furniture Rentals is a web-based platform for online furniture rental services, allowing customers to browse items, manage subscriptions, track orders, and make secure payments. This platform aims to simplify the process of renting furniture with a digitized solution.",
    image: "/images/projects/fr.png",
    skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "Razorpay", "MongoDB"],
    featured: true,
    links: { demo: "https://furniture-renting-client.onrender.com/", source: "https://github.com/Parmesh119/Furniture-Rentals" },
  },
  {
    title: "Bug Tracking System",
    description: "The Bug Tracking System is a web-based project I developed to streamline the software development lifecycle by efficiently managing and tracking defects across various projects. It features multi-user roles, detailed reporting, and project organization functionalities, demonstrating my ability to build robust data-management applications.",
    image: "/images/projects/bts.png",
    skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
    featured: true,
    links: { demo: "#", source: "#" },
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <MotionSection>
        <div className="space-y-2 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">All Projects</h1>
          <p className="text-lg text-muted-foreground">A selection of my recent work and personal projects</p>
        </div>
      </MotionSection>

      <div className="mb-16 flex justify-center flex-col gap-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-contain object-center"
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        {project.featured && <span className="text-xl">⭐</span>}
                      </div>
                      <p className="text-sm text-muted-foreground text-justify mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4 border-t">
                        {project.links.demo !== "#" ? (
                          <Link
                            href={project.links.demo}
                            target="_blank"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Link>
                        ) : (
                          <Link
                            href="/404"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Link>
                        )}
                        {project.links.source !== "#" ? (
                          <Link
                            href={project.links.source}
                            target="_blank"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <Github className="w-4 h-4" />
                            Source
                          </Link>
                        ) : <Link
                          href="/404"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </Link>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
        <Link href="https://www.linkedin.com/in/parmesh-bhatt/details/projects/" target="_blank" className="flex justify-center">
          <Button size="lg" className="w-fit cursor-pointer">
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  )
}
