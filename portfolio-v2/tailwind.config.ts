import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins-300)"],
        overpass: [`var(--font-overpass-400)`],
        overpass600: [`var(--font-overpass-600)`],
        poppins500: [`var(--font-poppins-500)`],
        poppins300: [`var(--font-poppins-300)`],
      },
      colors: {
        blue: "#18728b",
        grey: "#586565",
        purewhite: "#f9fbfd",
        white: "#F8F7F7",
        black: "#030408",
        orange: "#ED7372",
        red: "#7e1010",
        softgrey: "#58656570",
        softblack: "#222326",
        softblue: "#2d8aa498",
        hardblue: "#1f2f3c",
      },
      boxShadow: {
        md: "4px 4px 17px -1px rgba(45 138 164 / 0.10)",
      },
      dropShadow: {
        xl: "0px 4px 10px rgba(45 138 164 / 0.5) ",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0.25rem)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
    colors: {
      blue: "#18728b",
      grey: "#586565",
      white: "#F8F7F7",
      black: "#030408",
      orange: "#ED7372",
      red: "#7e1010",
      softgrey: "#58656570",
      softblack: "#222326",
      softblue: "#2d8aa498",
      hardblue: "#1f2f3c",
    },
    // boxShadow: {
    //   md: "4px 4px 17px -1px rgba(45 138 164 / 0.05)",
    // },
    // dropShadow: {
    //   xl: "0px 4px 10px rgba(45 138 164 / 0.5) ",
    // },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "translateX(0.25rem)" },
        "50%": { transform: "translateX(0)" },
      },
    },
    animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
export default config;
