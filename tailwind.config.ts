import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", md: "2rem", lg: "2.5rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: { DEFAULT: "#111315", 2: "#2A2E33", muted: "#555B62", soft: "#7A8087" },
        paper: "#F7F7F4",
        line: "#E3E0D7",
        pool: { DEFAULT: "#0F4C68", deep: "#0A3A50", bright: "#1E6E92", soft: "#E4EEF2" },
        stone: { DEFAULT: "#CFC6B6", light: "#EDE8DF", dark: "#8F8573" },
        olive: { DEFAULT: "#6B775C", soft: "#EBEEE5" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "h2": ["clamp(2.125rem, 4.2vw, 3.5rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "h3": ["clamp(1.375rem, 2vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      borderRadius: { card: "20px" },
      boxShadow: {
        lift: "0 18px 40px -22px rgba(17,19,21,0.28)",
        glow: "0 20px 50px -28px rgba(15,76,104,0.45)",
      },
      transitionTimingFunction: { soft: "cubic-bezier(0.22, 1, 0.36, 1)" },
      keyframes: {
        fadeUp: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: { "fade-up": "fadeUp 320ms cubic-bezier(0.22,1,0.36,1) both" },
    },
  },
  plugins: [],
};
export default config;
