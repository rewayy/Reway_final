import React from 'react'
// import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { RouterNav } from '../components'

const Layout = () => {
  return (
    < >
      < RouterNav />
        <Outlet/>
    </>
  )
}

export default Layout