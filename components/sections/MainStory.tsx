"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Timeline from "./Timeline";
import Desk from "./Desk";
import Contact from "./Contact";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function MainStory() {
  return (
    <div className="w-full relative bg-transparent flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Desk />
      <Contact />
    </div>
  );
}
