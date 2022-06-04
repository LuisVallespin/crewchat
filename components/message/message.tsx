import { NextPage } from "next";

export const Message: NextPage = () => (
  <div className="flex max-w-lg flex-wrap items-center justify-center gap-2 rounded-xl bg-white px-4 py-1 text-gray-500">
    <span>Hola</span>
    <sub className="text-xs text-gray-400">12:00</sub>
  </div>
);
