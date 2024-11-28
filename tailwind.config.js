const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // all directories and extensions will correspond to your Nuxt config
    "src/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "src/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "src/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "src/plugins/**/*.{js,ts,mjs}",
    "src/composables/**/*.{js,ts,mjs}",
    "src/utils/**/*.{js,ts,mjs}",
    "src/App.{vue,js,jsx,mjs,ts,tsx}",
    "src/Error.{vue,js,jsx,mjs,ts,tsx}",
    "src/app.config.{js,ts,mjs}",
    "src/app/spa-loading-template.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Exo2", "sans-serif"],
      logo: ["Sour Gummy", "sans-serif"],
      heading: ["Sour Gummy", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-primeui")],
};
