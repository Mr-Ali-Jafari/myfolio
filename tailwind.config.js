/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        slate: {
          950: "#0f172a",
          900: "#1e293b",
          800: "#334155",
          700: "#475569",
          600: "#64748b",
          500: "#94a3b8",
          400: "#cbd5e1",
          300: "#e2e8f0",
          200: "#f1f5f9",
        },
        glass: "rgba(15,23,42,0.6)",
        accent: {
          primary: "#64748b",
          secondary: "#94a3b8",
          light: "#cbd5e1",
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ["'Inter'", "'Roboto'", "'Noto Sans JP'", "sans-serif"],
        japanese: ["'Noto Sans JP'", "sans-serif"],
        english: ["'Inter'", "'Roboto'", "sans-serif"],
      },
      boxShadow: {
        glass: "0 4px 16px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
}

