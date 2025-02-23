import {defineCollection, defineContentConfig, z} from "@nuxt/content";

export default defineContentConfig(
  {
    collections: {
      benefits: defineCollection(
        {
          source: "benefits/*.yml",
          type: "data",
          schema: z.object(
            {
              icon: z.string(),
              name: z.string(),
              description: z.string(),
            }),
        },
      ),
      cta: defineCollection(
        {
          source: "cta/*.md",
          type: "page",
        },
      ),
      faq: defineCollection(
        {
          source: "faq/*.yml",
          type: "data",
          schema: z.object(
            {
              question: z.string(),
              answer: z.string(),
            }),
        },
      ),
      features: defineCollection(
        {
          source: "features/*.yml",
          type: "data",
          schema: z.object(
            {
              icon: z.string(),
              name: z.string(),
              description: z.string(),
            }),
        },
      ),
      pages: defineCollection(
        {
          source: "pages/*.md",
          type: "page",
        },
      ),
      posts: defineCollection(
        {
          source: "posts/*.md",
          type: "page",
        },
      ),
    },
  },
);
