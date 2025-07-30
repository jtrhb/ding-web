import { ImageMsg } from '@/types/chat'

export function ImageMsgBubble({ msg }: { msg: ImageMsg }) {
  return (
    <>
      <img src={msg.url} alt={msg.alt} />
    </>
  )
}