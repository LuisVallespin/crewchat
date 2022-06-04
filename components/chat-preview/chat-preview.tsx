import { NextPage } from 'next'
import { useState } from 'react'
import { Avatar } from '../avatar/avatar'
import IChatPreviewProps from './chat-preview.interface'
import './chat-preview.module.scss'

export const ChatPreview: NextPage<IChatPreviewProps> = ({
  avatarUrl,
  name,
  preview,
}) => {
  const [selected, setSelected] = useState(false)
  return (
    <div
      aria-hidden="true"
      role="button"
      tabIndex={0}
      className={`flex cursor-pointer items-center justify-start gap-2 rounded-xl p-4 hover:bg-slate-100 
        ${selected ? 'selected' : ''}
      `}
      onClick={() => setSelected(!selected)}
    >
      <Avatar url={avatarUrl} label={'mockLabel'} />
      <div className="flex w-full flex-col">
        <div className="flex w-full items-center justify-between">
          <h3 className="font-semibold">{name}</h3>
          <small className="text-xs">12:00</small>
        </div>

        <span>{preview}</span>
      </div>
    </div>
  )
}
