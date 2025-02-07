import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Home/Navbar/Navbar'
import Footer from '../Pages/Home/Footer/Footer'

function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout
