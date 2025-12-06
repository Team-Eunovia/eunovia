import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import TanstackQueryProvider from '@/components/tanstack-query-provider'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '유노비아',
  description:
    '사유의 외부화 시대에서 생각이 사라지는 시대, 글은 다시 사유를 불러옵니다. AI가 완벽을 만들 때, 인간은 불완전함으로 영감을 나눕니다. - 유노비아',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' className='overscroll-none'>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'font-sans text-foreground/90 bg-brand',
        )}
      >
        <TanstackQueryProvider>
          <div className='h-screen'>
            <Header />
            <main className='px-5 py-32 min-h-screen max-w-7xl mx-auto'>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
