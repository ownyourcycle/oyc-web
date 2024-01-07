import { getPostsByDate } from '~/sanity/wrappers/posts'
import Posts from './Posts'

export default async function Blog() {
  const posts = await getPostsByDate()

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-xl">Blog</h1>
      <div className="">
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Blog | Own Your Cycle',
  description: 'Menštruačný cyklus je zrkadlom nášho zdravia',
}
