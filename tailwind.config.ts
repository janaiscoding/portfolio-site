import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins-300)"],
        overpass: [`var(--font-overpass-400)`],
        poppins: [`var(--font-poppins-400)`],
        overpass600: [`var(--font-overpass-600)`],
        poppins500: [`var(--font-poppins-500)`],
        poppins300: [`var(--font-poppins-300)`],
      },
      colors: {
        brightblue: "#66cae5",
        blue: "#18728b",
        grey: "#586565",
        white: "#F0F0E8",
        black: "#222326",
        orange: "#ED7372",
        red: "#7e1010",
        darkBg: "#111111",
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
  },
  plugins: [],
};

export default config;
