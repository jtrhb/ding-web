import { TextMsg } from '@/types/chat'

export function TextMsgBubble({ msg }: { msg: TextMsg }) {
  return (
    <div className={`bubble ${msg.role}`}>
      {msg.text.split('\n').map((l, i) => <p key={i}>{l}</p>)}
    </div>
  )
}
