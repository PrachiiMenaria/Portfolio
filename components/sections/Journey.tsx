"use client";

import { motion } from "framer-motion";

export default function Journey() {
  const milestones = [
    {
      year: "2023 – 2026",
      title: "BCA Completed",
      organization: "Sir Padampat Singhania University",
      description: "Result awaited. Built a strong foundation in software engineering, frontend ecosystems, and exploring AI/ML applications.",
      stamp: "Postmarked",
      location: "Udaipur, IND"
    },
    {
      year: "June 2025 – July 2025",
      title: "IT Intern",
      organization: "Pyrotech Pvt. Ltd.",
      description: "Built a Visitor Management System as part of my internship project and learning experience.",
      stamp: "Delivered",
      location: "Udaipur, IND"
    }
  ];

  return (
    <section id="journey" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle paper texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="font-handwriting text-3xl text-primary mb-4 transform rotate-2 flex items-center gap-2 justify-center">
            <span>Learning Path</span>
            <span className="text-primary/70 text-lg">❊</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-text tracking-tight relative inline-block">
            Career Archive
            <svg className="absolute -bottom-4 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </h2>
        </div>
        
        <div className="relative">
          {/* The dotted trail connecting postcards */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/20 hidden md:block -z-10" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
                viewport={{ once: true, margin: "-150px" }}
                whileHover={{ scale: 1.03, y: -6, rotate: index % 2 === 0 ? 0.5 : -0.5, zIndex: 20 }}
                transition={{ 
                  default: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                  whileHover: { type: "spring", stiffness: 200, damping: 15 }
                }}
                className={`relative w-full md:w-[80%] ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} bg-[#F5F8FA] p-8 md:p-10 shadow-md hover:shadow-lg border border-secondary/30 group cursor-pointer transition-shadow duration-300`}
              >
                {/* Postcard dividing line */}
                <div className="absolute top-8 bottom-8 right-1/3 w-px border-l border-text/10 hidden sm:block" />

                {/* Postage Stamp */}
                <div className="absolute top-6 right-6 w-12 h-14 bg-background border border-primary/10 p-1 hidden sm:block transform rotate-3">
                   <div className="w-full h-full border border-dashed border-primary/30 flex flex-col items-center justify-center text-primary/50">
                      <span className="text-[8px] uppercase tracking-widest font-bold">2026</span>
                   </div>
                   {/* Cancellation Mark */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-primary/20 rounded-full opacity-50 pointer-events-none -ml-4" />
                </div>

                <div className="sm:pr-[35%] relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                     <span className="font-handwriting text-xl text-primary transform -rotate-2">{item.stamp}</span>
                     <span className="text-xs font-mono uppercase tracking-widest text-text-muted">{item.year}</span>
                  </div>

                  <h3 className="text-3xl font-display text-text mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-text-muted font-serif italic mb-6">{item.organization}</p>
                  
                  <p className="text-text-muted/80 font-light leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Postcard Address lines */}
                <div className="absolute bottom-10 right-8 hidden sm:flex flex-col gap-3 w-1/4 opacity-40">
                   <div className="w-full h-px border-b border-text/20" />
                   <div className="w-full h-px border-b border-text/20" />
                   <div className="w-full h-px border-b border-text/20" />
                   <span className="font-handwriting text-sm mt-2 text-right">{item.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
