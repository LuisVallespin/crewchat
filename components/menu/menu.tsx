import { NextPage } from 'next';
import { List } from '../list/list';
import { TopBar } from '../top-bar/top-bar';

export const Menu: NextPage = () => (
  <div className="col-span-3 flex h-full w-full flex-col overflow-auto bg-white px-2 pt-2">
    <TopBar />
    <List />
  </div>
);
