'use client'

import { posts } from '@/lib/constants'
import { Faker, ko } from '@faker-js/faker'
import { Image, Select, SelectItem } from '@heroui/react'
import dayjs from 'dayjs'
import { PlusIcon } from 'lucide-react'
import NextImage from 'next/image'
import Link from 'next/link'
import { useQueryState } from 'nuqs'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className='flex-1 sm:px-4 pt-10 md:pt-20 space-y-6'>
      <Suspense>
        <Articles />
      </Suspense>
    </div>
  )
}

const faker = new Faker({
  locale: [ko],
})

const categories = ['모든 글', '별', '우주', '그리고 사람']

const Articles = () => {
  const [category, setCategory] = useQueryState('category')

  const postsWithUser = posts.map((post) => ({
    ...post,
    author: {
      author_profile_image: faker.image.avatar(),
      author_name: faker.person.fullName(),
    },
  }))

  const postsFilteredWithCategory =
    category && category !== '모든 글'
      ? postsWithUser.filter((post) => post.category === category)
      : postsWithUser

  return (
    <>
      <div className='px-4 sm:px-0'>
        <Select
          aria-label='카테고리를 선택해주세요'
          className='max-w-36'
          selectedKeys={[category || '모든 글']}
          variant='faded'
          onChange={(e) => {
            if (e.target.value) setCategory(e.target.value)
          }}
        >
          {categories.map((c) => (
            <SelectItem key={c}>{c}</SelectItem>
          ))}
        </Select>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-default-800/7 border-t border-default-800/7 sm:divide-x border-l'>
        {postsFilteredWithCategory.map((post, index) => (
          <Link
            key={post.id}
            className='px-4 sm:px-6 py-6 space-y-3 last:border-r last:border-b last:border-default-800/7 hover:bg-default-700/5 flex flex-col relative'
            href={`/posts/${post.id}`}
          >
            {index === 0 && (
              <PlusIcon className='stroke-1 size-8 absolute -left-[16px] -top-[16px] stroke-default-700/30' />
            )}
            {index === postsFilteredWithCategory.length - 1 && (
              <PlusIcon className='stroke-1 size-8 absolute -bottom-[28px] -right-[16px] stroke-default-700/30' />
            )}

            <div className='flex justify-between'>
              {post.thumbnail_image ? (
                <NextImage
                  alt='thumbnail'
                  className='aspect-square size-full object-cover rounded-lg w-16 md:w-20'
                  height={100}
                  src={post.thumbnail_image}
                  width={100}
                />
              ) : (
                <div className='size-20' />
              )}

              <p className='text-xs text-default-400'>
                {dayjs(post.created_at).format('YYYY년 M월 D일')}
              </p>
            </div>

            <div className='space-y-4'>
              <div className='space-y-2 flex-1 w-full'>
                <p className='text-base sm:text-xl font-semibold truncate w-full'>{post.title}</p>
                <p className='text-xs sm:text-sm truncate break-words whitespace-normal line-clamp-2 text-default-400'>
                  {post.content}
                </p>
              </div>
              <div className='flex gap-2 shrink-0 items-center'>
                <Image
                  height={20}
                  radius='full'
                  src={post.author.author_profile_image}
                  width={20}
                />
                <p className='text-xs space-y-0.5 text-default-400 font-semibold'>
                  {post.author.author_name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
