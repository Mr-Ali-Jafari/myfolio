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
        navy: "#1e293b",
        slate: {
          950: "#0f172a",
          900: "#1e293b",
        },
        glass: "rgba(30,41,59,0.6)", // glassmorphism base
        pastelBlue: "#a5b4fc",
        pastelPurple: "#c4b5fd",
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ["'Noto Sans JP'", "'Inter'", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
    },
  },
  plugins: [],
}

