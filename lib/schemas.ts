import z from 'zod'

export const articleSchema = z.object({
  title: z.string().min(1),
  thumbnail_image: z
    .file()
    .mime(['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp']),
  category_id: z.string(),
})

export type ArticleSchema = z.infer<typeof articleSchema>

export const commentSchema = z.object({
  content: z.string().min(1, { error: '댓글을 입력해주세요' }),
})

export type CommentSchema = z.infer<typeof commentSchema>
