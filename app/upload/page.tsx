import { SpinnerSkeleton } from '@/components/skeletons'
import { getCategories, getProfile } from '@/lib/apis'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import { UploadArticleForm } from './upload-form'

export default async function Page() {
  return (
    <div>
      <Suspense fallback={<SpinnerSkeleton />}>
        <Contents />
      </Suspense>
    </div>
  )
}

const Contents = async () => {
  const profile = await getProfile()

  if (!profile) redirect('/')

  const categories = await getCategories()

  return (
    <div className='max-w-3xl mx-auto'>
      <UploadArticleForm categories={categories} />
    </div>
  )
}
