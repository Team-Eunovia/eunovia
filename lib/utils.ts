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

export const getImagePublicURL = ({
  bucketName,
  imagePath,
}: {
  bucketName: 'article_thumbnails' | 'tts'
  imagePath: string
}) => {
  return `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/${bucketName}/${imagePath}`
}
