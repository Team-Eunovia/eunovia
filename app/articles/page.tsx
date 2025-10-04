'use client'

import { posts } from '@/lib/constants'
import { Faker, ko } from '@faker-js/faker'
import { Image } from '@heroui/react'
import dayjs from 'dayjs'
import NextImage from 'next/image'
import Link from 'next/link'

const faker = new Faker({
  locale: [ko],
})

export default function Page() {
  const postsWithUser = posts.map((post) => ({
    ...post,
    author: {
      author_profile_image: faker.image.avatar(),
      author_name: faker.person.fullName(),
    },
  }))

  return (
    <div className='flex-1 relative'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-default-800/15 md:border-t border-default-800/15 sm:divide-x border-l'>
        {postsWithUser.map((post) => (
          <Link
            key={post.id}
            className='px-4 sm:px-6 py-6 space-y-6 last:border-r last:border-b last:border-default-800/15 hover:bg-default-700/5 flex flex-col'
            href={`/posts/${post.id}`}
          >
            <div className='space-y-4'>
              <div className='space-y-2 flex-1 w-full'>
                <p className='text-2xl font-semibold truncate w-full'>{post.title}</p>
                <p className='text-sm truncate break-words whitespace-normal line-clamp-2 text-default-600'>
                  {post.content}
                </p>
              </div>
            </div>

            <div className='relative h-40'>
              {post.thumbnail_image && (
                <NextImage
                  alt='thumbnail'
                  src={post.thumbnail_image}
                  width={320}
                  height={240}
                  className='absolute inset-0 size-full object-cover rounded-lg'
                />
              )}
              <div className='flex gap-3 shrink-0 text-default-50 absolute p-3 bottom-3 right-3 rounded-lg bg-default-900/20 backdrop-blur-[1px] border border-warning-900/10'>
                <Image height={30} radius='sm' src={post.author.author_profile_image} width={30} />
                <div className='text-xs space-y-0.5'>
                  <p>{post.author.author_name}</p>
                  <p>{dayjs(post.created_at).format('YYYY년 M월 D일')}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
