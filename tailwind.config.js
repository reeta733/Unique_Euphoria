/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        playfair: ["Playfair Display", "serif"],
        mariposa: ["Mariposa Sans Std", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      spacing: {
        8: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px", 
        lg: "1024px",
      },
      opacity: {
        90: "0.9",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};