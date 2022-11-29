import Image from 'next/image'
export default function Footer() {
  return (
    <div className={`relative w-ull object-contain bg-zinc-700 text-gray-50 p-10`}>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-y-4'>
        <div className='space-y-4'>
          <h1 className='text-5xl font-bold'>WFYB</h1>
          <p className='text-gray-300'>Sed ut perspiciatis unde omn iste natus error sit voluptatem.</p>
          <h3>Join Newsletters</h3>
          <div className='relative w-fit'>
            <input placeholder='Email address' className='p-3 rounded-3xl text-sm' />
            <button className='bg-green-500 hover:bg-green-600 w-[35px] h-[35px] flex items-center justify-center p-2 rounded-full absolute right-1 top-1/2 -translate-y-1/2'>&#8594;</button>
          </div>
        </div>
        <div>
          <h2 className='text-3xl font-bold pb-8'>Our Projects</h2>
          <ul className='text-gray-400 font-bold space-y-4'>
            <li>Medical & Health</li>
            <li>Educations</li>
            <li>Film & Video</li>
            <li>Technology</li>
            <li>Desgin</li>
            <li>Fashion</li>
          </ul>
        </div>
        <div>
          <h2 className='text-3xl font-bold pb-8'>Company</h2>
          <ul className='text-gray-400 font-bold space-y-4'>
            <li>About us</li>
            <li>Latest events</li>
            <li>How It works</li>
            <li>News & articles</li>
            <li>Contact us</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <div>
          <h2 className='text-3xl font-bold pb-8'>Contact</h2>
          <ul className='space-y-6'>
            <li className='flex space-x-4'>
              <div className='bg-green-500 p-4 rounded-full'>
                <Image src={`/icons/telephone.svg`} width={16} height={16} alt='telphone' />
              </div>
              <div>
                <h1 className='text-gray-400 font-bold'>Email Address</h1>
                <h1>faresraed2011@yahoo.com</h1>
              </div>
            </li>
            <li className='flex space-x-4'>
              <div className='bg-green-500 p-4 rounded-full'>
                <Image src={`/icons/message.svg`} width={16} height={16} alt='message' />
              </div>
              <div>
                <h1 className='text-gray-400 font-bold'>Phone Number</h1>
                <h1>13645713525</h1>
              </div>
            </li>
            <li className='flex space-x-4'>
              <div className='bg-green-500 p-4 rounded-full'>
                <Image src={`/icons/location.svg`} width={16} height={16} alt='location' />
              </div>
              <div>
                <h1 className='text-gray-400 font-bold'>Location</h1>
                <h1>Irbid , Jordan</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
