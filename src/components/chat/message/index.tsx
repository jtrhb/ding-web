import { ChatMsg } from '@/types/chat'
import { TextMsgBubble } from './TextMsg'
import { ImageMsgBubble } from './ImageMsg'
import { HtmlMsgBubble } from './HtmlMsg'

export function Message({ msg }: { msg: ChatMsg }) {
  switch (msg.type) {
    case 'text':
      return <TextMsgBubble msg={msg} />
    case 'image':
      return <ImageMsgBubble msg={msg} />
    case 'html':
      return <HtmlMsgBubble msg={msg} />
    default:
      return null   // or <UnknownMsg/>
  }
}
