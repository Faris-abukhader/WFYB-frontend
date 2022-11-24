import React from 'react'
import Image from 'next/image'
export default function WhyChooseUsSection() {
  return (
    <div className='flex-row sm:flex items-center justify-between sm:px-10 w-full p-8'>
        <div className='p-8'>

        <h3 className='text-green-500 font-bold text-lg md:text-2xl'>WHAT WE DO</h3>
        <h1 className='text-slate-800 font-bold text-xl md:text-4xl py-4'>Why Choose Us</h1>
        <section className='space-y-4 pt-8'>
            <div className='flex items-center space-x-5'>
          <div className=' rounded-full'>
            <Image src={`/icons/easyPayout.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold text-lg'>Fast & Easy Payouts</h1>
            <h4 className='text-sm'>Sed ut perspiciatis unde omnis iste natus sit quasi architecto beatae vitae dicta.</h4>
          </div>
        </div>

        <div className='flex items-center space-x-5'>
          <div className=' rounded-full'>
            <Image src={`/icons/globalPayment.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold text-lg'>Global Payment Processing</h1>
            <h4 className='text-sm'>Sed ut perspiciatis unde omnis iste natus sit quasi architecto beatae vitae dicta.</h4>
          </div>
        </div>


        <div className='flex items-center space-x-5'>
          <div className=' rounded-full'>
            <Image src={`/icons/paymentOptions.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold text-lg'>Many Payment Options</h1>
            <h4 className='text-sm'>Sed ut perspiciatis unde omnis iste natus sit quasi architecto beatae vitae dicta.</h4>
          </div>
        </div>
        </section>


        </div>
        <div className='object-contain flex justify-center w-full sm:w-2/3'>
        <span class="flex  w-[20px] h-[20px] items-center justify-center">
  <span class="animate-ping absolute inline-flex h-[40px] w-[40px] rounded-md bg-sky-400 opacity-75"></span>
  <span class="animate-ping absolute inline-flex h-[40px] w-[40px] rounded-md bg-sky-400 opacity-75 transition-all delay-200 duration-300"></span>
  <span class="p-4 bg-red-400">▶️</span>
</span>
        <Image src={`/images/whyYouChooseUs.jpeg`} width={600} height={400} alt='vr_image' className='rounded-md'/>
      </div>
        </div>
  )
}
