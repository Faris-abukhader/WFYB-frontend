import { useRef } from 'react';
import Link from 'next/link';
import { getTranslatedText as t } from '../../../localization/config';
import { signOut } from 'next-auth/react';
export default function Offcanvas({ show, language }) {
  const offcanvasRef = useRef(null)
  return (
    <div ref={offcanvasRef} className={`z-50 bg-white shadow-lg fixed bottom-0 flex flex-col w-1/2 max-w-md ${show ? 'flex left-0' : ' -left-full -translate-x-full-'} transition-all ease-in-out delay-150 duration-700 bg-clip-padding shadow-xl outline-none text-gray-700 after:duration-1000 top-0 border-none animate__animated animate__fast ${show && 'animate__fadeInLeft'} `}>
      <div className="offcanvas-body  flex-grow overflow-y-auto scrollbar-hide ">
        <div className='relative bg-green-500 py-4 '>
          <div className='flex w-full pt-3 items-center justify-center text-center text-3xl font-bold'>
            <div className='text-gray-200'>WFYB</div>
          </div>
        </div>
        <ul className='flex flex-col pt-3 cursor-pointer text-center space-y-6 '>
          <Link href={`/projectList`}><li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 border-b border-gray-100 py-2 hover:border-b-2 hover:border-green-500'>{t('browseProjects', language)}</li></Link>
          <Link href={`/#aboutUs`}><li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1  border-b border-gray-100 py-2 hover:border-b-2 hover:border-green-500 '>{t('aboutUs', language)}</li></Link>
          <Link href={`/#choosingUs`}><li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 border-b border-gray-100 py-2 hover:border-b-2 hover:border-green-500'>{t('choosingUs', language)}</li></Link>
          <Link href={`/#ourTeam`}><li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 border-b border-gray-100 py-2 hover:border-b-2 hover:border-green-500'>{t('ourTeam', language)}</li></Link>
          <li onClick={signOut} className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 border-b border-gray-100 py-2 hover:border-b-2 hover:border-green-500'>{t('signOut', language)}</li>
        </ul>
      </div>
    </div>
  )
}
