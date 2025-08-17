import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    author: z.string().default('Iron Foundry Team'),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    lang: z.enum(['en', 'fr', 'pt']).default('en'),
  }),
});

const releases = defineCollection({
  type: 'content',
  schema: z.object({
    version: z.string(),
    releaseDate: z.date(),
    type: z.enum(['major', 'minor', 'patch', 'hotfix']),
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    breaking: z.boolean().default(false),
    lang: z.enum(['en', 'fr', 'pt']).default('en'),
  }),
});

export const collections = {
  blog,
  releases,
};