import Image from 'next/image'
import {PulseButton} from '../general/general'
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
            <h4 className='text-sm text-gray-500'>Sed ut perspiciatis unde omnis iste natus sit quasi architecto beatae vitae dicta.</h4>
          </div>
        </div>

        <div className='flex items-center space-x-5'>
          <div className=' rounded-full'>
            <Image src={`/icons/globalPayment.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold text-lg'>Global Payment Processing</h1>
            <h4 className='text-sm text-gray-500'>Sed ut perspiciatis unde omnis iste natus sit quasi architecto beatae vitae dicta.</h4>
          </div>
        </div>


        <div className='flex items-center space-x-5'>
          <div className=' rounded-full'>
            <Image src={`/icons/paymentOptions.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold text-lg'>Many Payment Options</h1>
            <h4 className='text-sm text-gray-500'>Sed ut perspiciatis unde omnis iste natus sit quasi architecto beatae vitae dicta.</h4>
          </div>
        </div>
        </section>


        </div>
        <div className='relative object-contain flex justify-center w-full sm:w-2/3'>
          <div className='absolute mx-auto top-1/2 -translate-y-1/2'>
            <PulseButton hasHandler={false}>▶️</PulseButton>
          </div>
        <Image src={`/images/whyYouChooseUs.jpeg`} width={600} height={400} alt='vr_image' className='rounded-md'/>
      </div>
        </div>
  )
}
