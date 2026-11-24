import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FCFAF6",
          100: "#F8F4EC",
          200: "#F2EBDF",
          300: "#E9DFCE"
        },
        champagne: {
          100: "#F1E7D6",
          200: "#E7D8C0",
          300: "#DCC7A6",
          400: "#C9A96A",
          500: "#B8935A"
        },
        taupe: {
          200: "#D8CFC2",
          300: "#BEB1A1",
          400: "#A2937F",
          500: "#8A7C69"
        },
        espresso: {
          700: "#4A3B30",
          800: "#342921",
          900: "#241C16",
          950: "#1A140F"
        },
        warmgrey: {
          400: "#93897D",
          500: "#776E63",
          600: "#5F574E"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-arabic-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "var(--font-arabic-sans)", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        label: "0.28em",
        editorial: "-0.02em"
      },
      fontSize: {
        "display-xl": ["clamp(3.25rem, 8vw, 8.5rem)", { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.75rem, 5.6vw, 5.75rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2.1rem, 3.6vw, 3.5rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }]
      },
      maxWidth: {
        editorial: "78rem",
        prose: "44rem"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "slow-zoom": "slow-zoom 18s ease-out both",
        marquee: "marquee 38s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
