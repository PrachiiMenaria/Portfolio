"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FlowerSVG from "./FlowerSVG";

const statuses = [
  "LNK_RETRIEVING: PM_ARCHIVE_2026",
  "FETCHING_STATIONERY_ASSETS...",
  "DECRYPTING_CORRESPONDENCE...",
  "UNSEALING_LETTERS...",
  "READY."
];

export default function CinemaLoader() {
  const [statusIndex, setStatusIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Cycle statuses
    const statusTimer = setInterval(() => {
      setStatusIndex((prev) => {
        if (prev < statuses.length - 1) {
          return prev + 1;
        }
        clearInterval(statusTimer);
        return prev;
      });
    }, 450);

    // Complete loading after statuses finish
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      // Let body scroll
      document.body.classList.remove("loader-active");
      document.documentElement.classList.remove("loader-active");
    }, 2400);

    // Lock scroll on mount during loading
    document.body.classList.add("loader-active");
    document.documentElement.classList.add("loader-active");

    return () => {
      clearInterval(statusTimer);
      clearTimeout(completeTimer);
      document.body.classList.remove("loader-active");
      document.documentElement.classList.remove("loader-active");
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <div className="fixed inset-0 z-[100] pointer-events-auto">
          
          {/* Layer 2: Subtle paper slide behind main loader */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute inset-0 bg-surface z-10 border-b border-text/10"
          />

          {/* Layer 1: Main Loader Panel */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-background z-20 flex flex-col justify-between p-12 md:p-20 overflow-hidden"
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

            {/* Top info */}
            <div className="flex justify-between items-start w-full font-mono text-[10px] tracking-[0.2em] text-text-light uppercase relative z-10">
              <span>SYSTEM: ONLINE</span>
            </div>

            {/* Central elements */}
            <div className="flex flex-col items-center justify-center relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
                animate={{ scale: 1.1, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="w-24 h-24 mb-10 text-primary"
              >
                <FlowerSVG petalColor="currentColor" centerColor="#FDFBF7" />
              </motion.div>

              <h1 className="font-display text-4xl md:text-5xl tracking-tight text-text text-center font-medium leading-none mb-4">
                Prachi Menaria
              </h1>
              
              <div className="font-serif italic text-text-muted text-base tracking-wide h-6 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={statusIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="block font-mono text-xs uppercase tracking-widest text-[#7B8B6F]"
                  >
                    {statuses[statusIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom info & Progress line */}
            <div className="flex flex-col w-full items-center relative z-10">
              <div className="w-full max-w-xs h-px bg-text/5 relative overflow-hidden mb-6">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-[#E84A7E] to-transparent"
                />
              </div>
              <span className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted">
                Personal Letter Archive &copy; 2026
              </span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
