import {defineCollection, defineContentConfig} from "@nuxt/content";

export default defineContentConfig(
  {
    collections: {
      blog: defineCollection(
        {
          type:   "page",
          source: "content/blog/*.md",
        },
      ),
    },
  },
);
