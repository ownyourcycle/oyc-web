import { PostSchema, PostType } from '~/types/PostType'
import { cachedClient } from '../lib/client'
import { postQuery, postsByDateQuery, postsQuery } from '../queries/posts'
import { getImage } from './images'

export const getPosts = async (): Promise<PostType[]> => {
  const response = await cachedClient(postsQuery)

  return response.map((post: any) => {
    return PostSchema.parse({
      ...post,
      author: null,
      slug: post.slug?.current,
      mainImage: getImage(post.mainImage),
    })
  })
}

export const getPostsByDate = async (): Promise<PostType[]> => {
  const response = await cachedClient(postsByDateQuery)

  return response.map((post: any) => {
    return PostSchema.parse({
      ...post,
      author: null,
      slug: post.slug?.current,
      mainImage: getImage(post.mainImage),
    })
  })
}

export const getPost = async (slug: string): Promise<PostType> => {
  const response = await cachedClient(postQuery, { slug })

  return PostSchema.parse({
    ...response,
    author: null,
    slug: response.slug.current,
    mainImage: getImage(response.mainImage),
  })
}
