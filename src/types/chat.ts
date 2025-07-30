export type Role = 'user' | 'assistant' | 'system'

export interface BaseMsg {
  id: string
  role: Role
  createdAt: number
}

export interface TextMsg extends BaseMsg {
  type: 'text'
  text: string
}

export interface ImageMsg extends BaseMsg {
  type: 'image'
  url: string
  alt?: string
}

export interface HtmlMsg extends BaseMsg {
  type: 'html'
  html: string
}

export type ChatMsg = TextMsg | ImageMsg | HtmlMsg /* | … */
