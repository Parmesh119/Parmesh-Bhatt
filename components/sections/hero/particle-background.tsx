"use client";

import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export function ParticleBackground() {
  const { width, height } = useWindowSize();

  return (
    <div className="absolute inset-0">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={100} // Number of particles
        gravity={0.05} // Controls particle fall speed
        wind={0} // Horizontal movement
        recycle={true} // Particles keep looping
        colors={["#3B82F6", "#60A5FA", "#93C5FD"]} // Colors for particles
        initialVelocityX={{ min: -2, max: 2 }} // Initial horizontal velocity
        initialVelocityY={{ min: -2, max: 2 }} // Initial vertical velocity
      />
    </div>
  );
}
