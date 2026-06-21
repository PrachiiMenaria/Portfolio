"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { Postmark, VintageStamp, SimpleFlower, HandwrittenLabel } from "../ui/Decorations";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(cardRef.current,
      { opacity: 0, y: 40, rotation: 3 },
      { opacity: 1, y: 0, rotation: -0.5, duration: 1, ease: "power2.out" }
    );

    tl.fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    tl.fromTo(actionRef.current,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full min-h-[70vh] flex items-center justify-center bg-transparent relative overflow-hidden py-16 px-4 md:px-6">
      
      <div className="max-w-3xl mx-auto w-full relative z-10 text-center">
        
        {/* Stationery Postcard Container */}
        <motion.div
          ref={cardRef}
          whileHover={{ rotate: 0, y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-spring-butter p-8 md:p-10 border border-spring-butter shadow-md hover:shadow-xl relative rounded-sm max-w-xl mx-auto cursor-pointer"
        >
          {/* Subtle vintage texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none rounded-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

          {/* Faint inner lining border (postcard style) */}
          <div className="absolute inset-3 border-[1.5px] border-text/10 rounded-sm pointer-events-none" />
          
          {/* Decorative Corner Stamps */}
          <VintageStamp className="top-6 right-6 rotate-6 z-10" delay={0.3} />
          <Postmark className="top-8 right-16 opacity-60 z-10" delay={0.4} />

          {/* Decorative Floral Accent */}
          <SimpleFlower className="absolute bottom-8 left-6 rotate-[-45deg] scale-100 opacity-70 z-0" delay={0.5} />

          <div 
            ref={contentRef}
            className="flex flex-col items-center relative z-10"
          >
            <HandwrittenLabel text="Write Back ❁" className="-top-4 right-1/4" delay={0.2} />
            
            <h2 className="text-3xl md:text-4xl font-display font-medium text-text tracking-tight mb-6 mt-4">
              Yours Sincerely,
            </h2>
            
            <div className="text-text-muted leading-relaxed mb-8 max-w-md mx-auto text-sm font-serif italic space-y-3">
              <p>
                "If you've made it this far into the archive, thank you for reading."
              </p>
              <p>
                "Whether it's an opportunity, collaboration, or a simple hello, I'd love to hear from you."
              </p>
              <p className="font-sans not-italic text-[10px] font-semibold uppercase tracking-widest text-highlight pt-1">
                Let's write the next chapter together.
              </p>
            </div>
          </div>

          {/* Mail Button Styled like a Wax Seal Letter & Socials */}
          <div
            ref={actionRef}
            className="flex flex-col items-center relative z-10"
          >
            <motion.a 
              href="mailto:menariaprachi0@gmail.com?subject=Hello%20Prachi&body=Dear%20Prachi,%0D%0A%0D%0A"
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 bg-highlight text-background font-serif italic text-base rounded-sm shadow-md border border-highlight hover:bg-highlight-dark transition-all group"
            >
              <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Send Letter</span>
            </motion.a>

            {/* Retro envelope social anchors */}
            <div className="flex gap-4 justify-center mt-8 border-t border-text/10 pt-6 w-full relative">
              <a 
                href="https://github.com/PrachiiMenaria" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-spring-ocean rounded-full border border-spring-ocean text-text hover:bg-spring-ocean/80 hover:scale-110 hover:-rotate-6 transition-all shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prachi-menaria-074259345" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-spring-peach rounded-full border border-spring-peach text-text hover:bg-spring-peach/80 hover:scale-110 hover:rotate-6 transition-all shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/qr/3DIRYAUHFKUPC1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-spring-fern rounded-full border border-spring-fern text-text hover:bg-spring-fern/80 hover:scale-110 hover:-rotate-6 transition-all shadow-sm"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
