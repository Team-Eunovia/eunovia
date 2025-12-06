import { Editor } from '@/components/editor'
import { SpinnerSkeleton } from '@/components/skeletons'
import { Button } from '@/components/ui/button'
import { Shimmer } from '@/components/ui/shimmer'
import { getArticle } from '@/lib/apis'
import { createClient } from '@/lib/supabase/server'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { UserProfileWithCommentForm } from './user-profile-with-comment-form'
import { VideoTTS } from './video-tts'

export default async function Page({
  params,
}: PageProps<'/categories/[category_id]/articles/[article_id]'>) {
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
  params: PageProps<'/categories/[category_id]/articles/[article_id]'>['params']
}) => {
  const supabase = await createClient()
  const { category_id, article_id } = await params
  const article = await getArticle({ article_id, category_id })

  return (
    <div className='max-w-3xl mx-auto space-y-12'>
      <Button variant='neutral-subtle' asChild>
        <Link href={`/categories/${article.category_id}`}>
          <ArrowLeftIcon /> 돌아가기
        </Link>
      </Button>

      <div className='flex flex-col items-center gap-6'>
        <div className='flex items-center gap-4'>
          <Image src={article.category.image} alt='category image' width={30} height={30} />
          <p className='text-xl font-bold'>{article.category.title}</p>
        </div>

        <h2 className='text-3xl sm:text-5xl font-bold'>{article.title}</h2>

        <div className='flex items-center gap-4'>
          <p className='text-muted-foreground'>{formatDate(article.created_at)}</p>
          <div className='flex items-center gap-2'>
            <Image
              unoptimized
              src={article.profile.avatar_url}
              alt={`${article.profile.user_name} profile image`}
              width={60}
              height={60}
              className='object-cover rounded-full size-8 sm:size-10'
            />

            <p className='text-lg'>{article.profile.user_name}</p>
          </div>
        </div>
      </div>

      <Shimmer className='aspect-video w-full'>
        <Image
          src={
            supabase.storage.from('article_thumbnails').getPublicUrl(article.thumbnail_image).data
              .publicUrl
          }
          alt={`${article.title} thumbnail image`}
          width={600}
          height={400}
          className='object-cover w-full aspect-video rounded-xl'
        />
      </Shimmer>

      <div className='flex flex-col gap-14'>
        {article.tts && <VideoTTS url={article.tts} />}
        <div className='flex-1'>
          <Editor props={JSON.parse(article.content)} readonly />
        </div>
      </div>

      <div className='space-y-4'>
        <p className='font-semibold'>댓글 {article.comment.length}</p>
        <Suspense>
          <UserProfileWithCommentForm article={article} />
        </Suspense>

        <div className='space-y-4 pt-4'>
          {article.comment.map((comment) => (
            <div key={comment.id} className='space-y-2 bg-brand-secondary/40 p-5 rounded-2xl'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Image
                    unoptimized
                    src={comment.profile.avatar_url}
                    alt='user avatar'
                    width={32}
                    height={32}
                    className='object-cover rounded-full'
                  />
                  <p className='text-sm font-semibold'>{comment.profile.user_name}</p>
                </div>

                <p className='text-sm text-muted-foreground/70'>{formatDate(comment.created_at)}</p>
              </div>

              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
