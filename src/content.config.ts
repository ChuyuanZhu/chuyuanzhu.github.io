import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    section: z.enum(['technical', 'creative']),
    category: z.string(),

    year: z.number(),

    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),

    featured: z.boolean().default(false),
    order: z.number().optional(),

    github: z.string().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = { projects };
