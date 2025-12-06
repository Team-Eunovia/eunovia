import { getProfile } from '@/lib/apis'
import Image from 'next/image'
import { CommentForm } from './comment-form'
import { Tables } from '@/lib/supabase/database.types'

export const UserProfileWithCommentForm = async ({ article }: { article: Tables<'article'> }) => {
  const profile = await getProfile()

  return (
    <div className='space-y-4'>
      {profile && (
        <div className='flex items-center gap-2'>
          <Image
            unoptimized
            src={profile.avatar_url}
            alt='profile'
            width={42}
            height={42}
            className='object-cover rounded-full'
          />
          <p className='text-lg'>{profile.user_name}</p>
        </div>
      )}

      <CommentForm profile={profile} article={article} />
    </div>
  )
}
