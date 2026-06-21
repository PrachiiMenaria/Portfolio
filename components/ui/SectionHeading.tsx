"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) {
  return (
    <div className="mb-16">
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-primary-dark font-medium tracking-wider text-sm uppercase block mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        className="text-4xl md:text-5xl font-display font-medium text-text tracking-tight"
      >
        {children}
      </motion.h2>
    </div>
  );
}
