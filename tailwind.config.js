// const colors = require("tailwindcss/colors");

/** @type {import("tailwindcss").Config} */
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
  theme:   {
    fontFamily: {
      sans:        ["Exo2", "sans-serif"],
      handwritten: ["Caveat", "sans-serif"],
    },
    extend:     {
      colors: {
        secondary: {
          DEFAULT: "var(--p-secondary-500)",
          50:      "var(--p-secondary-50)",
          100:     "var(--p-secondary-100)",
          200:     "var(--p-secondary-200)",
          300:     "var(--p-secondary-300)",
          400:     "var(--p-secondary-400)",
          500:     "var(--p-secondary-500)",
          600:     "var(--p-secondary-600)",
          700:     "var(--p-secondary-700)",
          800:     "var(--p-secondary-800)",
          900:     "var(--p-secondary-900)",
          950:     "var(--p-secondary-950)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-primeui")],
};
