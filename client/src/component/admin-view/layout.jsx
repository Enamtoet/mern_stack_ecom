import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import { useState } from 'react'
function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className="flex min-h-screen w-full">
      <SideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        <Header setOpen={setOpenSidebar} />
        <main className="flex-1 flex bg-gray-50 p-4  md:p-6 ">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default AdminLayout
