"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FlowerSVG from "../ui/FlowerSVG";
import { VintageStamp, Postmark, PressedFlower, SimpleFlower, HandwrittenLabel } from "../ui/Decorations";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.scrollY > 50) {
      setIsOpen(true);
      document.body.classList.remove("envelope-sealed");
      document.documentElement.classList.remove("envelope-sealed");
    } else {
      document.body.classList.add("envelope-sealed");
      document.documentElement.classList.add("envelope-sealed");
    }

    return () => {
      document.body.classList.remove("envelope-sealed");
      document.documentElement.classList.remove("envelope-sealed");
    };
  }, []);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      document.body.classList.remove("envelope-sealed");
      document.documentElement.classList.remove("envelope-sealed");
    }, 600);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-20 overflow-hidden">
      
      {/* Background ambient flower - far back */}
      <PressedFlower className="absolute top-[10%] right-[10%] scale-150 opacity-40 -rotate-12 blur-[1px] z-0" delay={0.2} />
      <SimpleFlower className="absolute bottom-[10%] left-[5%] scale-125 opacity-50 rotate-[35deg] blur-[1px] z-0" delay={0.4} />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-2xl aspect-[4/3] max-h-[60vh] mx-auto cursor-pointer group z-20"
            onClick={handleOpen}
          >
            {/* ENVELOPE BACK */}
            <div className="absolute inset-0 bg-secondary-light border border-text/10 rounded-sm shadow-paper z-0 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
              
              {/* Stamps placed on the envelope back! */}
              <VintageStamp className="top-6 right-6 rotate-6" delay={0.1} />
              <VintageStamp className="top-8 right-[4.5rem] -rotate-3 opacity-90" delay={0.2} />
              <Postmark className="top-12 right-12 opacity-60 mix-blend-multiply" delay={0.3} />
            </div>

            {/* LETTER PREVIEW */}
            <div className="absolute top-[5%] left-[5%] right-[5%] bottom-[5%] bg-background rounded-sm shadow-sm border border-secondary p-8 text-center z-10 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-start opacity-80">
                <span className="font-handwriting text-2xl text-highlight transform -rotate-2">Prachi.</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium border-b border-primary/20 pb-1">Portfolio 2026</span>
              </div>
            </div>

            {/* ENVELOPE FRONT TOP FLAP */}
            <div className="absolute top-0 left-0 w-full h-[50%] z-40 pointer-events-none drop-shadow-md">
              <svg viewBox="0 0 1000 375" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0,0 L500,375 L1000,0 Z" fill="#FDFBF7" stroke="rgba(42,39,38,0.15)" strokeWidth="2"/>
              </svg>
              {/* Wax Seal */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-transform group-hover:scale-105 z-30">
                <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center shadow-md border border-highlight/80">
                  <div className="w-12 h-12 rounded-full border border-background/40 flex flex-col items-center justify-center bg-highlight shadow-inner text-background/90">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mb-0.5 drop-shadow-sm">
                      {/* Simple 5-petal flower imprint */}
                      <circle cx="12" cy="7" r="3" />
                      <circle cx="7" cy="11" r="3" />
                      <circle cx="17" cy="11" r="3" />
                      <circle cx="9" cy="16" r="3" />
                      <circle cx="15" cy="16" r="3" />
                      <circle cx="12" cy="12" r="2" fill="#F4B8C8" />
                    </svg>
                    <span className="text-[6px] font-mono tracking-widest uppercase font-bold drop-shadow-sm ml-0.5">Open</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ENVELOPE FRONT BOTTOM */}
            <div className="absolute inset-0 z-30 pointer-events-none drop-shadow-xl">
              <svg viewBox="0 0 1000 750" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0,0 L500,375 L0,750 Z" fill="#F5F2EB" stroke="rgba(42,39,38,0.1)" strokeWidth="2"/>
                <path d="M1000,0 L500,375 L1000,750 Z" fill="#F5F2EB" stroke="rgba(42,39,38,0.1)" strokeWidth="2"/>
                <path d="M0,750 L500,375 L1000,750 Z" fill="#FDFBF7" stroke="rgba(42,39,38,0.1)" strokeWidth="2"/>
              </svg>
              
              {/* Tiny handwritten address or memo on the front bottom */}
              <HandwrittenLabel text="Dear Visitor," className="bottom-[15%] left-[10%] opacity-80 text-xl" delay={0.5} />
            </div>
            
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none">
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted">Unseal Letter</span>
              <motion.div 
                animate={{ y: [0, 5, 0] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative w-full max-w-3xl mx-auto bg-background rounded-sm shadow-paper-xl border border-secondary p-8 md:p-14 text-center z-40"
          >
            {/* Subtle paper grain */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none rounded-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

            {/* Floral peek on the open letter */}
            <PressedFlower className="-top-8 -right-4 scale-75 rotate-[60deg]" delay={0.6} />

            {/* Letter Header */}
            <div className="w-full flex justify-between items-start mb-10 opacity-70 relative z-10">
              <span className="font-handwriting text-3xl text-highlight transform -rotate-3">Prachi.</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary border-b border-primary/20 pb-1">Portfolio 2026</span>
            </div>

            <motion.h1 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="text-4xl md:text-6xl font-display font-medium text-text mb-6 leading-none tracking-tight relative z-10"
            >
              Prachi Menaria
            </motion.h1>

            <motion.p 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="text-text-muted font-serif italic text-base md:text-xl max-w-lg mx-auto mb-8 leading-relaxed relative z-10"
            >
              "Building thoughtful digital experiences through code, design, and curiosity."
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-text-light font-sans uppercase text-[10px] tracking-[0.2em] w-full max-w-lg mx-auto relative z-10"
            >
              <span>aspiring software developer</span>
              <span className="text-primary text-sm not-italic">•</span>
              <span>frontend creator</span>
              <span className="text-primary text-sm not-italic">•</span>
              <span>product-minded builder</span>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="mt-12 inline-flex items-center gap-3 px-6 py-3 border border-primary/20 rounded-sm bg-primary/5 shadow-sm relative z-10"
            >
              <span className="w-2 h-2 rounded-full bg-highlight shadow-[0_0_8px_rgba(216,139,158,0.8)] animate-pulse" />
              <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.15em] text-highlight font-mono">Open to Opportunities</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
