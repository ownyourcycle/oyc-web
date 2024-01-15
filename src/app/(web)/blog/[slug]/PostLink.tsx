import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'
import { PostType } from '~/types/PostType'
import { BlogPostAuthor } from './Author'

export const BlogPostLink = ({ post }: { post: PostType }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group rounded-md border bg-white">
        <div className="relative h-64 w-full overflow-clip">
          {post.mainImage?.url ? (
            <Image
              src={post.mainImage.url}
              fill
              alt={post.mainImage.alt}
              className="object-cover object-center transition-all ease-in-out group-hover:brightness-75"
            />
          ) : (
            <div className="absolute flex h-full w-full flex-col items-center justify-center bg-brand p-2">
              <div className="text-center text-3xl font-bold text-white opacity-40">{post.title}</div>
            </div>
          )}
        </div>
        {/* <div>
          <BlogPostLinkAuthor post={post} />
        </div> */}
        <div className="flex flex-col gap-2 px-4 py-4">
          <h2
            className="relative inline-flex items-center text-xl font-bold"
            style={{
              height: '3.5rem',
            }}
          >
            {post.title}
          </h2>
          <div
            className="line-clamp-3 overflow-ellipsis text-neutral-500"
            style={{
              height: '3rem',
            }}
          >
            <PortableText value={post.body[0]} />
          </div>
        </div>
      </div>
    </Link>
  )
}
