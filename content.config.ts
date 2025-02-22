import {defineCollection, defineContentConfig, z} from "@nuxt/content";

export default defineContentConfig(
  {
    collections: {
      blog:     defineCollection(
        {
          source: "content/blog/*.md",
          type:   "page",
        },
      ),
      features: defineCollection(
        {
          source: "content/features/*.yml",
          type:   "data",
          schema: z.object(
            {
              icon:        z.string(),
              name:        z.string(),
              description: z.string(),
            }),
        },
      ),
    },
  },
);
