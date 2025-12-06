'use server'

import { revalidatePath } from 'next/cache'
import { Database } from './supabase/database.types'
import { createClient } from './supabase/server'

export const loginAction = async ({ provider }: { provider: 'github' }) => {
  const supabase = await createClient()

  await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })
}

export const logoutAction = async () => {
  const supabase = await createClient()
  await supabase.auth.signOut()
}

export const createCommentAction = async (
  values: Database['public']['Tables']['comment']['Insert'],
) => {
  const supabase = await createClient()
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims()
  if (claimsError || !claimsData?.claims) throw new Error('Unauthorized')

  const { error } = await supabase.from('comment').insert(values)

  revalidatePath('/')

  if (error) throw error
}
