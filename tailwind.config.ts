import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          soft: "#141C2E",
        },
        paper: {
          DEFAULT: "#F4F3EE",
          soft: "#EAE8E0",
        },
        gold: {
          DEFAULT: "#B08D57",
          light: "#D4B685",
          dark: "#8A6C3E",
        },
        teal: {
          DEFAULT: "#1C6E67",
          light: "#2C948B",
          dark: "#124F4A",
        },
        slate: {
          DEFAULT: "#4A5568",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        lattice: "url('/lattice.svg')",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        "spin-slow": "spinSlow 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
