import { NextPage } from "next";

export const Search: NextPage = () => (
  <div className="flex w-full cursor-text items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
    <input className="w-full bg-transparent text-lg focus-visible:outline-none" />
  </div>
);
