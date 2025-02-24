import {defineCollection, defineContentConfig, z} from "@nuxt/content";

export default defineContentConfig(
  {
    collections: {
      addOns: defineCollection(
        {
          source: "add-ons/*.yml",
          type: "data",
          schema: z.object(
            {
              name: z.string(),
              description: z.string(),
              price: z.string(),
              additionalPricing: z.string().optional(),
            }),
        },
      ),
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
      highlights: defineCollection(
        {
          source: "highlights/*.yml",
          type: "data",
          schema: z.object(
            {
              eyebrow: z.string(),
              heading: z.string(),
              description: z.string(),
              image: z.string(),
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
          schema: z.object(
            {
              isPublished: z.boolean(),
              date: z.string(),
            }),
        },
      ),
    },
  },
);
