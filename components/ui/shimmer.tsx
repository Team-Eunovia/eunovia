import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

export const Shimmer = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.3s_1] before:bg-linear-to-r before:from-transparent before:via-black/5 dark:before:via-white/10 before:to-transparent bg-primary/10 dark:bg-primary/5 rounded-lg',
        className,
      )}
    >
      {children}
    </div>
  )
}
