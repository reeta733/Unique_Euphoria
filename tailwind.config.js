/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        mariposa: ["Mariposa Sans Std", "sans-serif"],
        mariposaAlt: ["Mariposa Sans", "sans-serif"],
        mariposaClassic: ["Mariposa", "sans-serif"],
        display: ['var(--font-display)', 'serif'],
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      }
      , spacing: {
        8: "2rem",  // enables `px-8`
      },
      screens: {
        sm: "640px", // enables `sm:`
      },
      
    },
  },
  plugins: [],
};