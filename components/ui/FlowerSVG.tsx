import React from "react";

interface FlowerSVGProps {
  className?: string;
  size?: number | string;
  petalColor?: string;
  centerColor?: string;
  opacity?: number;
}

export default function FlowerSVG({
  className = "",
  size = "100%",
  petalColor = "#F4A3C0", // Soft pink matching primary-light
  centerColor = "#FDFBF7", // Background Cream
  opacity = 1
}: FlowerSVGProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size} 
      className={className}
      style={{ opacity }}
    >
      <g fill={petalColor}>
        <circle cx="50" cy="33" r="17" />
        <circle cx="66" cy="45" r="17" />
        <circle cx="60" cy="64" r="17" />
        <circle cx="40" cy="64" r="17" />
        <circle cx="34" cy="45" r="17" />
      </g>
      <circle cx="50" cy="50" r="9" fill={centerColor} />
    </svg>
  );
}
