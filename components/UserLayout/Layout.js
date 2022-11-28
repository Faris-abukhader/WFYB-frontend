import {useState} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanvas'
export default function Layout({children,currentPage}) {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  return (
    <div>
      <Navbar show={showOffcanvas} offcanvasToggler={() => setShowOffcanvas(!showOffcanvas)} />
      <Offcanvas show={showOffcanvas} setShow={setShowOffcanvas} />
      <Header currentPage={currentPage}/>
      <div style={{minHeight:'100vh',maxWidth:'750px'}} onClick={()=>setShowOffcanvas(false)}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
