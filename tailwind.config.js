/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      overpass: ["Overpass-Regular", "sans-serif"],
      overpass600: ["Overpass-Semibold", "sans-serif"],
      poppins300: ["Poppins-Light", "sans-serif"],
      poppins500: ["Poppins-Medium", "sans-serif"],
      merienda: ["Merienda-One", "serif"],
    },
    colors: {
      blue: "#18728b",
      grey: "#586565",
      white: "#F8F7F7",
      black: "#030408",
      orange: "#ED7372",
      red: "#7e1010",
      softgrey: '#58656570',
      softblack: '#222326'
    },
    boxShadow: {
      md: "4px 4px 17px -1px rgba(45 138 164 / 0.15)",
    },
    dropShadow: {
      xl: "0px 4px 10px rgba(45 138 164 / 0.5) ",
    },
  },
  plugins: [],
};
