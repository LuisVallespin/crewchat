import { NextPage } from 'next';
import { MessageList } from '../message-list/message-list';
import { NewMessage } from '../new-message/new-message';

export const Chat: NextPage = () => (
  <div className="col-span-9 flex h-full w-full flex-col items-center justify-between bg-neutral-600">
    <MessageList />
    <NewMessage />
  </div>
);
