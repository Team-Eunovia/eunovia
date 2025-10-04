import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import '@/styles/globals.css'
import { type Metadata, type Viewport } from 'next'
import { type ReactNode } from 'react'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Eunovia',
  description: 'Eunovia (유노비아)',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang='ko'>
      <body className='min-h-screen text-foreground bg-background'>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <Header />
          <main className='min-h-40'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
