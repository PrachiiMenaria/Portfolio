"use client";

import React from "react";
import { motion } from "framer-motion";

interface CinematicTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export default function CinematicText({ text, className = "", once = true }: CinematicTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.035, // Snappy stagger between words
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 12,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14
      }
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-120px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-1">
          <motion.span
            variants={wordVariants}
            className="inline-block origin-bottom"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
