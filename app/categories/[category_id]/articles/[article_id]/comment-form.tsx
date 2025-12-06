'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useCreateCommentMutation } from '@/lib/apis-hook'
import { commentSchema, type CommentSchema } from '@/lib/schemas'
import { Tables } from '@/lib/supabase/database.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const CommentForm = ({
  profile,
  article,
}: {
  profile: Tables<'profile'> | null
  article: Tables<'article'>
}) => {
  const createCommentMutation = useCreateCommentMutation()
  const form = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: '',
    },
  })

  const onSubmit = (values: CommentSchema) => {
    createCommentMutation.mutate(
      {
        article_id: article.id,
        author_id: profile!.id,
        content: values.content,
      },
      {
        onSuccess: () => {
          form.reset()
        },
      },
    )
  }

  const isLoggedIn = !!profile

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>댓글</FormLabel>
              <FormControl>
                <Input
                  disabled={!isLoggedIn || createCommentMutation.isPending}
                  className='h-12 text-base placeholder:text-base'
                  placeholder={
                    isLoggedIn
                      ? '입력한 댓글은 수정하거나 삭제할 수 없어요. 또한 허위사실, 욕설, 사칭 등 댓글은 통보없이 삭제될 수 있습니다.'
                      : '로그인 후 댓글을 입력할 수 있습니다.'
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          isLoading={createCommentMutation.isPending}
          disabled={!isLoggedIn || createCommentMutation.isPending}
          type='submit'
          variant='blue-subtle'
          className='self-end'
        >
          댓글 남기기
        </Button>
      </form>
    </Form>
  )
}
