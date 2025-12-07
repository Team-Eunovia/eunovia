import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserDropdownMenu } from './user-dropdown-menu'
import { Suspense } from 'react'
import { Spinner } from './ui/spinner'

export const Header = () => {
  return (
    <header className='px-6 flex items-center justify-between h-16 fixed top-0 w-full bg-brand/80 backdrop-blur-xs max-w-7xl left-1/2 -translate-x-1/2 z-50'>
      <Link href='/' className='hover:opacity-80'>
        <Image src='/logo-text.svg' alt='eunovia logo text' width={80} height={30} />
      </Link>
      <div className='flex items-center gap-4'>
        <div className='space-x-1'>
          <Button variant='neutral-subtle' asChild>
            <Link href='/subscription'>구독</Link>
          </Button>
        </div>
        <Suspense fallback={<Spinner />}>
          <UserDropdownMenu />
        </Suspense>
      </div>
    </header>
  )
}
