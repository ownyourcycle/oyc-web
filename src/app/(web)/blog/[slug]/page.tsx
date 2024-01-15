import { cachedClient } from '~/sanity/lib/client'
import { postPathsQuery } from '~/sanity/queries/posts'
import { getPost } from '~/sanity/wrappers/posts'
import Post from './Post'

export async function generateStaticParams() {
  const posts = await cachedClient(postPathsQuery)
  return posts
}

export default async function Page({ params }: { params: any }) {
  const post = await getPost(params.slug)
  return <Post post={post} />
}

export const dynamic = 'force-dynamic'
