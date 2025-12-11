import { SpinnerSkeleton } from '@/components/skeletons'
import { getCategoryWithArticles } from '@/lib/apis'
import { formatDate, getImagePublicURL } from '@/lib/utils'
import { cacheTag } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

type Params = PageProps<'/categories/[category_id]'>

export default async function Page({ params }: Params) {
  return (
    <div>
      <Suspense fallback={<SpinnerSkeleton />}>
        <Contents params={params} />
      </Suspense>
    </div>
  )
}

const Contents = async ({ params }: { params: Params['params'] }) => {
  const { category_id } = await params

  return <CachedContents category_id={category_id} />
}

const CachedContents = async ({ category_id }: { category_id: string }) => {
  'use cache'
  cacheTag(`category-${category_id}`)

  const { categoryWithArticles } = await getCategoryWithArticles({ category_id })

  return (
    <div className='flex gap-10 flex-col lg:flex-row'>
      <div className='space-y-4 bg-brand-secondary/30 p-6 rounded-2xl block lg:hidden max-w-120'>
        <div className='flex items-center gap-3'>
          <Image src={categoryWithArticles.image} alt='cosmos' width={48} height={48} />
          <div>
            <p className='text-2xl font-bold'>{categoryWithArticles.title}</p>
            <p className='text-sm font-semibold'>{categoryWithArticles.sub_title}</p>
          </div>
        </div>
        <p className='text-foreground/90 text-sm'>{categoryWithArticles.description}</p>
      </div>

      <div className='flex-1 w-full space-y-4'>
        {categoryWithArticles.article.map((article) => (
          <Link
            href={`/categories/${categoryWithArticles.id}/articles/${article.id}`}
            key={article.id}
            className='flex gap-4 p-6 bg-brand-secondary/40 rounded-xl hover:bg-brand-secondary/60 border border-brand-secondary/80'
          >
            <Image
              src={getImagePublicURL({
                bucketName: 'article_thumbnails',
                imagePath: article.thumbnail_image,
              })}
              alt={`${article.title} 썸네일 이미지`}
              width={128}
              height={96}
              className='w-32 h-24 rounded-lg object-cover'
            />

            <div className='flex flex-col justify-between'>
              <div className='space-y-1'>
                <p className='text-xl font-bold'>{article.title}</p>
                <p className='text-muted-foreground text-sm'>{formatDate(article.created_at)}</p>
              </div>

              <div className='flex items-center gap-2'>
                <Image
                  unoptimized
                  src={article.profile.avatar_url}
                  alt={`${article.profile.user_name} profile image`}
                  width={40}
                  height={40}
                  className='rounded-full size-7 object-cover'
                />
                <p className='text-sm text-muted-foreground'>{article.profile.user_name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='shrink-0 w-100 hidden lg:block space-y-10'>
        <div className='space-y-6 bg-brand-secondary/30 p-8 rounded-2xl'>
          <div className='flex items-center gap-3'>
            <Image src={categoryWithArticles.image} alt='cosmos' width={60} height={60} />
            <div>
              <p className='text-2xl font-bold'>{categoryWithArticles.title}</p>
              <p className='text-sm font-semibold'>{categoryWithArticles.sub_title}</p>
            </div>
          </div>
          <p className='text-foreground/90 text-sm'>{categoryWithArticles.description}</p>
        </div>
      </div>
    </div>
  )
}
