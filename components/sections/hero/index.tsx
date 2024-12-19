"use client";

import { ParticleBackground } from "./particle-background";
import { AnimatedText } from "./animated-text";
import { HeroButtons } from "./hero-buttons";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center space-y-8 text-center"
        >
          <AnimatedText />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-[600px] text-balance"
          >
            Passionate about creating innovative solutions through code, 
            specializing in full-stack development and cloud architecture.
          </motion.p>

          <HeroButtons />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="animate-bounce"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-muted-foreground p-2">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}