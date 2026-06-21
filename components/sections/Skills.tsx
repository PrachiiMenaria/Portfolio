"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Paperclip } from "lucide-react";
import { MaskingTape, HandwrittenLabel } from "../ui/Decorations";

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const toolkit = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      color: "bg-paper-100 border-text/10 text-text",
      pinRotate: "rotate-2",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Python", "Flask", "PostgreSQL"],
      color: "bg-paper-100 border-text/10 text-text",
      pinRotate: "-rotate-3",
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      color: "bg-paper-100 border-text/10 text-text",
      pinRotate: "-rotate-2",
    },
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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        tl.fromTo(card,
          { opacity: 0, y: 40, rotation: index % 2 === 0 ? -6 : 6 },
          { opacity: 1, y: 0, rotation: index % 2 === 0 ? -1 : 1, duration: 1, ease: "power2.out" },
          index === 0 ? "-=0.4" : "-=0.6"
        );
      }
    });

    tl.to({}, { duration: 0.5 });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full min-h-[80vh] flex flex-col justify-center bg-transparent relative overflow-hidden py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 text-center relative">
          <HandwrittenLabel text="The Toolbox ❁" className="-top-6 left-1/2 ml-10" delay={0.2} />
          <h2 className="text-4xl md:text-5xl font-display text-text tracking-tight relative inline-block mt-4 z-10">
            Developer Toolkit
            <svg className="absolute -bottom-3 left-0 w-full h-2 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </h2>
        </div>
        
        {/* Toolkit Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {toolkit.map((card, idx) => (
            <motion.div
              key={card.category}
              ref={(el) => { cardsRef.current[idx] = el; }}
              whileHover={{ scale: 1.03, y: -4, zIndex: 10 }}
              className={`p-6 shadow-sm hover:shadow-md relative border flex flex-col min-h-[240px] rounded-sm ${card.color} transition-all duration-300 cursor-pointer group`}
            >
              <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none rounded-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

              {/* Paperclip */}
              {idx % 2 !== 0 && (
                <div className={`absolute -top-4 right-6 text-text/30 transform ${card.pinRotate} drop-shadow-sm`}>
                  <Paperclip className="w-8 h-8" strokeWidth={1.5} />
                </div>
              )}

              {/* Tape Accent */}
              {idx % 2 === 0 && (
                <MaskingTape className="-top-3 left-1/2 -translate-x-1/2" delay={0.4} />
              )}

              {/* Category Header */}
              <h3 className="font-display text-2xl border-b border-text/10 pb-3 mb-5 font-bold mt-2">
                {card.category}
              </h3>
              
              {/* Skill list */}
              <ul className="flex flex-col gap-3 font-sans font-light text-xs text-text-muted relative z-10">
                {card.skills.map((skill) => (
                  <motion.li 
                    key={skill} 
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="flex items-center gap-3 cursor-default select-none group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-text/20 group-hover/item:bg-highlight transition-colors border border-text/10" />
                    <span className="group-hover/item:text-text transition-colors font-serif italic text-[15px]">{skill}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Index card catalog code */}
              <div className="mt-auto pt-4 self-end font-mono text-[9px] uppercase tracking-widest text-text/40 font-bold border-t border-text/5 w-full text-right">
                IDX-{String(idx + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
