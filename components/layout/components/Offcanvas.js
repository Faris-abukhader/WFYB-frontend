import { useRef,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Offcanvas({ show }) {
  const offcanvasRef = useRef(null)
  return (
    <div ref={offcanvasRef} className={`z-50 bg-white shadow-lg fixed bottom-0 flex flex-col w-1/2 max-w-md ${show ? 'flex left-0':' -left-full -translate-x-full-'} transition-all ease-in-out delay-150 duration-700 bg-clip-padding shadow-xl outline-none text-gray-700 after:duration-1000 top-0 border-none animate__animated animate__fast ${show && 'animate__fadeInLeft'} `}>
      <div className="offcanvas-body  flex-grow overflow-y-auto scrollbar-hide ">
        <div className='relative pb-4 '>
          <div className='flex w-full pt-3 items-center justify-center text-center text-3xl font-bold'>
            <Image src={`/icons/logo.svg`} width={30} height={30} alt='logo' />
            <div>e work</div>
          </div>
          <hr className={` my-3`} />
        </div>
        <div className='flex flex-col pt-3 cursor-pointer text-center space-y-6 '>
          <a className={`hover:text-gray-400 hover:font-bold border-b pb-3 border-gray-500`}>Home</a>
          <a className={`hover:text-gray-400 hover:font-bold border-b pb-3 border-gray-500`}>Job List</a>
          </div>
      </div>
    </div>
  )
}
