import { NextPage } from 'next'

export const MenuButton: NextPage = () => (
  <button
    type="button"
    className="flex h-10 w-12 items-center justify-center rounded-xl bg-slate-100"
  >
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
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
)
