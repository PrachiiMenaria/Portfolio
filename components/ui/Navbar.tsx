"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = ["about", "projects", "skills", "contact"];
    const observedElements = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-30% 0px -60% 0px", // Trigger when the section is in the upper middle area
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observedElements.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-text/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Magnetic range={45} strength={0.35}>
          <Link href="/" className="font-display font-semibold text-xl tracking-wide text-text group flex items-center gap-1 cursor-pointer select-none">
            <span className="group-hover:text-primary transition-colors">P</span>
            <span className="group-hover:text-highlight transition-colors">M</span>
            <span className="text-accent">.</span>
          </Link>
        </Magnetic>
        
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {["about", "projects", "skills", "contact"].map((section) => {
            const isActive = activeSection === section;
            return (
              <Magnetic key={section} range={40} strength={0.3}>
                <Link
                  href={`#${section}`}
                  className={`relative px-4 py-2 transition-colors duration-300 capitalize select-none cursor-pointer ${
                    isActive ? "text-highlight font-semibold" : "text-text-muted hover:text-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 26 }}
                    />
                  )}
                  {section}
                </Link>
              </Magnetic>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}

