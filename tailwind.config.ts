import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFBF7",
        surface: "#FFFFFF",
        primary: {
          DEFAULT: "#C98D8D", // Dusty Rose
          light: "#DFBABA",
          dark: "#A36868",
        },
        secondary: {
          DEFAULT: "#E5D9C5", // Aged Parchment
          light: "#F0E8DC",
        },
        accent: {
          DEFAULT: "#D6C3C3",
          dark: "#B09C9C",
        },
        highlight: {
          DEFAULT: "#A86363", // Muted Clay/Rust
          light: "#C28282",
        },
        text: {
          DEFAULT: "#5A4C4F",
          muted: "#8A7E81",
          light: "#B4ABA1",
        },
        vintage: {
          sage: "#9CAF88",     // Faded Olive/Sage
          slate: "#8E9AAB",    // Faded Blue/Grey
          sepia: "#C8B598",    // Muted Gold/Brown
          blush: "#D4A5A5",    // Faded Pink
          parchment: "#EAE0CC" // Old Paper
        },
        paper: {
          100: "#FDFBF7",
          200: "#F9F6F0",
          300: "#F4EFE6",
          400: "#EFE7DA",
          500: "#D4C5AD",
          600: "#C4B296",
          700: "#B09C7D",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        'paper': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'paper-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'paper-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
};
export default config;
