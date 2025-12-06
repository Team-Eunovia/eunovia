import { SpinnerSkeleton } from '@/components/skeletons'
import { createClient } from '@/lib/supabase/server'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export default async function Page({ params }: PageProps<'/categories/[category_id]'>) {
  return (
    <div>
      <Suspense fallback={<SpinnerSkeleton />}>
        <Contents params={params} />
      </Suspense>
    </div>
  )
}

const Contents = async ({
  params,
}: {
  params: PageProps<'/categories/[category_id]'>['params']
}) => {
  const { category_id } = await params
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('category')
    .select(`*, article(*, profile(*))`)
    .eq('id', Number(category_id))
    .single()

  if (error) notFound()

  return (
    <div className='flex gap-10 flex-col lg:flex-row'>
      <div className='space-y-4 bg-brand-secondary/30 p-6 rounded-2xl block lg:hidden max-w-120'>
        <div className='flex items-center gap-3'>
          <Image src={data.image} alt='cosmos' width={48} height={48} />
          <div>
            <p className='text-2xl font-bold'>{data.title}</p>
            <p className='text-sm font-semibold'>{data.sub_title}</p>
          </div>
        </div>
        <p className='text-foreground/90 text-sm'>{data.description}</p>
      </div>

      <div className='flex-1 w-full space-y-4'>
        {data.article.map((article) => (
          <Link
            href={`/categories/${data.id}/articles/${article.id}`}
            key={article.id}
            className='flex gap-4 p-6 bg-brand-secondary/40 rounded-xl hover:bg-brand-secondary/60 border border-brand-secondary/80'
          >
            <Image
              src={
                supabase.storage.from('article_thumbnails').getPublicUrl(article.thumbnail_image)
                  .data.publicUrl
              }
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
            <Image src={data.image} alt='cosmos' width={60} height={60} />
            <div>
              <p className='text-2xl font-bold'>{data.title}</p>
              <p className='text-sm font-semibold'>{data.sub_title}</p>
            </div>
          </div>
          <p className='text-foreground/90 text-sm'>{data.description}</p>
        </div>
      </div>
    </div>
  )
}
