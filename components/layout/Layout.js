import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanvas'
export default function Layout({ children }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  return (
    <div>
      <Navbar offcanvasToggler={() => setShowOffcanvas(!showOffcanvas)} />
      <Offcanvas show={showOffcanvas} />
      <Footer />
      <div>
        {children}
      </div>
    </div>
  )
}
