import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanvas'
export default function Layout({ children }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  return (
    <div>
      <Navbar show={showOffcanvas} offcanvasToggler={() => setShowOffcanvas(!showOffcanvas)} />
      <Offcanvas show={showOffcanvas} setShow={setShowOffcanvas} />
      <div onClick={()=>setShowOffcanvas(false)}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
