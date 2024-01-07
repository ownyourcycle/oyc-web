import Link from 'next/link'

import Image from 'next/image'
import { PostType } from '~/types/PostType'
import { PortableText } from '@portabletext/react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/sk'

dayjs.extend(relativeTime)
dayjs.locale('sk')

export default function Posts({ posts = [] }: { posts: PostType[] }) {
  // const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
      {/* <h1 className="text-2xl p-4 font-bold">{title}</h1> */}
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className="border shadow-sm rounded-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="w-full relative aspect-w-2 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-2 xl:aspect-h-1">
              {/* <Image
                alt={post.mainImage?.alt || 'Placeholder image'}
                src={post.mainImage?.url || 'https://bit.ly/placeholder-img'}
                className="object-cover object-center"
                fill
              /> */}
            </div>
            <div className="p-4 flex flex-col gap-2">
              <div className="text-xs text-neutral-500">
                {dayjs().to(dayjs(post.publishedAt))}
                {', '}
                {dayjs(post.publishedAt).format('D. MMM YYYY')}
              </div>
              <div>
                <h2 className="text-sm line-clamp-1 font-bold leading-tight text-neutral-900" title={post.title}>
                  {post.title}
                </h2>
              </div>

              <div
                className="line-clamp-3 text-xs overflow-ellipsis text-neutral-500"
                style={{
                  height: '3rem',
                }}
              >
                {post.body ? <PortableText value={post.body[0]} /> : null}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}
