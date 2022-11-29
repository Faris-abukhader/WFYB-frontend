import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {ProgressBar} from './general'
export default function ProjectCard({title,raised,goal,daysLeft,category}) {
    const [ishover,setIsHover] = useState(false)
    const cardRef = useRef(null)
    return (
        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} ref={cardRef} className={` bg-white rounded-md ${ishover &&'shadow-lg'} font-bold`}>
            <div style={{backgroundImage:'url("/images/project2.jpeg")',backgroundRepeat:'no-repeat',objectFit:'cover'}} className={`relative min-w-min h-[300px] rounded-t-md`}>
            {ishover &&<div className='absolute w-full h-full bg-black opacity-20'></div>}
            <div className='absolute top-2 right-2 w-[30px] h-[30px] flex items-center justify-center m-3 bg-gray-800 bg-opacity-20 rounded-full hover:bg-opacity-40 hover:cursor-pointer z-40'>&#9829;</div>
            </div>
            <div className='relative p-5 pt-6 space-y-4 border border-t-0 rounded-b-md border-[#202330] border-opacity-20'>
                <button className='absolute left-5 -top-4 bg-green-500 px-3 py-1 text-gray-100 rounded-sm'>{category}</button>
                <h1 className='text-lg'>{title}</h1>
                <div className='flex items-center justify-between text-xs text-gray-400'>
                <h5>Raised : ${raised}</h5>
                <h5>34.5%</h5>
                </div>
                <ProgressBar percentage={50}/>
                <p className=''>Goal : <span className='text-green-600'>${goal}</span></p>
                <div className='flex items-center justify-between bg-gray-100 p-2 rounded-sm text-sm'>
                    <div className='text-slate-400 flex items-center space-x-1'><Image src={`/icons/clock.svg`} className='text-bold' width={14} height={14} alt='clock'/> <span>{daysLeft} Days Left</span></div>
                    <div className='text-green-600'>Explore &#8594;</div>
                </div>
            </div>
        </div>
    )
}
