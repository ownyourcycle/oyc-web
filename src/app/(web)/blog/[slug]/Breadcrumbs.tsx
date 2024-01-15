'use client'

import { Anchor, Breadcrumbs } from '@mantine/core'
import { PostType } from '~/types/PostType'

export const BlogBreadcrumbs = ({ post }: { post: PostType }) => {
  return (
    <Breadcrumbs>
      <Anchor href="/">Domov</Anchor>
      <Anchor href="/blog">Blog</Anchor>
      <Anchor href={`/blog/${post.slug}`}>{post.title}</Anchor>
    </Breadcrumbs>
  )
}
