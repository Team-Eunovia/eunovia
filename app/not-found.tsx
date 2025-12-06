import { ChevronLeftIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center mt-20'>
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <Image unoptimized src='/logo-text.svg' width={100} height={80} alt='logo' />
          </EmptyMedia>
          <EmptyTitle>존재하지 않는 페이지입니다.</EmptyTitle>
          <EmptyDescription className='sr-only'>Not Found Page</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant='outline' asChild>
            <Link href='/'>
              <ChevronLeftIcon />
              <span>돌아가기</span>
            </Link>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
