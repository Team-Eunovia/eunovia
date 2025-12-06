'use client'

import { Editor } from '@/components/editor'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useUploadArticleMutation } from '@/lib/apis-hook'
import { articleSchema, ArticleSchema } from '@/lib/schemas'
import { Tables } from '@/lib/supabase/database.types'
import { Block } from '@blocknote/core'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const UploadArticleForm = ({ categories }: { categories: Tables<'category'>[] }) => {
  const [content, setContent] = useState<Block[]>([])
  const uploadArticleMutation = useUploadArticleMutation()
  const form = useForm<ArticleSchema>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: '',
    },
  })

  const onSubmit = (values: ArticleSchema) => {
    uploadArticleMutation.mutate(
      {
        ...values,
        content: JSON.stringify(content),
      },
      {
        onSuccess: () => {
          form.reset()
          setContent([])
        },
      },
    )
  }

  const disabled = form.formState.isSubmitting || uploadArticleMutation.isPending

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 px-4 flex flex-col'>
        <FormField
          control={form.control}
          name='thumbnail_image'
          render={({ field: { value, onChange, ...props } }) => (
            <FormItem>
              <FormLabel>썸네일 이미지</FormLabel>
              <FormControl>
                <Input
                  {...props}
                  type='file'
                  disabled={disabled}
                  className='bg-background/80 max-w-80'
                  placeholder='썸네일 이미지'
                  onChange={(e) => onChange(e.target.files && e.target.files[0])}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>제목</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  className='h-12 bg-background/80'
                  placeholder='제목'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='category_id'
          render={({ field }) => (
            <FormItem>
              <FormLabel>카테고리</FormLabel>
              <Select
                key={field.value}
                value={String(field.value)}
                onValueChange={(value) => {
                  field.onChange(value)
                }}
              >
                <FormControl>
                  <SelectTrigger className='w-32 bg-background/80'>
                    <SelectValue placeholder='카테고리' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={String(category.id)}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Editor setContent={setContent} />

        <Button disabled={disabled} type='submit' className='self-end' size='lg'>
          게시하기
        </Button>
      </form>
    </Form>
  )
}
