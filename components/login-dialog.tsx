import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import { OAuthLoginButton } from './oauth-login-button'

export const LoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='blue'>로그인</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>
            <Image src='/logo-text.svg' alt='eunovia logo text' width={80} height={30} />
          </DialogTitle>
          <DialogDescription className='sr-only'>
            사유의 외부화 시대에서 생각이 사라지는 시대, 글은 다시 사유를 불러옵니다. AI가 완벽을
            만들 때, 인간은 불완전함으로 영감을 나눕니다. - 유노비아
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4'>
          <div className='flex items-center justify-center'>
            <Image
              unoptimized
              src='/favicon/apple-touch-icon.png'
              width={80}
              height={80}
              alt='logo'
              className='size-11 bg-white/90 p-1.5 rounded-lg'
            />
            <p className='text-xl font-semibold'>유노비아 로그인</p>
          </div>

          <OAuthLoginButton />
        </div>
      </DialogContent>
    </Dialog>
  )
}
