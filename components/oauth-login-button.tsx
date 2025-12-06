'use client'

import { GithubIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useLoginWithOAuthMutation } from '@/lib/apis-hook'
import { Spinner } from './ui/spinner'

export const OAuthLoginButton = () => {
  const loginWithOAuthMutation = useLoginWithOAuthMutation()

  return (
    <Button
      disabled={loginWithOAuthMutation.isPending}
      isLoading={loginWithOAuthMutation.isPending}
      onClick={() => loginWithOAuthMutation.mutate({ provider: 'github' })}
      className='w-full'
      size='lg'
      variant='secondary'
    >
      {loginWithOAuthMutation.isPending ? (
        <Spinner />
      ) : (
        <>
          <GithubIcon /> Github
        </>
      )}
    </Button>
  )
}
