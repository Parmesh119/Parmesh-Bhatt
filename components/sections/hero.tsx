"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  const words = ["Full Stack Developer", "Cloud Captain", "Team Leader", "Engineer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedCharacters, setDisplayedCharacters] = useState<string[]>([]);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const word = words[currentWordIndex].split(""); // Split current word into characters

    if (!isRemoving) {
      // Add characters one by one (left-to-right)
      if (displayedCharacters.length < word.length) {
        timeout = setTimeout(() => {
          setDisplayedCharacters((prev) => [...prev, word[prev.length]]);
        }, 100); // Delay per character
      } else {
        timeout = setTimeout(() => setIsRemoving(true), 1000); // Pause before removing
      }
    } else {
      // Remove characters one by one (right-to-left)
      if (displayedCharacters.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedCharacters((prev) => prev.slice(0, -1));
        }, 100);
      } else {
        setIsRemoving(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Next word
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedCharacters, isRemoving, currentWordIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0  bg-grid-white/[0.02] bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"  />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl md:text-4xl font-bold tracking-normal">
              Hello👋, <span style={{ fontFamily: "__Space_Grotesk_0aa4ae" }}>D</span>evelopers...!
            </p>
            <br />
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
              I&apos;m{" "}
              <span className="text-primary relative inline-block">
                Parmesh Bhatt
                <div className="relative">
                  {/* Gradients */}
                  <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-100 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-100 to-transparent h-px w-3/4" />
                  <div className="absolute inset-x-25 top-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent h-[5px] w-3/4 blur-sm" />
                  <div className="absolute inset-x-25 top-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent h-px w-3/4" />
                </div>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm md:text-xl text-muted-foreground max-w-[1100px] tracking-wide text-justify">
              {/* <span className="text-2xl font-bold block text-center">
                {displayedCharacters.map((char, index) => (
                  <span
                    key={index}
                    className="inline-block opacity-1 animate-fade-in tracking-widest"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span> */}
              Building scalable solutions 🚀 that solve complex problems and drive success. Leading with innovation 💡, ensuring every project pushes boundaries and creates lasting impact. Mastering the cloud ☁️ to deliver secure, efficient, and cutting-edge solutions for businesses. Crafting seamless user experiences 🖥️ that not only look beautiful but also enhance functionality and usability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://drive.google.com/file/d/1Wlybo7T5CL0ILDWg5xLddq32a8102NLx/view?usp=sharing" target="_blank">
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <BackgroundShapes />
    </section>
  );
}

function BackgroundShapes() {
  return (
    <div className="absolute inset-0 -z-10">
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
