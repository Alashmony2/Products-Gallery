import React from 'react'
import NavbarComponent from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  <NavbarComponent/>
  <Outlet/>
  <Footer/>
  
  </>
}
