"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function AnimatedButton({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <motion.div
        className="absolute inset-0 rounded-md bg-primary/20 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <Button
        variant={variant}
        size={size}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] before:transition-transform before:duration-[1.5s] before:hover:translate-x-[200%]",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}