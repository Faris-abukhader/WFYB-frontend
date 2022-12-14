import { useContext, useState } from 'react'
import { LocalizationContext } from '../../localization/locationlizationContext'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanvas'
export default function Layout({ children }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const {language,setLanguage} = useContext(LocalizationContext)
  console.log(language)
  return (
    <div dir={language=='ar'?'rtl':'ltr'}>
      <Navbar show={showOffcanvas} offcanvasToggler={() => setShowOffcanvas(!showOffcanvas)} language={language} setLanguage={setLanguage}/>
      <Offcanvas show={showOffcanvas} setShow={setShowOffcanvas} language={language} />
      <div style={{minHeight:'100vh'}} onClick={()=>setShowOffcanvas(false)}>
        {children}
      </div>
      <Footer language={language}/>
    </div>
  )
}
