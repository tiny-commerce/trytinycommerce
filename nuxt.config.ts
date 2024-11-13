import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "light",
        },
      },
    },
  },
});
