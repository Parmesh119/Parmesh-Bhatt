"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MotionSection } from "@/components/motion-section"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "retroUI - React Component Library",
    description:
      "A carefully crafted UI component library built with ReactJS and Tailwind CSS, designed for retro-themed interfaces.",
    image: "/minimal-ui-components.jpg",
    skills: ["React", "Tailwind CSS", "UI Library"],
    featured: true,
    links: { demo: "#", source: "#" },
  },
  {
    title: "getYourTiffin()",
    description: "A food ordering platform with Razorpay integration and admin interface for order management.",
    image: "/ecommerce-product-grid.png",
    skills: ["Next.js", "Razorpay", "MongoDB"],
    featured: true,
    links: { demo: "#", source: "#" },
  },
  {
    title: "motivate.js - NPM Package",
    description: "An npm package that provides motivational quotes when errors occur during development.",
    image: "/npm-package.jpg",
    skills: ["NPM", "JavaScript", "Node.js"],
    featured: true,
    links: { demo: "#", source: "#" },
  },
  {
    title: "Code_Mine",
    description: "A technology blog platform where users can read and share thoughts in the comment section.",
    image: "/blog-platform.jpg",
    skills: ["React", "Node.js", "MongoDB"],
    links: { demo: "#", source: "#" },
  },
  {
    title: "resumifyX",
    description: "A dynamic web application for creating professional resumes with PDF export functionality.",
    image: "/resume-builder.jpg",
    skills: ["React", "PDF Export", "TypeScript"],
    links: { demo: "#", source: "#" },
  },
  {
    title: "Saarthi_EngStudy",
    description: "A study material sharing platform with secure uploads, cloud storage, and smooth user experience.",
    image: "/study-platform.jpg",
    skills: ["Next.js", "Cloud Storage", "Security"],
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
          <h1 className="text-4xl md:text-5xl font-bold">Featured Projects</h1>
          <p className="text-lg text-muted-foreground">A selection of my recent work and personal projects</p>
        </div>
      </MotionSection>

      <div className="mb-16">
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
                      height={300}
                      className="w-full h-48 object-cover"
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
                        <Link
                          href={project.links.demo}
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Link>
                        <Link
                          href={project.links.source}
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
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
                      <Link
                        href={project.links.demo}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                      <Link
                        href={project.links.source}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
