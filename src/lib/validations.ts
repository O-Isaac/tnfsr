import { z } from "zod"

export type FormContactErrors = z.infer<typeof FormContact>
export const FormContact = z.object({
    email: z.string().email(),
    subject: z.string().min(3),
    message: z.string().min(10)
})