import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanvas'
export default function Layout({ children }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [language, setLanguage] = useState('ar')
  return (
    <div>
      <Navbar show={showOffcanvas} offcanvasToggler={() => setShowOffcanvas(!showOffcanvas)} language={language} />
      <Offcanvas show={showOffcanvas} setShow={setShowOffcanvas} />
      <div style={{minHeight:'100vh'}} onClick={()=>setShowOffcanvas(false)}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
