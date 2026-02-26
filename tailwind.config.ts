import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#f7f8f0",
          100: "#eef0e0",
          200: "#d5d9b3",
          300: "#b8be7e",
          400: "#9ba34f",
          500: "#808A2A",
          600: "#6B7422",
          700: "#556019",
          800: "#3e4712",
          900: "#2a300c",
        },
        terracotta: {
          50: "#fdf5ef",
          100: "#fbe8d9",
          200: "#f5ccaa",
          300: "#eeab76",
          400: "#e08a47",
          500: "#D4782F",
          600: "#C06A28",
          700: "#a05520",
          800: "#7f431a",
          900: "#5f3214",
        },
        cream: {
          50: "#FDFBF7",
          100: "#FAF6EE",
          200: "#F5EFDF",
          300: "#EDE5CC",
          400: "#E0D6B5",
          500: "#D3C79E",
        },
      },
      fontFamily: {
        heading: ["var(--font-dm-sans)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
