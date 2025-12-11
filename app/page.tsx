import { Book } from '@/components/book'
import { getCategories } from '@/lib/apis'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='flex flex-col gap-12 md:gap-32 items-center md:items-start'>
      <div className='flex flex-col-reverse gap-10 md:flex-row md:justify-between pt-14 md:pt-36 md:pr-14 lg:pr-20 w-full'>
        <div className='space-y-6 max-w-180'>
          <p className='text-4xl md:text-6xl tracking-tight font-black space-y-2 sm:space-y-3'>
            <span className='block'>
              <span className='underline underline-offset-8'>생각</span>이 사라지는 시대,
            </span>
            <span className='block'>
              글은 다시 <span className='underline underline-offset-8'>사유</span>를 불러옵니다.
            </span>
          </p>
          {/* <p className='text-xl md:text-2xl tracking-tight text-foreground/80'>
            AI가 <span className='text-foreground font-semibold'>완벽</span>을 만들 때, 인간은
            <span className='text-foreground font-semibold'> 불완전함</span>으로 영감을 나눕니다.
          </p> */}
        </div>

        <Image
          src='/leaf.svg'
          alt='leaf'
          width={200}
          height={200}
          className='size-1/4 md:size-58'
        />
      </div>

      <div className='bg-brand-secondary/70 w-full p-8 md:p-12 rounded-3xl flex flex-col lg:flex-row gap-10 items-center lg:gap-24'>
        <div className='flex flex-col items-start w-full lg:w-fit gap-2 lg:h-60'>
          <p className='text-3xl md:text-4xl font-black'>아티클</p>
          <p className='text-lg md:text-xl text-foreground/90'>
            흐르는 물처럼, 걸림 없는 마음의 기록
          </p>
        </div>

        <CategoryBooks />
      </div>
    </div>
  )
}

const CategoryBooks = async () => {
  const { categories } = await getCategories()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.id}`}>
          <Book color='#222' author='Eunovia' textColor='white'>
            <div className='space-y-2 pl-3 text-white'>
              <Image
                src={category.image}
                alt='Your Image'
                height={60}
                width={60}
                className='size-16 w-full object-contain'
              />

              <h1 className='pt-2 text-2xl leading-7 font-semibold'>{category.title}</h1>
              <p className='text-sm font-semibold opacity-70'>{category.sub_title}</p>
            </div>
          </Book>
        </Link>
      ))}
    </div>
  )
}
