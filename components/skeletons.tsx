import { Shimmer } from '@/components/ui/shimmer'
import { Spinner } from './ui/spinner'

export const CategoryBookSkeleton = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
      <Shimmer className='w-49 h-60' />
      <Shimmer className='w-49 h-60' />
      <Shimmer className='w-49 h-60' />
    </div>
  )
}

export const SpinnerSkeleton = () => {
  return (
    <div className='flex items-center justify-center pt-10'>
      <Spinner />
    </div>
  )
}
