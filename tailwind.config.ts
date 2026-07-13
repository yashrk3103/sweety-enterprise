import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fffaf2",
        cream: "#f8ecd9",
        maroon: "#651931",
        gold: "#d4a64a",
      },
    },
  },
  plugins: [],
};
export default config;
