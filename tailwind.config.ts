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
      fontFamily: {
        // Define custom font families
        p: ["Quicksand", "sans-serif"],
        h1: ["Oswald", "sans-serif"],
        h2: ["Oswald", "sans-serif"],
        h3: ["Oswald", "sans-serif"],
        h4: ["Oswald", "sans-serif"],
        h5: ["Oswald", "sans-serif"],
        h6: ["Oswald", "sans-serif"],
      },
      fontSize: {
        // Define custom font sizes for headers and paragraph
        p: ["26px", { lineHeight: "1.75rem", fontWeight: "400" }],
        h1: ["112.3px", { lineHeight: "1.1", fontWeight: "400" }],
        h2: ["84.2px", { lineHeight: "1.1", fontWeight: "400" }],
        h3: ["63.2px", { lineHeight: "1.1", fontWeight: "400" }],
        h4: ["47.4px", { lineHeight: "1.1", fontWeight: "400" }],
        h5: ["35.5px", { lineHeight: "1.1", fontWeight: "400" }],
        h6: ["26.7px", { lineHeight: "1.1", fontWeight: "400" }],
      },
    },
  },
  plugins: [tailwindcssAnimate], // Use the imported plugin
};

export default config;
