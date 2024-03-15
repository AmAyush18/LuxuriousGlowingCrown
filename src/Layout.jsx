import React from 'react'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout