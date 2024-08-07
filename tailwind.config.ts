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
      "color-red": "#ff6b6b",
      "color-border": "rgba(0, 0, 0, .3)",
      "color-black": "rgba(0, 0, 0, 1)",
    },
    extend: {
      backgroundImage: {
        header: "url('../assets/header-bg.jpeg')",
        footer: "url('../assets/footer-bg.jpeg')",
        about: "url('../assets/about.jpeg')",
        referral: "url('../assets/referral.jpeg')",
        "main-1": "url('../assets/plan-bg1.jpeg')",
      },
      gridTemplateColumns: {
        "plan-grid": "repeat(auto-fit, minmax(30rem, 1fr))",
        "why-us-grid": "repeat(auto-fit, minmax(30rem, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
