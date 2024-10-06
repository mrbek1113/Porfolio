import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import NavigationPage from './NavigationPage'

const Layout = () => {
  return (
    <div>
      <Header/>
      <NavigationPage/>
      <Outlet/>
    </div>
  )
}

export default Layout
