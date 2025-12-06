import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        red: 'bg-red-600 text-white dark:bg-red-800',
        orange: 'bg-orange-600 text-white dark:bg-orange-800',
        amber: 'bg-amber-600 text-white dark:bg-amber-800',
        yellow: 'bg-yellow-600 text-white dark:bg-yellow-800',
        lime: 'bg-lime-600 text-white dark:bg-lime-800',
        green: 'bg-green-600 text-white dark:bg-green-800',
        emerald: 'bg-emerald-600 text-white dark:bg-emerald-800',
        teal: 'bg-teal-600 text-white dark:bg-teal-800',
        cyan: 'bg-cyan-600 text-white dark:bg-cyan-800',
        sky: 'bg-sky-600 text-white dark:bg-sky-800',
        blue: 'bg-blue-600 text-white dark:bg-blue-800',
        indigo: 'bg-indigo-600 text-white dark:bg-indigo-800',
        violet: 'bg-violet-600 text-white dark:bg-violet-800',
        purple: 'bg-purple-600 text-white dark:bg-purple-800',
        fuchsia: 'bg-fuchsia-600 text-white dark:bg-fuchsia-800',
        pink: 'bg-pink-600 text-white dark:bg-pink-800',
        rose: 'bg-rose-600 text-white dark:bg-rose-800',
        slate: 'bg-slate-600 text-white dark:bg-slate-800',
        gray: 'bg-gray-600 text-white dark:bg-gray-800',
        zinc: 'bg-zinc-600 text-white dark:bg-zinc-800',
        neutral: 'bg-neutral-600 text-white dark:bg-neutral-800',
        stone: 'bg-stone-600 text-white dark:bg-stone-800',

        'red-subtle': 'bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-300',
        'orange-subtle': 'bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-300',
        'amber-subtle': 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-300',
        'yellow-subtle': 'bg-yellow-100 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-300',
        'lime-subtle': 'bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-300',
        'green-subtle': 'bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-300',
        'emerald-subtle':
          'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300',
        'teal-subtle': 'bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-300',
        'cyan-subtle': 'bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-300',
        'sky-subtle': 'bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300',
        'blue-subtle': 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-300',
        'indigo-subtle': 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300',
        'violet-subtle': 'bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-300',
        'purple-subtle': 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300',
        'fuchsia-subtle':
          'bg-fuchsia-100 dark:bg-fuchsia-950 text-fuchsia-600 dark:text-fuchsia-300',
        'pink-subtle': 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-300',
        'rose-subtle': 'bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-300',
        'slate-subtle': 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300',
        'gray-subtle': 'bg-gray-100 dark:bg-gray-950 text-gray-600 dark:text-gray-300',
        'zinc-subtle': 'bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-300',
        'neutral-subtle':
          'bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300',
        'stone-subtle': 'bg-stone-100 dark:bg-stone-950 text-stone-600 dark:text-stone-300',
      },
      size: {
        sm: 'px-1 py-px',
        default: 'px-2 py-0.5',
        md: 'px-2.5 py-0.75',
        lg: 'px-3 py-1',
      },
    },
    defaultVariants: {
      variant: 'blue',
      size: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  size,
  asChild = false,
  children,
  icon,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean; icon?: React.ReactNode }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp data-slot='badge' className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon && icon}
      {children}
    </Comp>
  )
}

export { Badge, badgeVariants }
