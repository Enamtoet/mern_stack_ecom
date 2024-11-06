import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation()

  // If not authenticated and not on login/register pages, redirect to login
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes('login') ||
      location.pathname.includes('register')
    )
  ) {
    return <Navigate to={'/auth/login'} />
  }

  // If authenticated and on login/register pages, redirect based on user role
  if (
    isAuthenticated &&
    (location.pathname.includes('login') ||
      location.pathname.includes('register'))
  ) {
    if (user?.role === 'admin') {
      return <Navigate to={'/admin/dashboard'} /> // Admins go to admin dashboard
    } else {
      return <Navigate to={'/shop/home'} /> // Regular users go to shop home
    }
  }

  // Prevent non-admin users from accessing admin pages
  if (
    isAuthenticated &&
    user?.role !== 'admin' &&
    location.pathname.includes('admin')
  ) {
    return <Navigate to={'/unauth-page'} /> // Redirect unauthorized users
  }

  // Prevent admin users from accessing shop pages
  if (
    isAuthenticated &&
    user?.role === 'admin' &&
    location.pathname.includes('shop')
  ) {
    return <Navigate to={'/admin/dashboard'} />
  }
  // If all checks pass, render the children components
  return <>{children}</>
}

export default CheckAuth
