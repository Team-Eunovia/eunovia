import { notFound } from 'next/navigation'
import { createClient } from './supabase/server'

export const getProfile = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getClaims()

  if (error) throw error
  if (!data?.claims) return null

  const profileResponse = await supabase
    .from('profile')
    .select(`*`)
    .eq('id', data.claims.sub)
    .single()

  if (profileResponse.error) throw error

  return profileResponse.data
}

export const getCategories = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.from('category').select('*')

  if (error) throw error

  return data
}

export const getArticle = async ({
  article_id,
  category_id,
}: {
  article_id: string
  category_id: string
}) => {
  const supabase = await createClient()
  const { data: article, error } = await supabase
    .from('article')
    .select(`*, profile(*), category(*), comment(*, profile(*))`)
    .eq('id', article_id)
    .eq('category_id', Number(category_id))
    .single()

  if (error) notFound()

  return article
}
