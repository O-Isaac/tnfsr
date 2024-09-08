import { defineCollection, z } from "astro:content"

const posts = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        instagram: z.string(),
        image: z.string(),
        category: z.string()
    })
})

const categories = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string().optional()
    })
})

export const collections = { posts, categories }