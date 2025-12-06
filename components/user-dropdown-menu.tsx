import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getProfile } from '@/lib/apis'
import { LoginDialog } from './login-dialog'
import { UserDropdownMenuLogoutButton } from './user-dropdown-menu-logout-button'
import Link from 'next/link'

export const UserDropdownMenu = async () => {
  const profile = await getProfile()

  if (!profile) return <LoginDialog />

  // 009effc6-fccc-4641-ba5d-9e754c4abe6c_audio.mp3

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='cursor-pointer hover:opacity-80'>
        <Avatar>
          <AvatarImage src={profile.avatar_url} />
          <AvatarFallback>{'U'}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{profile.user_name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/upload'>아티클 작성하기</Link>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>설정</DropdownMenuItem>
        <UserDropdownMenuLogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
