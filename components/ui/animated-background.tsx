"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

// Dynamically import the AnimatedBackground component with ssr: false to avoid "window not defined" error.
export const AnimatedBackground = dynamic(() => Promise.resolve(() => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-x-hidden">
      <motion.div
        className="overflow-x-hidden absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            ${theme === 'dark' ? 'hsl(var(--primary))' : 'hsl(var(--primary))'} 0%, 
            transparent 70%)`
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}), { ssr: false });
