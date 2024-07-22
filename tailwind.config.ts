import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dmsans: ["var(--font-dmSans"],
      nunito: ["var(--font-nunito)"],
    },
    colors: {
      "color-transparent": "transparent",
      "color-blue": "#06283D",
      "color-white": "#ffffff",
      "color-gold": "rgba(210, 183, 116, 1)",
    },
    extend: {
      backgroundImage: {
        header: "url('../assets/header-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
export default config;