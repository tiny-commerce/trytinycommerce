import {defineCollection, defineContentConfig, z} from "@nuxt/content";

export default defineContentConfig(
  {
    collections: {
      blog:     defineCollection(
        {
          source: "content/blog/*.md",
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
          source: "content/features/*.yml",
          type:   "data",
          schema: z.object(
            {
              icon:        z.nativeEnum(IconList),
              name:        z.string(),
              description: z.string(),
            }),
        },
      ),
    },
  },
);
