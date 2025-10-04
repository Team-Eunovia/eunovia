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
  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand className='gap-2' as={Link} href='/'>
          <Image
            radius='none'
            alt='logo image'
            src='/favicon/android-chrome-192x192.png'
            width={28}
            height={28}
          />
          <Image radius='none' alt='logo text' src='/logo-text.svg' width={90} height={28} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarBrand className='gap-2' as={Link} href='/'>
          <Image
            radius='none'
            alt='logo image'
            src='/favicon/android-chrome-192x192.png'
            width={28}
            height={28}
          />
          <Image radius='none' alt='logo text' src='/logo-text.svg' width={90} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='end' className='space-x-8'>
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

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              }
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
