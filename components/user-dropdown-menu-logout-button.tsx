'use client'

import { useLogoutMutation } from '@/lib/apis-hook'
import { DropdownMenuItem } from './ui/dropdown-menu'

export const UserDropdownMenuLogoutButton = () => {
  const logoutMutation = useLogoutMutation()

  return (
    <DropdownMenuItem
      disabled={logoutMutation.isPending}
      onClick={() => {
        logoutMutation.mutate()
      }}
    >
      로그아웃
    </DropdownMenuItem>
  )
}
