import React from 'react'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import MobileFooter from './components/MobileFooter'

const Layout = () => {
  return (
    <>
      <Outlet />
      <div className="md:block hidden">
        <Footer />  
      </div>
      <div className="md:hidden">
        <MobileFooter />  
      </div>
    </>
  )
}

export default Layout