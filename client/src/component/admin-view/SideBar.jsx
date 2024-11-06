import { BadgeCheck, ChartNoAxesCombined } from 'lucide-react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { LayoutDashboard, ShoppingBasket } from 'lucide-react'

const adminSidebarMenuItems = [
  {
    id: 'Dashboard',
    label: 'Dashboard',
    path: '/admin/dashboard',
    icon: <LayoutDashboard />,
  },
  {
    id: 'products',
    label: 'Products',
    path: '/admin/products',
    icon: <ShoppingBasket />,
  },
  {
    id: 'orders',
    label: 'Orders',
    path: '/admin/orders',
    icon: <BadgeCheck />,
  },
]

function MenuItems() {
  const navigate = useNavigate()

  return (
    <nav className="mt-8 flex-col gap-3">
      {adminSidebarMenuItems.map((menuItem) => {
        return (
          <div
            onClick={() => navigate(menuItem.path)}
            key={menuItem.id}
            className="flex items-center gap-3 text-gray-600 rounded-md px-3 py-2 cursor-pointer hover:bg-primaryGreenLight hover:text-white  "
          >
            {menuItem.icon}
            <span className="tracking-wider ">{menuItem.label}</span>
          </div>
        )
      })}
    </nav>
  )
}

function SideBar() {
  const navigate = useNavigate()
  return (
    <Fragment>
      <aside className="hidden w-64 flex-col border-r p-6 lg:flex">
        <div
          onClick={() => navigate('/admin/dashboard')}
          className="flex cursor-pointer items-center gap-3"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="font-bold text-2xl ">Admin panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  )
}
export default SideBar
