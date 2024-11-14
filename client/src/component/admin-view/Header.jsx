import { AlignJustify, LogOut } from 'lucide-react'

function Header({ setOpen }) {
  return (
    <header className="flex justify-between items-center px-5 py-3 border-b">
      <button
        onClick={() => setOpen(true)}
        className="bg-primaryGreenLight px-3 py-2 rounded-md text-white hover:bg-primaryGreenDark shadow-md lg:hidden sm:block"
      >
        <AlignJustify />
      </button>
      <div className="flex flex-1 justify-end">
        <button className="inline-flex gap-2 items-center rounded-md bg-primaryGreenLight px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-primaryGreenDark">
          <LogOut />
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
