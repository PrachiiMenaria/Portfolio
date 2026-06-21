"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BookOpen, Hammer, Pin } from "lucide-react";
import { MaskingTape, HandwrittenLabel, SimpleFlower, PressedFlower } from "../ui/Decorations";

export default function Desk() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pad1Ref = useRef<HTMLDivElement>(null);
  const pad2Ref = useRef<HTMLDivElement>(null);

  const learning = [
    "Advanced JavaScript (ES6+)",
    "React Architecture & Ecosystems",
    "Backend Systems & Databases",
    "Full Stack Development Patterns",
  ];

  const building = [
    "Full-stack Web Applications",
    "Thoughtful UI/UX Prototypes",
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(headerRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    tl.fromTo(pad1Ref.current,
      { opacity: 0, y: 35, rotation: -4 },
      { opacity: 1, y: 0, rotation: -2, duration: 1, ease: "power2.out" },
      "-=0.4"
    );

    tl.fromTo(pad2Ref.current,
      { opacity: 0, y: 35, rotation: 4 },
      { opacity: 1, y: 0, rotation: 3, duration: 1, ease: "power2.out" },
      "-=0.6"
    );

    tl.to({}, { duration: 0.5 });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full min-h-screen flex flex-col justify-center py-24 px-4 md:px-6 relative overflow-hidden bg-transparent">
      
      {/* Ambient background flower */}
      <SimpleFlower className="absolute top-[20%] left-[10%] scale-125 opacity-40 rotate-[15deg] blur-[1px] z-0" delay={0.3} />
      {/* Soft Ledger Grid Background for the entire section */}
      <div className="absolute inset-4 md:inset-10 bg-paper-200 border border-text/5 rounded-sm -z-10 shadow-sm"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
             backgroundSize: '30px 30px',
           }}
      >
        {/* Binder holes on the left */}
        <div className="absolute left-4 top-10 bottom-10 w-4 flex flex-col justify-between hidden md:flex">
          {[...Array(6)].map((_, i) => (
             <div key={i} className="w-4 h-4 rounded-full bg-background border border-text/10 shadow-inner" />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 pl-0 md:pl-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="mb-20 text-center relative">
          <HandwrittenLabel text="Workspace ❁" className="-top-8 left-1/2 ml-4 md:ml-12" delay={0.2} />
          <h2 className="text-4xl md:text-5xl font-display text-text tracking-tight relative inline-block mt-4 z-10">
            Prachi's Desk
            <svg className="absolute -bottom-3 left-0 w-full h-2 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </h2>
        </div>

        {/* Notebooks Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-start max-w-3xl mx-auto relative">
          
          {/* Learning Sticky Note */}
          <motion.div
            ref={pad1Ref}
            whileHover={{ y: -4, rotate: -1, scale: 1.02, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-spring-butter p-8 shadow-md hover:shadow-lg relative overflow-visible flex flex-col min-h-[350px] rounded-sm cursor-pointer border border-text/5 transform -rotate-2"
          >
            {/* Pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-text/40 drop-shadow-sm">
               <Pin className="w-6 h-6 fill-highlight/40 text-text/30" />
            </div>

            {/* Subtle vintage texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none rounded-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
            
            <div className="relative z-10">
              <h3 className="font-handwriting text-3xl text-text mb-6 flex items-center gap-3 border-b border-text/10 pb-2">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-text/15 bg-background shadow-sm">
                  <BookOpen className="w-5 h-5 text-highlight/80 stroke-[1.5]" />
                </span>
                Currently Learning
              </h3>
              <ul className="space-y-4 font-serif text-[15px] italic text-text-muted mt-4">
                {learning.map((item, idx) => (
                  <li key={idx} className="relative pl-6 before:content-['~'] before:absolute before:left-0 before:text-highlight before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <HandwrittenLabel text="Focus" className="bottom-6 right-6 text-2xl text-highlight opacity-70" delay={0.4} />
          </motion.div>

          {/* Building Card */}
          <motion.div
            ref={pad2Ref}
            whileHover={{ y: -4, rotate: 2, scale: 1.02, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-spring-peach p-8 shadow-md hover:shadow-lg relative overflow-visible flex flex-col min-h-[350px] rounded-sm cursor-pointer border border-spring-peach transform rotate-3 w-full"
          >
            {/* Subtle vintage texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none rounded-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

            {/* Tape Accent */}
            <MaskingTape className="-top-3 right-8 rotate-[5deg] w-16" delay={0.5} />
            
            <div className="relative z-10">
              <h3 className="font-handwriting text-3xl text-text mb-6 flex items-center gap-3 border-b border-text/10 pb-2">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-text/15 bg-background shadow-sm">
                  <Hammer className="w-5 h-5 text-spring-fern stroke-[1.5]" />
                </span>
                Currently Building
              </h3>
              <ul className="space-y-5 font-serif text-[15px] text-text-muted mt-4">
                {building.map((item, idx) => (
                  <li key={idx} className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-spring-fern font-medium italic">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <PressedFlower className="bottom-6 right-6 scale-75 opacity-60 rotate-45" delay={0.7} />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
