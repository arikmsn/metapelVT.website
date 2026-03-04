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
        primary: {
          DEFAULT: "#1e1b4b",
          light: "#312e81",
          dark: "#1e1b4b",
        },
        secondary: "#7c3aed",
        accent: {
          DEFAULT: "#2dd4bf",
          dark: "#14b8a6",
          warm: "#f97316",
        },
        background: "#f8fafc",
        "background-alt": "#f1f5f9",
        surface: "#ffffff",
        "text-primary": "#1e1b4b",
        "text-secondary": "#475569",
        "text-muted": "#94a3b8",
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: ["Noto Sans Hebrew", "system-ui", "sans-serif"],
        heading: ["Rubik", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
