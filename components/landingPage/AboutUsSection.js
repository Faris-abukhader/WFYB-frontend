import React from 'react'
import Image from 'next/image'
export default function AboutUsSection() {
  return (
    <div id='aboutUs' className='flex-row sm:flex sm:items-start bg-green-300 bg-opacity-20 pt-20'>
        <div className='object-contain flex justify-center w-full sm:w-1/2'>
        <Image src={`/images/techGuy.png`} width={420} height={480} alt='vr_image' />
      </div>
      <div className='w-full sm:w-1/2 space-y-4 p-4 sm:px-0 sm:mt-4'>
        <h3 className='text-green-500 font-bold text-lg md:text-2xl'>ABOUT Us</h3>
        <h1 className='text-slate-800 font-bold text-xl md:text-4xl'>We Help How To Improve Product Marketing</h1>
        <p className='text-slate-600 text-sm'>Sedut perspiciatis unde omnis iste natus voluptatem accusan tium dolore dantiumy totam rem apeam eaque ipsa.</p>        
        <div className='space-y-8 py-5'>
        <div className='flex items-center space-x-5'>
          <div className='bg-green-600 rounded-full'>
            <Image src={`/icons/check.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold'>Highest Success Rates</h1>
            <h4 className='text-xs'>Quis autem vel eum iure reprehenderit quin.</h4>
          </div>
        </div>
        <div className='flex items-center space-x-5'>
          <div className='bg-green-600 rounded-full'>
            <Image src={`/icons/check.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold'>Raise Funds With Crowdfunding</h1>
            <h4 className='text-xs'>Quis autem vel eum iure reprehenderit quin.</h4>
          </div>
        </div>
        <div className='flex items-center space-x-5'>
          <div className='bg-green-600 rounded-full'>
            <Image src={`/icons/check.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold'>Millions in Funding</h1>
            <h4 className='text-xs'>Quis autem vel eum iure reprehenderit quin.</h4>
          </div>
        </div> 
        <button className=' bg-black  py-2 w-[130px] rounded-3xl text-zinc-50 hover:opacity-80 hover:space-x-1 transition-all duration-300'> <span>Learn More</span> <span className=''>&#8594;</span></button>
        </div>    
      </div>
    </div>
  )
}
