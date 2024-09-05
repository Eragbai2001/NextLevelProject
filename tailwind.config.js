/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "10p": "7%",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1115px" },
        // => @media (max-width: 1023px) { ... }

        md: { min: "639px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        "custom-bg": "#202D36",
        "customary-bg": "#FAFAFA",
        "customary-lg": "#FFFFFF",
        "Navbar": "#2B3743",
        "customary-text": "#2B3743",
      },
    },
  },
  plugins: [],
};
