"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Paperclip, Pin } from "lucide-react";
import { MaskingTape, HandwrittenLabel, PressedFlower, SimpleFlower, VintageStamp } from "../ui/Decorations";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const snippet1Ref = useRef<HTMLDivElement>(null);
  const snippet2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(mainCardRef.current, 
      { opacity: 0, y: 30, rotation: -3 },
      { opacity: 1, y: 0, rotation: -1, duration: 1, ease: "power2.out" }
    )
    .fromTo(snippet1Ref.current,
      { opacity: 0, scale: 0.93, rotation: 5 },
      { opacity: 1, scale: 1, rotation: 2, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(snippet2Ref.current,
      { opacity: 0, scale: 0.93, rotation: -6 },
      { opacity: 1, scale: 1, rotation: -3, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    tl.to({}, { duration: 0.5 });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden hidden md:block">
           <div className="absolute -top-[10%] right-[5%] w-72 h-96 bg-spring-sage/10 rounded-3xl -rotate-6 blur-[2px]" />
        </div>
        <SimpleFlower className="absolute top-[-2%] left-[15%] scale-150 opacity-40 rotate-45 z-0" delay={0.2} />

        <div className="grid md:grid-cols-12 gap-10 items-center relative z-10 mt-8 md:mt-0">
          
          {/* Main Intro Note (Spans 7 cols) */}
          <motion.div
            ref={mainCardRef}
            whileHover={{ y: -4, rotate: -0.5, scale: 1.01 }}
            className="md:col-span-7 bg-background p-8 md:p-14 shadow-paper border border-text/5 relative transition-all duration-500 cursor-pointer rounded-sm"
          >
            {/* Subtle paper grain */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none rounded-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

            {/* Tape at top */}
            <MaskingTape className="-top-3 left-1/2 -translate-x-1/2 w-24" delay={0.3} />

            {/* Handwritten Title */}
            <HandwrittenLabel text="Who is Prachi?" className="-top-10 left-0 text-3xl" delay={0.1} />

            {/* Paper clip */}
            <div className="absolute -top-4 right-10 text-text/30 transform rotate-12 drop-shadow-sm">
               <Paperclip className="w-10 h-10" strokeWidth={1.5} />
            </div>

            <div className="space-y-6 text-text-muted font-light leading-relaxed text-base md:text-lg mt-4 font-serif relative z-10">
              <p>
                Recent BCA graduate with a focus on <strong className="text-highlight font-medium">AI & ML</strong>.
              </p>
              <p>
                Currently focused on <strong className="text-highlight font-medium">frontend engineering</strong>, React ecosystems, full-stack development, modern web experiences, and building thoughtful digital products.
              </p>
              
              <div className="pt-4 border-t border-text/10 border-dashed">
                <p className="text-text font-medium not-italic mb-4 font-sans text-sm tracking-wide uppercase">Interested in understanding both:</p>
                <ul className="space-y-3 font-serif italic text-text-muted pl-2">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>How systems work technically</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>How products feel visually</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Embedded Handwritten annotation */}
            <div className="mt-12 flex justify-end relative">
               <VintageStamp className="-bottom-6 -right-6 rotate-12 opacity-50 mix-blend-multiply" delay={0.4} />
               <div className="font-handwriting text-3xl text-primary/70 transform -rotate-2 z-10 relative">
                 - Always curious.
               </div>
            </div>
          </motion.div>
          
          {/* Right Column: Identity Snippets (Spans 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-10 md:gap-14 relative mt-16 md:mt-0 items-center md:items-end">
             
             {/* Status & Education Card */}
             <motion.div
               ref={snippet1Ref}
               whileHover={{ y: -4, rotate: 2, scale: 1.02 }}
               className="bg-paper-200 p-6 shadow-sm border border-text/10 relative w-full max-w-[320px] transition-all duration-300 cursor-pointer rounded-sm z-20"
             >
                <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none rounded-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
                
                {/* Tape */}
                <MaskingTape className="-top-3 left-6 rotate-3 w-12" delay={0.5} />

                {/* Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-text/30 drop-shadow-sm">
                   <Pin className="w-6 h-6 fill-highlight/20 text-text/30 transform rotate-12" />
                </div>
                
                <h4 className="text-[10px] uppercase tracking-widest text-primary mb-3 border-b border-text/10 pb-2 font-medium font-mono relative z-10">Status / Education</h4>
                <div className="font-serif text-base text-text space-y-1 relative z-10">
                   <span className="block font-medium">BCA Graduate</span>
                   <span className="text-text-muted text-xs italic block">Specialization: AI & ML</span>
                </div>
             </motion.div>

             {/* Focus Sticky Note */}
             <motion.div
               ref={snippet2Ref}
               whileHover={{ y: -4, rotate: -2, scale: 1.02 }}
               className="bg-spring-butter p-6 shadow-sm relative w-full max-w-[300px] border border-spring-butter/80 transition-all duration-300 cursor-pointer rounded-sm z-30"
             >
                <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none rounded-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
                
                {/* Tape */}
                <MaskingTape className="-top-3 right-6 -rotate-6 w-12" delay={0.6} />
                
                <h4 className="font-handwriting text-2xl text-text mb-3 border-b border-text/10 pb-2">Design & Craft</h4>
                <p className="text-sm text-text-muted font-serif italic leading-relaxed">
                  Focusing on creating web interfaces that are clean, highly accessible, responsive, and filled with micro-interactions.
                </p>

                <PressedFlower className="-bottom-10 -left-8 scale-75 rotate-[120deg] opacity-60" delay={0.7} />
             </motion.div>
             
          </div>

        </div>
      </div>
    </section>
  );
}
