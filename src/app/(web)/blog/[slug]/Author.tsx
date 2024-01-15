import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import 'dayjs/locale/sk'
import { PostType } from '~/types/PostType'
dayjs.locale('sk')

export const BlogPostAuthor = ({ post }: { post: PostType }) => {
  return (
    <div className="flex flex-row items-center gap-4">
      {/* <div className="h-16 w-16 overflow-clip rounded-full bg-brand opacity-90 filter">
        <div className="aspect-h-1 aspect-w-1 relative overflow-hidden bg-brand">
          <Image
            alt={post.author?.image?.alt || 'Placeholder image'}
            src={post.author?.image?.url || 'https://bit.ly/placeholder-img'}
            fill
            className="object-cover object-center duration-700 ease-in-out group-hover:opacity-75"
          />
        </div>
      </div> */}
      <div className="flex flex-col text-left">
        <span className="text-lg font-medium text-white">{post.author?.name}</span>
        <div className="text-sm text-neutral-200">{dayjs(post.publishedAt).format('DD. MMMM YYYY')}</div>
      </div>
    </div>
  )
}
