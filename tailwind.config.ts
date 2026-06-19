import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',     // 24px mobile
        md: '2.5rem',          // 40px tablet
        lg: '4rem',            // 64px desktop
        xl: '5rem',            // 80px wide
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',       // Cap at 1400px (not full screen)
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // ═══ BACKGROUND NEUTRALS — Premium soft tones ═══
        bg: {
          soft:  "#FAFAFA",  // Main body sections (replaces pure white)
          tint:  "#F4F7FA",  // Alternate sections (cool slate)
          steel: "#F0F4F8",  // Subtle card/tag backgrounds
          pure:  "#FFFFFF",  // Cards floating on tinted backgrounds
        },

        // ═══ TEXT COLORS — Deep slate hierarchy ═══
        ink: {
          DEFAULT: "#0F172A", // Headlines (slate black, not pure black)
          dark:    "#1E293B", // Sub-headlines
          mid:     "#475569", // Body text (comfortable reading)
          soft:    "#64748B", // Captions, metadata
          mute:    "#94A3B8", // Placeholders, disabled
        },

        // ═══ SLATE PALETTE (cool-toned override) ═══
        slate: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },

        // Refined neutral palette (warmer than default)
        neutral: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
          950: "#0C0A09",
        },

        // ═══ SKT BRAND — Strategic use (60-30-10 rule) ═══
        skt: {
          blue: "#1E6F9F",
          "blue-deep": "#145A85",
          "blue-light": "#4A96C2",
          "blue-tint": "#E0F2FE",
          "blue-50": "#E0F2FE",
          "blue-100": "#BAE6FD",
          red: "#E63027",
          "red-deep": "#B81F18",
          "red-tint": "#FEE2E2",
          navy: "#0F1729",
          slate: "#0F172A",
        },

        // ═══ ACCENT TINTS — Subtle depth ═══
        "sky-tint":    "#E0F2FE",
        "powder-blue": "#DBEAFE",
        "soft-red":    "#FEE2E2",
        "soft-amber":  "#FEF3C7",
      },
      fontSize: {
        // Refined editorial type scale
        "2xs": ["10px", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        "xs": ["12px", { lineHeight: "1.5", letterSpacing: "0" }],
        "sm": ["13px", { lineHeight: "1.6", letterSpacing: "0" }],
        "base": ["15px", { lineHeight: "1.65", letterSpacing: "0" }],
        "lg": ["17px", { lineHeight: "1.6", letterSpacing: "-0.005em" }],
        "xl": ["19px", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["22px", { lineHeight: "1.4", letterSpacing: "-0.015em" }],
        "3xl": ["28px", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "4xl": ["36px", { lineHeight: "1.2", letterSpacing: "-0.025em" }],
        "5xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "6xl": ["60px", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
        "7xl": ["72px", { lineHeight: "1", letterSpacing: "-0.04em" }],

        // Forwards compatibility clamps
        "display-2xl": [
          "clamp(3rem, 8vw, 8rem)",
          { lineHeight: "0.9", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(2.5rem, 6vw, 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2rem, 4.5vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.5rem, 3vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.025em",
        snug: "-0.015em",
        normal: "0",
        wide: "0.015em",
        wider: "0.05em",
        widest: "0.1em",
        "2xl": "0.18em",
        "3xl": "0.25em",
      },
      lineHeight: {
        none: "1",
        tight: "1.1",
        snug: "1.2",
        compact: "1.3",
        normal: "1.5",
        relaxed: "1.65",
        loose: "1.8",
      },
      spacing: {
        "section": "clamp(5rem, 10vw, 12rem)",
        "container": "clamp(1rem, 5vw, 6rem)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "slide-in-right": "slideInRight 0.6s ease forwards",
        "scale-in": "scaleIn 0.4s ease forwards",
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in": "cubic-bezier(0.7, 0, 0.84, 0)",
        "circ-out": "cubic-bezier(0, 0.55, 0.45, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
        "dot-pattern":
          "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
        "noise": "url('/noise.png')",
        // Premium gradients
        "gradient-radial": "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "gradient-hero":   "linear-gradient(180deg, #FAFAFA 0%, #F4F7FA 100%)",
        "gradient-cool":   "linear-gradient(135deg, #F4F7FA 0%, #E0F2FE 100%)",
        "gradient-dark":   "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
      },
      backgroundSize: {
        "grid": "60px 60px",
        "dot": "24px 24px",
      },
      // ═══ PREMIUM SOFT SHADOWS ═══
      boxShadow: {
        "soft":   "0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.06)",
        "card":   "0 4px 12px rgba(15, 23, 42, 0.06), 0 2px 4px rgba(15, 23, 42, 0.04)",
        "lift":   "0 10px 30px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.05)",
        "float":  "0 20px 50px rgba(15, 23, 42, 0.12), 0 8px 20px rgba(15, 23, 42, 0.06)",
        "brand":  "0 10px 30px rgba(30, 111, 159, 0.20)",
        "danger": "0 10px 30px rgba(230, 48, 39, 0.20)",
      },
    },
  },
  plugins: [],
};

export default config;
