import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom purple palette based on the provided image
        purple: {
          50: "#faf7ff",
          100: "#f3edff",
          200: "#e9ddff",
          300: "#d4c4e8",
          400: "#b794d1",
          500: "#9b6bb8",
          600: "#8b5a96",
          700: "#7a4a7a",
          800: "#663d64",
          900: "#553354",
          950: "#371d36",
        },
        violet: {
          50: "#fdf7ff",
          100: "#f9edff",
          200: "#f4ddff",
          300: "#e9c4ff",
          400: "#d794ff",
          500: "#c56bff",
          600: "#b45aff",
          700: "#a04aed",
          800: "#863dc8",
          900: "#7033a3",
          950: "#4d1d70",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      backdropBlur: {
        xs: "2px",
        "4xl": "72px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(139, 90, 150, 0.1)",
        "glass-dark": "0 8px 32px 0 rgba(139, 90, 150, 0.2)",
        neomorphic:
          "20px 20px 60px rgba(139, 90, 150, 0.1), -20px -20px 60px rgba(255, 255, 255, 0.8), inset 0 0 0 1px rgba(139, 90, 150, 0.1)",
        "neomorphic-dark":
          "20px 20px 60px rgba(0, 0, 0, 0.3), -20px -20px 60px rgba(139, 90, 150, 0.05), inset 0 0 0 1px rgba(139, 90, 150, 0.2)",
        "3xl": "0 35px 60px -12px rgba(0, 0, 0, 0.25)",
        "4xl": "0 45px 80px -15px rgba(139, 90, 150, 0.3)",
        "purple-glow": "0 0 20px rgba(139, 90, 150, 0.3)",
        "purple-glow-lg": "0 0 40px rgba(139, 90, 150, 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "purple-gradient": "linear-gradient(135deg, rgba(139, 90, 150, 0.1) 0%, rgba(212, 196, 232, 0.1) 100%)",
        shimmer: "linear-gradient(90deg, transparent, rgba(139, 90, 150, 0.1), transparent)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      letterSpacing: {
        tighter: "-0.05em",
        wider: "0.05em",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "12": "3rem",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
      scale: {
        "102": "1.02",
        "103": "1.03",
        "98": "0.98",
        "97": "0.97",
      },
    },
  },
  plugins: [],
}

export default config
