import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-green": "#10b981",
        "line-black": "#231f20",
        "line-white": "#d4d4d8",
      },

      backgroundColor: {
        "app-bg": "#141414",
      },
    },
    keyframes: {
      show: {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
    },
    animation: {
      animateShow1: "show 1s 0.1s backwards",
      animateShow2: "show 1s 0.2s backwards",
      animateShow3: "show 1s 0.5s backwards",
      animateShow4: "show 1s 0.8s backwards",
    },
  },
  plugins: [],
};
export default config;
