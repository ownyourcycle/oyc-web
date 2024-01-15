import { getPostsByDate } from '~/sanity/wrappers/posts'
import Posts from './Posts'

export default async function Blog() {
  const posts = await getPostsByDate()

  // 1 clanok
  // 2-4 clanky
  // 5+ clankov
  const title =
    posts.length === 1 ? '1 článok' : posts.length < 5 ? `${posts.length} články` : `${posts.length} článkov`

  return (
    <div className="container mx-auto px-8">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="py-8">
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
