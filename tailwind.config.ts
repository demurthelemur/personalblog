import { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // Import the plugin

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(27, 169, 41, <alpha-value>)", // Primary Color: 1BA929
        secondary: "rgb(18, 121, 28, <alpha-value>)", // Secondary Color: 12791C
        third: "rgb(30, 63, 30, <alpha-value>)", // Third Color: 1E3F1E
        customBlack: "rgb(27, 32, 28, <alpha-value>)", // Custom Black: 1B201C
      },
    },
  },
  plugins: [tailwindcssAnimate], // Use the imported plugin
};

export default config;
