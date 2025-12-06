'use client'

import { useCreateBlockNote } from '@blocknote/react'
// Or, you can use ariakit, shadcn, etc.
import { BlockNoteView } from '@blocknote/mantine'
import { ko } from '@blocknote/core/locales'
// Default styles for the mantine editor
import '@blocknote/mantine/style.css'
// Include the included Inter font
import '@blocknote/core/fonts/inter.css'
import { type Block } from '@blocknote/core'
import { useEffect } from 'react'

export default function EditorPrimitive({
  readonly,
  props,
  setContent,
}: {
  readonly?: boolean
  props?: Block[]
  setContent?: (content: Block[]) => void
}) {
  const editor = useCreateBlockNote({
    dictionary: {
      ...ko,
      placeholders: {
        ...ko.placeholders,
        emptyDocument: "'텍스트를 입력하거나 '/' 를 눌러 명령어를 실행하세요.",
      },
    },
  })

  useEffect(() => {
    if (props && props.length > 0) {
      const current = JSON.stringify(editor.document)
      const next = JSON.stringify(props)

      if (current !== next) {
        editor.replaceBlocks(editor.document, props)
      }
    }
  }, [props, editor])

  return (
    <BlockNoteView
      editor={editor}
      editable={!readonly}
      onChange={() => {
        if (!readonly) {
          setContent?.(editor.document)
        }
      }}
    />
  )
}
