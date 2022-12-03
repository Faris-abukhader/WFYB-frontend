import React from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Image from 'next/image'
export default function ReviewCard({image,review,name,job}) {
  return (
    <div className='w-full flex justify-center'>
    <div className='w-full sm:w-1/2 flex gap-2 shadow-md rounded-md p-4 sm:p-8'>
        <Image src={`/images/${image}`} width={120} height={120} className='rounded-full' alt='review_person'/>
        <div className='w-3/4 space-y-3 text-start'>
        <Rating style={{ maxWidth: 80 }} value={4} readOnly={true}/>
        <p className='text-gray-500 text-xs'>{review}</p>
        <h3 className='font-bold'>{name} <span className='text-green-500'>{job}</span></h3>
        </div>
    </div>
    </div>
  )
}
