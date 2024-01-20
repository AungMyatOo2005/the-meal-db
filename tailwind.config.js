/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoSlab: ["Roboto Slab", "sans-serif"],
      },
    },
    screens: {
      xs: "540px",
      ss: "680px",
      sm: "860px",
      md: "1080px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  plugins: [],
};
