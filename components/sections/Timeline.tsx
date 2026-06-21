"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Paperclip } from "lucide-react";
import { Postmark, SimpleFlower, HandwrittenLabel } from "../ui/Decorations";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const timeline = [
    {
      year: "2023 – 2026",
      title: "BCA Completed",
      organization: "Sir Padampat Singhania University",
      description: "Result awaited. Specialized in AI & ML. Built key conceptual and practical foundations in database systems, software design, and frontend interfaces.",
      stampText: "UDAIPUR",
      postmark: "2026",
      rotation: -1.5,
      accent: "bg-vintage-slate/40",
      tapeRotation: "rotate-2",
    },
    {
      year: "2025",
      title: "IT Internship",
      organization: "Pyrotech Pvt. Ltd.",
      description: "Designed, built, and launched a secure full-stack Visitor Management System during a dedicated internship, focusing on digital check-ins and pass tracking.",
      stampText: "INTERN",
      postmark: "2025",
      rotation: 2,
      accent: "bg-vintage-sepia/40",
      tapeRotation: "-rotate-3",
    },
    {
      year: "Present",
      title: "Expanding Skills",
      organization: "Independent Builder",
      description: "Expanding knowledge of React ecosystems, Next.js architecture, API integrations, and building modern, high-quality interactive products.",
      stampText: "CREATOR",
      postmark: "ACTIVE",
      rotation: -1,
      accent: "bg-vintage-sage/40",
      tapeRotation: "rotate-1",
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
          { opacity: 0, x: index % 2 === 0 ? -40 : 40, rotation: index % 2 === 0 ? -6 : 6 },
          { opacity: 1, x: 0, rotation: timeline[index].rotation, duration: 1, ease: "power2.out" },
          index === 0 ? "-=0.4" : "-=0.6"
        );
      }
    });

    tl.to({}, { duration: 0.5 });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full flex flex-col justify-center py-24 px-4 md:px-6 relative overflow-hidden bg-transparent">
      
      <SimpleFlower className="absolute top-[30%] left-[5%] scale-150 opacity-20 -rotate-[30deg] blur-[1px]" delay={0.3} />
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <div ref={headerRef} className="mb-20 text-center relative">
          <HandwrittenLabel text="Postal Route ❁" className="-top-6 left-1/2 ml-12" delay={0.2} />
          <h2 className="text-4xl md:text-5xl font-display text-text tracking-tight relative inline-block mt-4 z-10">
            Career Timeline
            <svg className="absolute -bottom-3 left-0 w-full h-2 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto mt-16 mb-8">
          
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-px border-t-2 border-dashed border-text/15 z-0 -translate-y-1/2" />
          
          <div className="md:hidden absolute left-6 top-4 bottom-4 w-px border-l-2 border-dashed border-text/15 z-0" />

          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center relative z-10 w-full gap-8 md:gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative w-full md:w-1/3 flex flex-col justify-center">
                
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-background border-[2.5px] border-highlight z-20" />
                
                <div className="md:hidden absolute top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-background border-[2.5px] border-highlight z-20" />

                <motion.div
                  ref={(el) => { cardsRef.current[idx] = el; }}
                  whileHover={{ rotate: 0, scale: 1.02, zIndex: 30 }}
                  className={`relative w-[85%] md:w-full ml-auto md:ml-0 bg-background border border-text/5 p-5 shadow-paper hover:shadow-paper-lg rounded-sm cursor-pointer transition-all duration-300 group z-10 ${
                    idx % 2 === 0 ? "md:-mt-12" : "md:mt-12"
                  }`}
                >
                  <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none rounded-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

                  <div className={`absolute top-0 bottom-0 left-0 w-3 ${item.accent} mix-blend-multiply rounded-l-sm`} />

                  <div className={`absolute -top-4 ${idx % 2 === 0 ? "right-4" : "left-4"} text-text/30 drop-shadow-sm transform ${item.tapeRotation}`}>
                    <Paperclip className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  
                  <div className="absolute top-2 right-2 z-10 opacity-40 transform rotate-12 scale-75 group-hover:rotate-6 transition-transform hidden lg:block">
                    <Postmark delay={0.5} className="static mix-blend-multiply" />
                  </div>

                  <div className="relative z-10 pl-3">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-handwriting text-xl text-highlight font-bold border-b border-text/10 pb-0.5">{item.year}</span>
                    </div>
                    <h4 className="text-[15px] md:text-base font-display text-text font-semibold mt-2">{item.title}</h4>
                    <p className="text-text-muted text-[11px] font-serif italic mb-2">{item.organization}</p>
                    <p className="text-text-muted/90 font-sans text-[11px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
