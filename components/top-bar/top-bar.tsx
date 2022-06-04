import { NextPage } from 'next'
import { MenuButton } from '../menu-button/menu-button'
import { Search } from '../search/search'

export const TopBar: NextPage = () => (
  <div className="flex w-full items-center gap-4 pb-2">
    <MenuButton />
    <Search />
  </div>
)
