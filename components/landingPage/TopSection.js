import React from 'react'
import Image from 'next/image'
import Atropos from 'atropos/react';
export default function TopSection() {
    return (
        <div className='relative flex items-center justify-around h-fit px-4 overflow-hidden'>
            <div className='w-1/2 space-y-3 md:space-y-4 lg:space-y-5'>
                <h1 className='text-lg md:text-3xl lg:text-6xl font-bold'>SYHM 5250 VR BOX Smart Phone VR Box</h1>
                <p className='text-xs md:text-md lg:text-lg text-gray-600 w-1/2 border-l-2 px-2 border-green-500'>WFYB is changing the way people and companies work.</p>
                <div className='flex items-center space-x-3'>
                    <button className='bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-2xl px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm lg:text-md text-zinc-50'>Explore Projects</button>
                    <button className='flex items-start justify-center p-2 rounded-full shadow-md shadow-green-400'>
                        <Image src={`/icons/playRight.svg`} width={15} height={15} alt='play' />
                    </button>
                </div>
            </div>
            <div className='w-1/3 md:w-1/2 flex justify-center '>




            <Atropos shadow={false} className="my-atropos">
            <div className='object-contain'>
                    <Image src={`/images/VRwoman.png`} width={400} height={500} alt='vr_image' />
                </div>

      </Atropos>



                <div className='absolute top-0 left-0 object-contain'>
                    <Image src={`/images/topSectionPatern.png`} width={200} height={400} alt='avatar' />
                </div>
                <div className='absolute top-0 right-0 object-contain'>
                    <Image src={`/images/topSectionPatern.png`} width={200} height={400} alt='avatar' />
                </div>
            </div>
        </div>
    )
}
