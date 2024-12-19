"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/Parmesh110", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/parmesh-bhatt", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/Parmesh_119", label: "Twitter" },
  { icon: Mail, href: "mailto:parmeshb90@gmail.com", label: "Email" },
];

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
      <div className="relative p-6 space-y-6 rounded-xl bg-card">
        <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            alt="Profile picture"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-bold">Parmesh Bhatt</h3>
          <p className="text-muted-foreground">Full Stack Developer</p>
        </div>

        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              <Link href={href} target="_blank" aria-label={label}>
                <Icon className="w-5 h-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}