import { z } from 'zod'
import { ImageSchema } from './ImageType'
import { PortableTextBlock } from 'sanity'

export const AuthorSchema = z.object({
  name: z.string(),
  slug: z.string(),
  image: ImageSchema.nullable(),
  bio: z.any(),
})

export type AuthorType = z.infer<typeof AuthorSchema> & {
  bio?: PortableTextBlock[]
}
