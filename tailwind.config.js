/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "10p": "7%",
      },
      width: {
        lw: "40rem",
      },
      screens: {
        "2xl": { min: "1366px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1366px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1115px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "414px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "473px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        "custom-bg": "#202D36",
        "customary-bg": "#FAFAFA",
        "customary-lg": "#FFFFFF",
        Navbar: "#2B3743",
        "customary-text": "#2B3743",
      },
    },
  },
  plugins: [],
};
