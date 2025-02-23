import {defineCollection, defineContentConfig, z} from "@nuxt/content";

export default defineContentConfig(
  {
    collections: {
      pages:     defineCollection(
        {
          source: "pages/*.md",
          type:   "page",
        },
      ),
      blog:     defineCollection(
        {
          source: "blog/*.md",
          type:   "page",
        },
      ),
      features: defineCollection(
        {
          source: "features/*.yml",
          type:   "data",
          schema: z.object(
            {
              icon:        z.enum(["users", "chart-bar", "mobile", "desktop"]),
              name:        z.string(),
              description: z.string(),
            }),
        },
      ),
    },
  },
);
