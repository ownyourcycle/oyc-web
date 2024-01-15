import { getPostsByDate } from '~/sanity/wrappers/posts'
import Posts from './Posts'

export default async function Blog() {
  const posts = await getPostsByDate()

  return (
    <div className="container mx-auto px-8">
      <h1 className="font-bold text-xl">Blog</h1>
      <div className="pt-8">
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Blog | Own Your Cycle',
  description: 'Menštruačný cyklus je zrkadlom nášho zdravia',
}

export const dynamic = 'force-dynamic'
