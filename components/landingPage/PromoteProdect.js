import React from 'react'

export default function PromoteProdect() {
  return (
    <div style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundSize: '100% 90%' }} className={`w-full bg-green-500 text-gray-100 px-8 py-12 space-y-3 bg-[url('/images/bg-dot.png')] object-contain font-bold`}>
        <p>25 Years Of Experience In Crowdfunding</p>
        <div className='flex-row space-y-3 sm:space-y-0 sm:flex items-center justify-between'>
        <h1 className='text-4xl'>Raise Hand to Promote Best Products</h1>
        <button className='flex items-center space-x-3 outline outline-zinc-50 rounded-2xl px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm lg:text-md text-zinc-50 hover:bg-zinc-50 hover:text-black hover:font-bold'>
            Promote Products &#8594;
        </button>
        </div>
    </div>
  )
}
