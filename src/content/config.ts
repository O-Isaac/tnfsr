import { defineCollection, z } from "astro:content"

const postsCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        instagram: z.string(),
        image: z.string(),
        category: z.string()
    })
})

export const collections = {
    posts: postsCollection
}