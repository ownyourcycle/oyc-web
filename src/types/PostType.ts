import { z } from 'zod'
import { ImageSchema } from './ImageType'
import { PortableTextBlock } from 'sanity'
import { AuthorSchema } from './AuthorType'

export const PostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  author: AuthorSchema.nullable(),
  mainImage: ImageSchema.nullable(),
  categories: z.array(z.any()).nullable(),
  publishedAt: z.string().nullable(),
  body: z.any(),
})

export type PostType = z.infer<typeof PostSchema> & {
  body?: PortableTextBlock[]
}
