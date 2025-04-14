import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "hover:border-interactive-1",
    "hover:border-interactive-2",
    "hover:border-interactive-3",
    "hover:border-interactive-4",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1F1D2B",
        primary: "#3E73C4",
        secondary: "#B0B3C3",
        success: "#7FE0A2",
        warning: "#FFD479",
        danger: "#F76C6C",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A1A1AA",
        "gray-text": "#393C49",
        "interactive-1": "#0BA1F9",
        "interactive-2": "#F9CD2F",
        "interactive-3": "#FB832D",
        "interactive-4": "#F7F7F7",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
