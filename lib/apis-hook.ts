import { createClient } from '@/lib/supabase/client'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { createCommentAction, logoutAction } from './actions'
import { ArticleSchema } from './schemas'
import { Database } from './supabase/database.types'

export const useLoginWithOAuthMutation = () => {
  return useMutation<undefined, Error, { provider: 'github' }>({
    mutationFn: async ({ provider }) => {
      const supabase = createClient()

      await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
    },
  })
}

export const useLogoutMutation = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: async () => {
      await logoutAction()
    },
    onSuccess: () => {
      router.push('/')
    },
  })
}

export const useUploadArticleMutation = () => {
  return useMutation<undefined, Error, ArticleSchema & { content: string }>({
    mutationFn: async (values) => {
      const supabase = createClient()
      const { data: claimsData, error: claimsError } = await supabase.auth.getClaims()
      if (claimsError || !claimsData?.claims) throw new Error('Unauthorized')

      const fileResponse = await supabase.storage
        .from(`article_thumbnails`)
        .upload(`${values.thumbnail_image.name}-${Date.now()}`, values.thumbnail_image)

      if (fileResponse.error) throw fileResponse.error

      const { error } = await supabase.from('article').insert({
        title: values.title,
        category_id: Number(values.category_id),
        content: values.content,
        thumbnail_image: fileResponse.data.path,
        author_id: claimsData.claims.sub,
      })

      if (error) throw error
    },
    onError: (error) => {
      toast(error.message)
    },
    onSuccess: () => {
      toast('게시글이 등록되었습니다.')
    },
  })
}

export const useCreateCommentMutation = () => {
  return useMutation<undefined, Error, Database['public']['Tables']['comment']['Insert']>({
    mutationFn: async (values) => {
      await createCommentAction(values)
    },
  })
}
