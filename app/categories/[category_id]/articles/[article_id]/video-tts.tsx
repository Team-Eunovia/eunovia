'use client'

import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

export const VideoTTS = ({ url }: { url: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const supabase = createClient()

  return (
    <div className='flex flex-col items-end gap-4'>
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className='w-fit self-end'
        variant='blue-subtle'
      >
        {isOpen ? '영상 닫기' : '영상으로 듣기'}
      </Button>
      {isOpen && (
        <video
          className='shrink-0 w-full max-w-100 rounded-xl'
          controls
          src={supabase.storage.from('tts').getPublicUrl(url).data.publicUrl}
        >
          video
        </video>
      )}
    </div>
  )
}
