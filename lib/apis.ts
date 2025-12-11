import { cacheTag } from 'next/cache'
import { notFound, redirect } from 'next/navigation'
import { createClientAnonymous } from './supabase/anon'
import { createClient } from './supabase/server'

export const getProfile = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getClaims()

  if (error) redirect('/')
  if (!data?.claims) return null

  const profileResponse = await supabase
    .from('profile')
    .select(`*`)
    .eq('id', data.claims.sub)
    .single()

  if (profileResponse.error) redirect('/')

  return profileResponse.data
}

export const getCategories = async () => {
  'use cache'
  cacheTag('category')

  const supabase = createClientAnonymous()

  const { data: categories, error } = await supabase.from('category').select('*')

  if (error) notFound()

  return { categories }
}

export const getArticle = async ({
  article_id,
  category_id,
}: {
  article_id: string
  category_id: string
}) => {
  'use cache'
  cacheTag('article', article_id, category_id)

  const supabase = await createClientAnonymous()
  const { data: article, error } = await supabase
    .from('article')
    .select(`*, profile(*), category(*), comment(*, profile(*))`)
    .eq('id', article_id)
    .eq('category_id', Number(category_id))
    .single()

  if (error) notFound()

  return { article }
}

export const getCategoryWithArticles = async ({
  category_id,
}: {
  category_id: number | string
}) => {
  'use cache'
  cacheTag('category', String(category_id))

  const supabase = createClientAnonymous()

  const { data: categoryWithArticles, error } = await supabase
    .from('category')
    .select(`*, article(*, profile(*))`)
    .eq('id', Number(category_id))
    .single()

  if (error) notFound()

  return { categoryWithArticles }
}
