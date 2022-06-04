import { NextPage } from 'next'
import { Message } from '../message/message'

export const MessageList: NextPage = () => (
  <div className="flex h-full w-full flex-col items-center">
    <Message />
  </div>
)
