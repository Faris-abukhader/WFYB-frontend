import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanvas'
export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <Offcanvas/>
        <Footer/>
        <div>
            {children}
        </div>
    </div>
  )
}
