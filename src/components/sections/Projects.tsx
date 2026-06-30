import { motion } from "framer-motion"
import { GitBranch, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionHeading } from "@/components/SectionHeading"

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
}

const projects: Project[] = [
  {
    title: "RitualPlanner",
    description:
      "RitualPlanner is a powerful web-based tool designed for priests to efficiently manage their daily religious tasks. From scheduling rituals and tracking clients to handling payments and reminders, it brings complete organization to every aspect of religious service management.",
    tech: ["React", "Tanstack Router", "Tanstack Query", "Tailwind CSS", "Shadcn UI", "Node.js", "NestJs", "PostgreSQL", "Redis", "TypeOrm", "JWT", "Passport.js", "BullMQ", "class-transformer", "class-validator", "Jest"],
    github: "",
    live: "",
  },
  {
    title: "RitualPanchang",
    description:
      "RitualPanchang is a comprehensive web-based tool that provides accurate and localized panchangam information. It helps priests and individuals plan religious observances with precise timings for tithis, nakshatras, yogas, and other Vedic astrological data.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSockets"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Dev Blog Platform",
    description:
      "A blogging platform tailored for developers with Markdown support, syntax highlighting, SEO optimization, and a clean reading experience.",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Contentlayer"],
    github: "https://github.com",
  },
  {
    title: "REST API Gateway",
    description:
      "A scalable API gateway service with built-in rate limiting, JWT authentication, request routing, and detailed logging.",
    tech: ["Node.js", "Express", "Redis", "Docker", "TypeScript"],
    github: "https://github.com",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A data visualization dashboard with real-time charts, KPI tracking, filterable reports, and a responsive grid layout.",
    tech: ["React", "TypeScript", "Recharts", "PostgreSQL", "ShadcnUI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "CLI Productivity Tool",
    description:
      "A developer productivity CLI tool published to NPM. Automates repetitive setup tasks with configurable templates and scripts.",
    tech: ["Node.js", "TypeScript", "npm", "Commander.js"],
    github: "https://github.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work and personal projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                delay: i * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 350, damping: 20 },
              }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-border hover:border-highlight/40 hover:shadow-[0_10px_30px_-10px_var(--color-highlight)]/10 dark:hover:shadow-[0_10px_30px_-10px_var(--color-highlight)]/5 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="leading-6">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 pt-0">
                  <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      size="sm"
                      className="bg-highlight text-highlight-foreground hover:bg-highlight/90 cursor-pointer"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
