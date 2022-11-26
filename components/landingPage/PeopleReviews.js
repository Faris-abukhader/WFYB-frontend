import React from 'react'
import ReviewCard from './ReviewCard'
export default function PeopleReviews() {
  return (
    <div className='text-center py-20'>
      <h3 className='text-green-500 font-bold text-lg md:text-2xl'>CLIENTS FEEDBACK</h3>
        <h1 className='text-slate-800 font-bold text-xl md:text-4xl py-4'>{`What People's Say`}</h1>
        <div className='w-full py-8 space-y-7 px-6 sm:px-0'>
            <ReviewCard image={`reviewGuy.jpeg`} name={`Faris Abukhader`} job={`Web Developer`} review={`I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.`}/>
            <ReviewCard image={`reviewGuy.jpeg`} name={`Ahmed Suweidi`} job={`Web Developer`} review={`I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.`}/>
            <ReviewCard image={`reviewGuy.jpeg`} name={`Azat `} job={`Web Developer`} review={`I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.`}/>
        </div>
    </div>
  )
}
