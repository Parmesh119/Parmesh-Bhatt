"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export function AnimatedText() {
  const roles = ["Full Stack Developer", "Cloud Engineer", "DevOps Enthusiast"];

  return (
    <div className="text-center space-y-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm{" "}
        <span className="text-gradient">
          Parmesh Bhatt
        </span>
      </motion.h1>
      
      <motion.div
        className="text-xl md:text-2xl text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span>I'm a </span>
        <span className="text-primary">
          <Typewriter
            words={roles}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.div>
    </div>
  );
}