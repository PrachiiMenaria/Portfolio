"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../ui/ProjectCard";
import { TornDivider, VintageStamp, PressedFlower, HandwrittenLabel } from "../ui/Decorations";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Define accent colors for each project to create a varied spring palette
  const accentColors: ("slate" | "sage" | "sepia")[] = [
    "slate",
    "sage",
    "sepia"
  ];

  const projects = [
    {
      title: "Fenora",
      subtitle: "AI Finance & Wardrobe Intelligence",
      description: "An intelligent platform combining expense tracking, wardrobe analytics, and personalized AI-driven financial insights to optimize your lifestyle decisions.",
      features: [
        "Personalized expense & budget tracking",
        "Digital wardrobe organizer & styling logic",
        "AI intelligence insights on your habits"
      ],
      tags: ["React", "Next.js", "Python", "Flask", "PostgreSQL", "Gemini AI"],
      githubUrl: "https://github.com/PrachiiMenaria/spendwise",
      liveUrl: "https://spendwise-beryl-six.vercel.app",
    },
    {
      title: "Visitor Management",
      subtitle: "Internship Tracking System",
      description: "Built during internship experience at Pyrotech. A secure and streamlined administration dashboard for managing visitor logs, passes, and check-ins.",
      features: [
        "Visitor registration & database search",
        "Instant digital pass generation",
        "Employee assignment & notifications",
        "Real-time check-in/out tracking system"
      ],
      tags: ["Flask", "PostgreSQL", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/PrachiiMenaria/VMS",
    },
    {
      title: "Archival Registry",
      subtitle: "Future Products",
      description: "Exploring new full-stack architectures, advanced React patterns, system state management, and highly-refined user interface designs.",
      features: [
        "Full-stack micro-products",
        "Highly-curated micro-animations",
        "Interactive canvas applications"
      ],
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    cardsRef.current.forEach((card, index) => {
      if (card) {
        tl.fromTo(card,
          { opacity: 0, y: 30, rotation: index % 2 === 0 ? -2 : 2 },
          { opacity: 1, y: 0, rotation: index % 2 === 0 ? -1 : 1, duration: 1, ease: "power2.out" },
          index === 0 ? "+=0" : "-=0.4"
        );
      }
    });

    // Hold the scene for a beat
    tl.to({}, { duration: 0.5 });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full min-h-screen flex flex-col justify-center bg-transparent relative overflow-hidden py-24 px-4 md:px-6">
      
      <TornDivider className="absolute top-0 w-3/4 max-w-2xl" delay={0.2} />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center relative">
          <HandwrittenLabel text="Case Files ❁" className="-top-6 left-1/2 ml-16" delay={0.3} />
          <h2 className="text-4xl md:text-5xl font-display text-text tracking-tight relative inline-block mt-4 z-10">
            Project Archive
            <svg className="absolute -bottom-3 left-0 w-full h-2 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </h2>

          <VintageStamp className="-top-4 right-[20%] md:right-[30%] rotate-12 opacity-80" delay={0.4} />
          <PressedFlower className="top-2 left-[15%] md:left-[25%] scale-75 -rotate-45 opacity-60" delay={0.5} />
        </div>
        
        {/* Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 relative">
          
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-spring-butter/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-spring-blush/20 rounded-full blur-3xl pointer-events-none" />

          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="h-full relative"
            >
              <ProjectCard 
                {...project}
                delay={0}
                accentColor={accentColors[index % accentColors.length]}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
