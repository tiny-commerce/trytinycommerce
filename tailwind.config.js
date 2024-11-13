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
    colors: {
      transparent: "transparent",
      current: "currentColor",

      indigo: colors.indigo,

      black: colors.black,
      white: colors.white,
      gray: colors.slate,

      blue: colors.sky,
      red: colors.red,
      green: colors.emerald,
      yellow: colors.amber,

      orange: colors.orange,
      primary: {
        DEFAULT: colors.orange[700],
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-primeui")],
};
