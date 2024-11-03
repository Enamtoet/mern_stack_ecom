import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './component/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './component/admin-view/layout'
import AdminDashboard from './pages/admin-view/Dashbroad'
import AdminFeatures from './pages/admin-view/Features'
import AdminOrders from './pages/admin-view/Orders'
import AdminProducts from './pages/admin-view/Products'
import ShoppingLayout from './component/shopping-view/Layout'
import NotFound from './pages/not-found/Not-Found'
import CheckAuth from './component/common/check-auth'
import UnauthPage from './pages/unauth-page/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {check_Auth} from './store/auth-slice/index'
import Listing from './pages/shopping-view/listing'
import Products from './pages/shopping-view/products'
import Home from './pages/shopping-view/home'



function App() {

  const {user, isAuthenticated, isLoading}= useSelector(state => state.auth )
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(check_Auth())
  }, [dispatch])

if (isLoading)
  return (
    <div className="flex items-center justify-center h-screen text-xl font-semibold  text-green-500">
      Loading...
    </div>
  );
  console.log(isLoading, user)
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>

        {/* Auth routes protected by CheckAuth */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>


        {/* Admin routes, protected by CheckAuth */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>


        {/* Shopping page route,  protected by CheckAuth */}
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path = 'home'  element = {<Home />} />
          <Route path = 'listing'  element = {<Listing />} />
          <Route path = 'products'  element = {<Products />} />
        </Route>


        {/* Fallback route for undefined paths (404 Not Found) */}
        <Route path="*" element={<NotFound />}></Route>

        {/* Unauthorized access page */}
        <Route path="/unauth-page" element={<UnauthPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
