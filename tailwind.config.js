/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
        },
        purple: {
          300: "#A78BFA",
          500: "#8B5CF6",
        },
        pink: {
          300: "#F9A8D4",
          400: "#F472B6",
        },
        zinc: {
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
        },
      },
    },
  },
  plugins: [],
};