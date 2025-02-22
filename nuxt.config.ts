import {tinyCommerceTheme} from "./assets/theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  {
    compatibilityDate: "2024-04-03",
    devtools:          {
      enabled: true,
    },
    content:           {
      preview: {
        api: "https://trytinycommerce.com/",
      },
    },
    modules:           [
      "@nuxt/content",
      "@nuxt/fonts",
      "@nuxt/image",
      "@nuxtjs/tailwindcss",
      "@primevue/nuxt-module",
      "@nuxthub/core",
    ],
    primevue:          {
      options: {
        theme: {
          preset:  tinyCommerceTheme,
          options: {
            darkModeSelector: "light",
          },
        },
      },
    },
  });
