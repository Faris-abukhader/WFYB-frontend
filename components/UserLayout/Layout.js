import {useContext, useState} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanvas'
import {LocalizationContext} from '../../localization/locationlizationContext'
export default function Layout({children,currentPage}) {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const {language,setLanguage} = useContext(LocalizationContext);
  return (
    <div dir={language=='ar'?'rtl':'ltr'}>
      <Navbar show={showOffcanvas} offcanvasToggler={() => setShowOffcanvas(!showOffcanvas)} language={language} setLanguage={setLanguage} />
      <Offcanvas show={showOffcanvas} setShow={setShowOffcanvas} language={language} />
      <Header currentPage={currentPage} language={language}/>
      <div className='flex justify-center bg-gray-100'>
      <div style={{minHeight:'100vh',maxWidth:'850px'}} className='w-full py-4 px-4 sm:px-0' onClick={()=>setShowOffcanvas(false)}>
        {children}
      </div>
      </div>
      <Footer language={language}/>
    </div>
  )
}
