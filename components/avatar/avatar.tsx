import { NextPage } from 'next'
import Image from 'next/image'
import AvatarInterface from './avatar.interface'

export const Avatar: NextPage<AvatarInterface> = ({ url, label }) => (
  <Image
    className="rounded-full"
    alt={label}
    src={url}
    width={'70px'}
    height={'70px'}
  />
)
