'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from '@heroui/react'

const links = [
  {
    href: '/articles',
    text: '아티클',
  },
  {
    href: '/subscription',
    text: '구독',
  },
]

export const Header = () => {
  return (
    <Navbar disableAnimation shouldHideOnScroll className='bg-brand-background/70' maxWidth='xl'>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand as={Link} className='gap-2' href='/'>
          <Image
            alt='logo image'
            height={28}
            radius='none'
            src='/favicon/android-chrome-192x192.png'
            width={28}
          />
          <Image alt='logo text' height={28} radius='none' src='/logo-text.svg' width={90} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarBrand as={Link} className='gap-2' href='/'>
          <Image
            alt='logo image'
            height={28}
            radius='none'
            src='/favicon/android-chrome-192x192.png'
            width={28}
          />
          <Image alt='logo text' radius='none' src='/logo-text.svg' width={90} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='space-x-8' justify='end'>
        <div className='hidden sm:flex items-center gap-6 '>
          {links.map((link) => (
            <NavbarItem key={link.href}>
              <Link color='foreground' href={link.href}>
                {link.text}
              </Link>
            </NavbarItem>
          ))}
        </div>
        <NavbarItem>
          <Button as={Link} color='warning' href='#' variant='flat'>
            로그인
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='bg-brand-background'>
        {links.map((link) => (
          <NavbarMenuItem key={link.href}>
            <Link className='w-full' color='foreground' href={link.href} size='lg'>
              {link.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
