import { Outlet } from "react-router-dom"
import ShoppingHeader from "./ShoppingHeader"

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
        <ShoppingHeader />
        <main className="flex flex-auto w-full">
            <Outlet />
        </main>
    </div>
  )
}
export default ShoppingLayout