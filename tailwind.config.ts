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
          DEFAULT: "#F8B77C", /* Fawn */
          light: "#FAD5B4",
          dark: "#E89B5C",
        },
        secondary: {
          DEFAULT: "#FFF183", /* Maize */
          light: "#FFF8B8",
        },
        accent: {
          DEFAULT: "#E8C1C8",
          light: "#F2D8DC",
        },
        highlight: {
          DEFAULT: "#70C1E1", /* Sky Blue */
          dark: "#50A1C1",
        },
        text: {
          DEFAULT: "#5A4C4F",
          muted: "#8A7E81",
          light: "#B4ABA1",
        },
        spring: {
          sage: "#C3D4CB",
          butter: "#FFF183", /* Maize */
          blush: "#EFA7BA",
          lavender: "#E3DFED",
          olive: "#BCC1B0",
          fern: "#82BA88", /* Olivine */
          ocean: "#70C1E1", /* Sky Blue */
          peach: "#F8B77C", /* Fawn */
        },
        paper: {
          100: "#FDFBF7",
          200: "#F5EFE6",
          300: "#ECE3D4",
          400: "#E3D6C2",
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
