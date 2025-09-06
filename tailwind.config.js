/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   // ✅ EASY FONT SYSTEM
      //   sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      //   mariposa: ["Mariposa Sans Std", "sans-serif"],
      //   inter: ["Inter", "sans-serif"],
      //   cormorant: ["Cormorant Garamond", "serif"],
      //   display: ["Playfair Display", 'serif'],
        
      //   // ✅ ELEMENT-SPECIFIC (use CSS variables)
      //   heading: ['var(--font-heading)'],
      //   body: ['var(--font-body)'],
      //   button: ['var(--font-button)'],
      //   nav: ['var(--font-nav)'],
      // },
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