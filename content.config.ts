import {defineCollection, defineContentConfig, z} from "@nuxt/content";

export default defineContentConfig(
  {
    collections: {
      blog:     defineCollection(
        {
          source: "blog/*.md",
          type:   "page",
          schema: z.object(
            {
              isPublished: z.boolean(),
              title:       z.string(),
              description: z.string(),
              writtenOn:   z.date(),
            }),
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
