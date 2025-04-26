"use client";

import { Monitor, Database, Code, Server, Workflow, Puzzle } from 'lucide-react';
// Technology data organized by category
const technologyData = {
    frontend: {
        title: "Frontend Technology",
        icon: <Monitor className="mr-2" />,
        color: "bg-white dark:bg-blue-950",
        borderColor: "border-blue-400 dark:border-blue-700",
        textColor: "text-black font-bold tracking-wider dark:text-blue-300",
        technologies: [
            "HTML5", "Next.js", "JavaScript", "Shadcn UI", "React.js",
            "CSS3", "TypeScript", "Tailwind CSS", "Tanstack Router and Query"
        ]
    },
    backend: {
        title: "Backend Technology",
        icon: <Server className="mr-2" />,
        color: "bg-white dark:bg-green-950",
        borderColor: "border-green-400 dark:border-green-700",
        textColor: "text-black font-bold tracking-wider dark:text-green-300",
        technologies: [
            "NodeJS", "ExpressJS", "REST API", "JWT",
            "Bcrypt", "Spring Boot"
        ]
    },
    database: {
        title: "Database",
        icon: <Database className="mr-2" />,
        color: "bg-white dark:bg-amber-950",
        borderColor: "border-amber-400 dark:border-amber-700",
        textColor: "text-black font-bold tracking-wider dark:text-amber-300",
        technologies: [
            "MongoDB", "Firebase", "MySQL", "PostgreSQL"
        ]
    },
    tools: {
        title: "Other Tools / Technology",
        icon: <Puzzle className="mr-2" />,
        color: "bg-white dark:bg-purple-950",
        borderColor: "border-purple-400 dark:border-purple-700",
        textColor: "text-black font-bold tracking-wider dark:text-purple-300",
        technologies: [
            "VS Code", "Postman", "Git & GitHub", "Keycloak"
        ]
    }, 
    DevOps: {
        title: "DevOps",
        icon: <Workflow className="mr-2" />,
        color: "bg-white dark:bg-red-950",
        borderColor: "border-red-400 dark:border-red-700",
        textColor: "text-black font-bold tracking-wider dark:text-red-300",
        technologies: [
            "Docker", "AWS", "Prometheus", "Grafana"
        ]
    },
    Languages: {
        title: "Languages",
        icon: <Code className="mr-2" />,
        color: "bg-white dark:bg-yellow-900",
        borderColor: "border-orange-400 dark:border-orange-700",
        textColor: "text-black font-bold tracking-wider dark:text-orange-300",
        technologies: [
            "JavaScript", "TypeScript", "Java", "Python", "C++", "Kotlin"
        ]
    }
};

// Tech Card Component
const TechCard = ({ category }: { category: keyof typeof technologyData }) => {
    const { title, icon, color, borderColor, textColor, technologies } = technologyData[category];

    // Split technologies into two columns for desktop view
    const midpoint = Math.ceil(technologies.length / 2);
    const leftColumn = technologies.slice(0, midpoint);
    const rightColumn = technologies.slice(midpoint);

    return (
        <div className={`rounded-lg p-4 ${color} w-full transition-all duration-300`}>
            <div className="flex items-center dark:text-white text-primary text-xl mb-4">
                {icon}
                <h2 className="font-bold">{title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    {leftColumn.map((tech, index) => (
                        <div
                            key={`${category}-left-${index}`}
                            className={`flex items-center ${textColor} rounded-md px-3 py-2 mb-2 ${borderColor} border-l-4 bg-opacity-20 bg-black`}
                        >
                            <span className="mr-2">›</span>
                            <span>{tech}</span>
                        </div>
                    ))}
                </div>

                <div>
                    {rightColumn.map((tech, index) => (
                        <div
                            key={`${category}-right-${index}`}
                            className={`flex items-center ${textColor} rounded-md px-3 py-2 mb-2 ${borderColor} border-l-4 bg-opacity-20 bg-black`}
                        >
                            <span className="mr-2">›</span>
                            <span>{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main Component
export default function TechShowcase() {
    return (
        <div id="skills" className="w-full py-24">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Technology <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Stack</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                    <TechCard category="frontend" />
                    <TechCard category="backend" />
                    <TechCard category="database" />
                    <TechCard category="DevOps" />
                    <TechCard category="Languages" />   
                    <TechCard category="tools" />
                </div>
            </div>
        </div>
    );
}