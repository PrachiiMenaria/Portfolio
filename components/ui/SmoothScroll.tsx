"use client";

import React, { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const targetY = useRef(0);
  const currentY = useRef(0);
  const maxScroll = useRef(0);
  const isProgrammatic = useRef(false);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check if device is touch-enabled
    const isTouchDevice = () => {
      return (
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };

    if (isTouchDevice()) {
      return; // Do not apply custom scroll on touch devices to preserve native momentum
    }

    // Initialize positions
    targetY.current = window.scrollY;
    currentY.current = window.scrollY;

    const updateMaxScroll = () => {
      maxScroll.current = document.documentElement.scrollHeight - window.innerHeight;
    };
    
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);

    // Sync positions on scrollbar drag or keyboard navigation
    const handleNativeScroll = () => {
      if (isProgrammatic.current) {
        isProgrammatic.current = false;
        return;
      }
      targetY.current = window.scrollY;
      currentY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleNativeScroll, { passive: true });

    // Intercept mouse wheel events
    const handleWheel = (e: WheelEvent) => {
      // Respect body overflow lock (e.g., during hero envelope animation)
      if (
        document.documentElement.classList.contains("loader-active") ||
        document.documentElement.classList.contains("envelope-sealed") ||
        document.body.classList.contains("loader-active") ||
        document.body.classList.contains("envelope-sealed") ||
        document.body.style.overflow === "hidden"
      ) {
        e.preventDefault();
        return;
      }

      // Allow default behavior for zoom (Ctrl + wheel)
      if (e.ctrlKey) return;

      e.preventDefault();

      // Normalize delta across browsers
      const delta = e.deltaY;
      
      targetY.current += delta;
      // Clamp target
      targetY.current = Math.max(0, Math.min(targetY.current, maxScroll.current));
      
      // Start loop if not already running
      if (animationFrameId.current === null) {
        animationFrameId.current = requestAnimationFrame(tick);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });

    // RequestAnimationFrame tick loop
    const tick = () => {
      const diff = targetY.current - currentY.current;
      
      // If difference is tiny, snap to target and stop loop
      if (Math.abs(diff) < 0.1) {
        currentY.current = targetY.current;
        isProgrammatic.current = true;
        window.scrollTo(0, currentY.current);
        animationFrameId.current = null;
        return;
      }

      // Linear Interpolation (lerpFactor = 0.08 for extremely smooth slide)
      const lerpFactor = 0.08;
      currentY.current += diff * lerpFactor;

      isProgrammatic.current = true;
      window.scrollTo(0, currentY.current);
      
      animationFrameId.current = requestAnimationFrame(tick);
    };

    // Smooth anchor navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          updateMaxScroll(); // Refresh height in case content shifted
          const rect = element.getBoundingClientRect();
          const targetOffset = rect.top + window.scrollY;
          
          targetY.current = Math.max(0, Math.min(targetOffset, maxScroll.current));
          
          if (animationFrameId.current === null) {
            animationFrameId.current = requestAnimationFrame(tick);
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("resize", updateMaxScroll);
      window.removeEventListener("scroll", handleNativeScroll);
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("click", handleAnchorClick);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return <>{children}</>;
}
