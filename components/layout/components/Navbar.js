import { useEffect, useState } from 'react'
import Image from 'next/image'
import Hamburger from 'hamburger-react'
import {CustomDropdown} from '../../../components/general/general'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { getTranslatedText as t } from '../../../localization/config'
import { signOut } from 'next-auth/react'
export default function Navbar({ show,offcanvasToggler,language }) {
  const [position, setPosition] = useState('')
  const session = useSession()

  const scrollHandler = () => {
    setPosition(window.pageYOffset >= 80 ? 'sticky shadow-lg bg-white' : 'block')
  }
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
  }, [])

  const ProfileImage = ()=>{
    return(
      <Image src={`${session?.data ? `/avatar/${session?.data.user?.image}` :'/icons/profile.svg'}`} width={43} height={43} className='rounded-full hover:cursor-pointer' alt='user_profile' />
    )
  }

  return (
    <div className={`flex items-center justify-between ${position} top-0 p-6 z-50`}>
       <Link href={`/`}><div className='text-3xl font-bold hover:cursor-pointer'>WFYB</div></Link>
      <div className='hidden md:block'>
        <ul dir={language=='ar'?'rtl':'ltr'} className='flex items-center space-x-8 font-almarai'>
        <Link href={`/`}><li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 hover:border-b-2 border-green-500'>{t('home',language)}</li></Link>
          {language=='ar' &&<li></li>}
          <Link href={`/#aboutUs`}><li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 hover:border-b-2 border-green-500'>{t('aboutUs',language)}</li></Link>
          <Link href={`/#choosingUs`}><li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 hover:border-b-2 border-green-500'>{t('choosingUs',language)}</li></Link>
          <Link href={`/#ourTeam`}><li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 hover:border-b-2 border-green-500'>{t('ourTeam',language)}</li></Link>          
        </ul>
      </div>
      <div className='hidden md:flex items-start space-x-2'>
        <div>
        <button className='flex items-center justify-center w-[43px] h-[43px] bg-zinc-200 rounded-full'>
          <Image src={`/icons/search.svg`} width={18} height={18} alt='search' />
        </button>
        </div>
        <CustomDropdown Component={ProfileImage} language={language}>
          {session?.data?.user ? 
          <>
          <Link href={`/dashboard/profile`}><CustomDropdown.Item>{t('profile',language)}</CustomDropdown.Item></Link>
          <CustomDropdown.Item hasHandler={true} onClick={()=>signOut()}>{t('signOut',language)}</CustomDropdown.Item>
          </>
          :
          <Link href={`/auth/signIn`}><CustomDropdown.Item>{t('signIn',language)}</CustomDropdown.Item></Link>
          }
        </CustomDropdown>
      </div>
      <div className='block md:hidden'>
        <Hamburger toggled={show} toggle={offcanvasToggler} easing="ease-in" />
      </div>
    </div>
  )
}
