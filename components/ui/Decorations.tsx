"use client";

import { motion } from "framer-motion";

interface DecorationProps {
  className?: string;
  delay?: number;
}

// 1. Masking Tape Piece
export function MaskingTape({ className = "", delay = 0 }: DecorationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 100 }}
      className={`absolute w-16 h-6 bg-[#E2DCCF]/70 backdrop-blur-sm shadow-sm z-20 pointer-events-none ${className}`}
      style={{
        clipPath: "polygon(0% 10%, 5% 0%, 95% 5%, 100% 15%, 98% 85%, 95% 100%, 5% 95%, 2% 85%)"
      }}
    />
  );
}

// 2. Vintage Postal Stamp
export function VintageStamp({ className = "", delay = 0 }: DecorationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      className={`absolute w-14 h-16 bg-[#FCFAF6] shadow-sm flex flex-col p-1 z-10 pointer-events-none ${className}`}
      style={{
        // Stamp perforated edges using radial gradient masking
        maskImage: "radial-gradient(circle at 4px 4px, transparent 4px, black 4px)",
        maskSize: "12px 12px",
        maskPosition: "-4px -4px"
      }}
    >
      <div className="flex-1 border border-text/15 bg-spring-sage/20 flex items-center justify-center relative overflow-hidden">
        {/* Simple floral/botanical inner stamp mark */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-primary/60 stroke-[1.5]">
          <path d="M12 22C12 22 12 12 12 10" />
          <path d="M12 10C12 10 14 6 18 6C18 6 18 10 12 14" />
          <path d="M12 14C12 14 8 10 8 6C8 6 6 6 6 10C6 14 12 14 12 14Z" />
        </svg>
      </div>
      <div className="h-3 w-full flex items-center justify-between px-1">
        <span className="text-[6px] font-mono font-bold text-text-light">0.25</span>
        <span className="text-[5px] uppercase tracking-widest text-text-muted">Post</span>
      </div>
    </motion.div>
  );
}

// 3. Faded Postmark Circular Stamp
export function Postmark({ className = "", delay = 0 }: DecorationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={`absolute w-24 h-24 rounded-full border-[1.5px] border-text/10 flex items-center justify-center z-10 pointer-events-none mix-blend-multiply ${className}`}
    >
      <div className="w-[85%] h-[85%] rounded-full border border-text/5 flex items-center justify-center relative">
        <span className="text-[7px] font-mono tracking-[0.2em] text-text/15 absolute top-2 uppercase">Spring</span>
        <span className="text-[7px] font-mono tracking-[0.2em] text-text/15 absolute bottom-2 uppercase">2026</span>
        <div className="flex flex-col items-center justify-center transform -rotate-12">
           <span className="text-xs font-serif italic text-text/20">Archive</span>
           <div className="w-10 h-[1px] bg-text/10 my-0.5" />
           <span className="text-[6px] font-mono text-text/15">PM-001</span>
        </div>
      </div>
    </motion.div>
  );
}

// 4. Handwritten "Caveat" Label
export function HandwrittenLabel({ text, className = "", delay = 0 }: DecorationProps & { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute font-handwriting text-xl text-highlight transform -rotate-2 z-20 pointer-events-none drop-shadow-sm ${className}`}
    >
      {text}
    </motion.div>
  );
}

// 5. Pressed Flower (Simple SVG botanical element with stem)
export function PressedFlower({ className = "", delay = 0 }: DecorationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 0.9, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1, type: "spring" }}
      className={`absolute w-12 h-16 z-10 pointer-events-none drop-shadow-sm mix-blend-multiply ${className}`}
    >
      <svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C8BBBE]">
         {/* Stem */}
         <line x1="50" y1="50" x2="50" y2="130" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
         
         {/* Left Leaf */}
         <path d="M50 100 Q 30 85, 30 110 Q 50 110, 50 100" fill="currentColor" opacity="0.8" />
         {/* Right Leaf */}
         <path d="M50 80 Q 75 70, 75 95 Q 50 95, 50 80" fill="currentColor" opacity="0.8" />
         
         {/* Petals - Light Pink (#F6D9E1) */}
         <g fill="#F6D9E1">
           <circle cx="50" cy="30" r="14" />
           <circle cx="32" cy="45" r="14" />
           <circle cx="68" cy="45" r="14" />
           <circle cx="38" cy="65" r="14" />
           <circle cx="62" cy="65" r="14" />
         </g>
         
         {/* Center */}
         <circle cx="50" cy="48" r="8" fill="#FFFDF9" />
      </svg>
    </motion.div>
  );
}

// 5b. Simple Flower (No Stem)
export function SimpleFlower({ className = "", delay = 0 }: DecorationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 0.9, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1, type: "spring" }}
      className={`absolute w-12 h-12 z-10 pointer-events-none drop-shadow-sm mix-blend-multiply ${className}`}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
         {/* Petals - Light Pink (#F6D9E1) */}
         <g fill="#F6D9E1">
           <circle cx="50" cy="25" r="16" />
           <circle cx="26" cy="42" r="16" />
           <circle cx="74" cy="42" r="16" />
           <circle cx="35" cy="70" r="16" />
           <circle cx="65" cy="70" r="16" />
         </g>
         
         {/* Center */}
         <circle cx="50" cy="48" r="10" fill="#FFFDF9" />
      </svg>
    </motion.div>
  );
}

// 6. Torn Paper Scrap
export function TornPaperScrap({ className = "", delay = 0, children }: DecorationProps & { children?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      className={`absolute bg-paper-300 border border-text/5 shadow-sm p-3 z-10 pointer-events-none ${className}`}
      style={{
        clipPath: "polygon(2% 2%, 98% 0%, 100% 98%, 3% 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

// 7. Paper Tab (for edge of cards/folders)
export function PaperTab({ text, className = "", delay = 0 }: DecorationProps & { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className={`absolute px-3 py-1 bg-spring-butter border border-text/10 text-[9px] font-mono tracking-widest text-text-muted uppercase font-bold shadow-sm z-0 pointer-events-none ${className}`}
    >
      {text}
    </motion.div>
  );
}

// 8. Wavy/Torn Divider Line
export function TornDivider({ className = "", delay = 0 }: DecorationProps) {
  // Removed per user request to keep section transitions clean without lines or diamonds
  return <></>;
}
