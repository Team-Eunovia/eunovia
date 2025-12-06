import { clsx, type ClassValue } from 'clsx'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string) => {
  return format(date, 'yyyy년 M월 d일', { locale: ko })
}
