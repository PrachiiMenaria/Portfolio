"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { MaskingTape, PaperTab } from "./Decorations";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
  accentColor?: "sage" | "blush" | "butter" | "lavender" | "cream" | "ocean" | "peach" | "fern";
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  features,
  tags,
  githubUrl,
  liveUrl,
  delay = 0,
  accentColor = "cream"
}: ProjectCardProps) {
  
  // Map color prop to tailwind classes
  const colorMap = {
    sage: "bg-spring-sage/20 border-spring-sage/40",
    blush: "bg-spring-blush/20 border-spring-blush/40",
    butter: "bg-spring-butter/20 border-spring-butter/40",
    lavender: "bg-spring-lavender/20 border-spring-lavender/40",
    cream: "bg-paper-200 border-text/5",
    ocean: "bg-spring-ocean/20 border-spring-ocean/40",
    peach: "bg-spring-peach/20 border-spring-peach/40",
    fern: "bg-spring-fern/20 border-spring-fern/40"
  };
  
  const bgClass = colorMap[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className={`relative w-full ${bgClass} rounded-md p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group`}
    >
       {/* Subtle vintage texture */}
       <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none rounded-md" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
       
       <PaperTab text={`Case_ID: ${(title.substring(0, 3)).toUpperCase()}-26`} className="-top-3 left-4 bg-paper-400 group-hover:-translate-y-1 transition-transform" delay={0.2} />
       <MaskingTape className="-top-3 left-1/2 -translate-x-1/2" delay={0.4} />

       <div className="relative z-10 flex-grow mt-2">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-text/10 pb-4 mb-5">
            <div>
              <h3 className="font-display text-2xl font-bold text-text mb-1">{title}</h3>
              {subtitle && <p className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">{subtitle}</p>}
            </div>
            {/* Vintage stamp */}
            <div className="w-10 h-10 rounded-full border border-dashed border-highlight/40 flex items-center justify-center text-highlight/50 transform rotate-12 font-serif text-[10px] font-bold shadow-sm bg-paper-300 shrink-0">
              PM
            </div>
          </div>

          {/* Description */}
          <p className="text-text-muted text-sm leading-relaxed font-serif italic mb-5">
            {description}
          </p>

          {/* Features list */}
          {features && features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs font-sans text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-highlight mt-0.5 shrink-0 opacity-70" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tags & Action Links */}
        <div className="relative z-10 mt-6 pt-4 border-t border-text/10">
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-background/50 border border-text/5 text-text-muted font-mono text-[10px] uppercase tracking-wide rounded-sm shadow-sm backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            {githubUrl ? (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-xs text-text-muted hover:text-highlight transition-colors font-mono font-medium"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="text-xs text-text-light font-mono italic">Confidential</span>
            )}

            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-text hover:text-highlight transition-colors"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
    </motion.div>
  );
}

