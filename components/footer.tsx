import Image from 'next/image'
import Link from 'next/link'

const links = [
  { text: 'FAQ', href: '/support/faq' },
  { text: '서비스 이용약관', href: '/policy/service' },
  { text: '개인정보 처리 방침', href: '/policy/privacy' },
  // { text: '유료 서비스 이벤트•혜택 정보 활용 및 수신', href: '/policy/marketing' },
  { text: '광고 문의', href: '/advertisement' },
  // { text: '채용', href: '/employment' },
  { text: '채널톡 문의', href: '/talk' },
  { text: '서비스 소개', href: '/introduction' },
]

export const Footer = () => {
  return (
    <footer className='bg-[#141414] w-full md:max-w-7xl mx-auto md:rounded-t-xl p-4 md:p-10 space-y-4'>
      <div className='flex items-center gap-2'>
        <Image
          unoptimized
          src='/favicon/apple-touch-icon.png'
          width={80}
          height={80}
          alt='logo'
          className='size-8 bg-white p-1 rounded-lg'
        />
        <h1 className='text-white font-black text-lg'>Eunovia</h1>
      </div>

      <div className='flex flex-col gap-2'>
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className='font-bold text-primary-foreground/80 dark:text-primary/80 text-base md:text-xl'
          >
            {link.text}
          </Link>
        ))}
      </div>

      <div className='text-xs text-muted-foreground leading-5'>
        <p>(주)유노비아 | 대표자: 김봉민 | 사업자번호: 123-45-67899 사업자 정보 확인</p>
        <p>
          통신판매업: 2025-신림0B-1234 | 개인정보보호책임자: 한봉훈 | 이메일: jws970306@eunovia.com
        </p>
        <p>전화번호: 070-0000-0000 | 주소:경기도 성남시 분당구 판교로 123길, 000호</p>
      </div>
    </footer>
  )
}
