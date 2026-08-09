import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#000000",
          900: "#08080A",
          800: "#0F0F12",
          700: "#16161A",
        },
        line: "rgba(255,255,255,0.08)",
        accent: {
          DEFAULT: "#7C8AFF",
          glow: "#5C6BFF",
          soft: "#A8B2FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        arabic: ["var(--font-vazir)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        shell: "1200px",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.7)", opacity: "0.6" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        wave: {
          "0%,100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gridFade: {
          "0%,100%": { opacity: "0.15" },
          "50%": { opacity: "0.25" },
        },
        aiPulse: {
          "0%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0.9" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseRing: "pulseRing 3s ease-out infinite",
        wave: "wave 1.1s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        gridFade: "gridFade 8s ease-in-out infinite",
        aiPulse: "aiPulse 2.4s ease-in-out infinite",
        scan: "scan 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
