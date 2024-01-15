import { PostType } from '~/types/PostType'
import { getPosts } from '~/sanity/wrappers/posts'
import { BlogPostLink } from './PostLink'

export const OtherBlogPosts = async ({ post }: { post: PostType }) => {
  const posts = await getPosts()

  const withoutCurrent = posts.filter((p) => p.slug !== post.slug)
  const randomized = withoutCurrent.sort(() => Math.random() - 0.5)
  const onlyThree = randomized.slice(0, 3)

  return (
    <div className="grid grid-cols-1 gap-4">
      {onlyThree.map((post) => (
        <BlogPostLink key={post.slug} post={post} />
      ))}
    </div>
  )
}
