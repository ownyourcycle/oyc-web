import { z } from 'zod'

export const ImageSchema = z.object({
  url: z.string().nullable(),
  alt: z.string(),
})

export type ImageType = z.infer<typeof ImageSchema>
