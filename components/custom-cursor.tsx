"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseenter", mouseEnter);
    window.addEventListener("mouseleave", mouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseenter", mouseEnter);
      window.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor bg-primary rounded-full opacity-50"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 0.5 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28
      }}
    />
  );
}