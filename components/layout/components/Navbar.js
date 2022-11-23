import { useEffect, useState } from 'react'
import Image from 'next/image'
import Hamburger from 'hamburger-react'
export default function Navbar({ show,offcanvasToggler }) {
  const [position, setPosition] = useState('')

  const scrollHandler = () => {
    setPosition(window.pageYOffset >= 80 ? 'sticky shadow-lg bg-white' : 'block')
  }
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
  }, [])

  return (
    <div className={`flex items-center justify-between ${position} top-0 p-8 z-50`}>
      <div className='text-3xl font-bold'>WFYB</div>
      <div className='hidden md:block'>
        <ul className='flex items-center space-x-8 font-almarai'>
          <li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 hover:border-b-2 border-green-500'>Home</li>
          <li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 hover:border-b-2 border-green-500'>Explore</li>
          <li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 hover:border-b-2 border-green-500'>Events</li>
          <li className='hover:cursor-pointer hover:font-bold transition-all duration-300 hover:-translate-y-1 hover:border-b-2 border-green-500'>Contact</li>
        </ul>
      </div>
      <div className='hidden md:flex items-start space-x-2'>
        <button className='flex items-center justify-center w-[43px] h-[43px] bg-zinc-200 rounded-full'>
          <Image src={`/icons/search.svg`} width={18} height={18} alt='search' />
        </button>
        <Image src={`/icons/profile.svg`} width={43} height={43} alt='search' />
      </div>
      <div className='block md:hidden'>
        <Hamburger toggled={show} toggle={offcanvasToggler} easing="ease-in" />
      </div>
    </div>
  )
}
