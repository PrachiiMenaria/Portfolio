"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FlowerSVG from "./FlowerSVG";

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const colors = ["text-primary/15", "text-secondary/35", "text-accent/25", "text-highlight/15"];
  const stars = ["✦", "✧"];

  // Generate some random positions for particles to avoid hydration mismatch
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 15,
    type: i % 2 === 0 ? "flower" : "star",
    symbol: stars[i % stars.length],
    color: colors[i % colors.length],
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      {/* SVG Noise Grain Overlay */}
      <svg className="fixed inset-0 w-full h-full opacity-[0.03] mix-blend-overlay pointer-events-none z-50">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"></rect>
      </svg>
      {/* Soft glowing ambient orbs */}
      <motion.div
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "-5%", "5%", "0%"],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/20 mix-blend-multiply blur-[120px]"
      />
      <motion.div
        animate={{
          x: ["0%", "-5%", "5%", "0%"],
          y: ["0%", "5%", "-5%", "0%"],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-accent/20 mix-blend-multiply blur-[140px]"
      />

      {/* Drifting Particles */}
      <div className="absolute inset-0 opacity-55">
        {particles.map((p) => {
          const size = p.scale * 16 + 8;
          return (
            <motion.div
              key={p.id}
              initial={{ 
                x: `${p.x}vw`, 
                y: `${p.y + 100}vh`,
                opacity: 0,
                scale: p.scale,
                rotate: 0
              }}
              animate={{
                y: `${p.y - 100}vh`,
                opacity: [0, 0.7, 0],
                rotate: 360
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
              className={`absolute select-none pointer-events-none ${p.color}`}
              style={{ width: size, height: size }}
            >
              {p.type === "flower" ? (
                <FlowerSVG 
                  petalColor="currentColor" 
                  centerColor="#FDFBF7" // Matches global bg cream
                />
              ) : (
                <span className="font-sans flex items-center justify-center h-full w-full" style={{ fontSize: size }}>
                  {p.symbol}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
