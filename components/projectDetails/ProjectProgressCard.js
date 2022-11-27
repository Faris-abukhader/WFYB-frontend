import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ProgressBar from '../general/ProgressBar'
import { nanoid } from '@reduxjs/toolkit'
export default function ProjectProgressCard({title,image,raised,goal,backers,daysLeft,category,campaigns}) {
    const cardRef = useRef(null)

    const [donationAmount, setDonationAmount] = useState(0)

    const detailsArray = [
        {value: raised, title: 'Pledged'}, 
        {value: backers, title: 'Backers'}, 
        {value: daysLeft, title: 'Days Left'}
    ]

    return (
        <div ref={cardRef} className={`bg-white rounded-md font-bold`}>
            <div className=' relative p-5 pt-6 space-y-4 rounded-b-md border-[#202330] border-opacity-20'>
                <button className='absolute left-5 -top-4 bg-green-500 px-3 py-1 text-gray-100 rounded-sm'>
                    {category}
                </button>
                <h1 className='text-3xl'>{title}</h1>
                <div className="flex items-center py-4 space-y-0 space-x-4 bg-white rounded-xl">
                    <Image 
                        className="block mx-0 rounded-full h-20 shrink-0" 
                        src={image}
                        width={80} height={80} alt="Agent's Face" 
                    />
                    <div className="text-left space-y-2">
                        <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            By Listing Agent
                        </p>
                        <p className="text-slate-500 font-medium text-sm">
                            {campaigns} Campaigns | 0 Loved Campaigns
                        </p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        detailsArray.map((item) => {
                            return(
                                <div 
                                    key={nanoid()}
                                    className='flex flex-col w-full h-24 justify-center items-center bg-gray-200'
                                >
                                    <h1 className='text-2xl'>{item.value ===raised && `$`}{item.value}</h1>
                                    <p className='text-lg font-light'>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-between text-xs text-gray-400'>
                    <h5>Raised : ${raised}</h5>
                    <h5>34.5%</h5>
                </div>
                <ProgressBar percentage={50}/>
                <p className=''>Goal : <span className='text-green-600'>${goal}</span></p>
                <div className='flex w-full h-12 space-x-2'>
                    {
                        [10, 20, 30, 40].map((item) => {
                            return(
                                <button
                                    key={item} 
                                    className='w-20 h-full text-base font-semibold border-2 border-slate-200 
                                                    rounded-full hover:border-green-600'
                                    onClick={() => {setDonationAmount(item)}}
                                >
                                    ${item}
                                </button>
                            )
                        })
                    }   
                </div>
                <div className="flex w-full h-12 space-x-2">
                    <span className='flex w-1 h-full justify-center items-center text-xl'>$</span>
                    <button className=' w-20 h-full text-base font-semibold border-2 border-slate-200 
                                        rounded-full hover:border-green-600 focus:border-green-600'>
                        <input 
                            className='w-1/2 h-full text-xl text-center focus:border-none active:border-none'
                            type="number" name="quantity" min="10"
                            value={donationAmount}
                            onChange={(event) => {setDonationAmount(event.target.value)}}
                        />
                    </button>
                    <button className='bg-green-600 py-2 w-60 h-full rounded-3xl text-lg text-zinc-50 space-x-0
                                        hover:opacity-90 hover:space-x-2 transition-all duration-300'> 
                        <span>Back Campaign</span> 
                        <span>&#8594;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
