import React from 'react'
import Image from 'next/image'

export default function Story({backer, reward}) {
    return (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5'>
            <div className='md:col-span-2'>
                <div className='flex flex-col space-y-5'>
                    <h1 className='text-3xl font-bold'>Story</h1>
                    <p className='text-lg text-slate-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Praesent vulputate sed mauris vitae pellentesque. 
                        Nunc ut ullamcorper libero. Aenean fringilla mauris quis risus laoreet interdum. 
                        Quisque imperdiet orci in metus aliquam egestas. Fusce elit libero, imperdiet nec orci quis.
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-5 my-12'>
                        <Image className='w-full col-span-2'
                            src={`/images/story1.jpg`} width={500} height={500} alt="Story" />
                        <Image 
                            src={`/images/story2.jpg`} width={500} height={500} alt="Story" />
                        <Image 
                            src={`/images/story3.jpg`} width={500} height={500} alt="Story" />
                </div>
                <div className='flex flex-col space-y-5'>
                    <h1 className='text-3xl font-bold'>Why Donate Our Products</h1>
                    <ul className='text-lg text-slate-500 list-disc list-inside'>
                        <li>Nsectetur cing mauris quis risus laoreet elit.</li>
                        <li>Suspe ndisse dolor sit amet suscipit sagittis leo.</li>
                        <li>Entum estibulum metus aliquam egestas dignissim posuere.</li>
                        <li>If you are going to use a auctor nec purus passage.</li>
                    </ul>
                    <p className='text-lg text-slate-500'>
                        Nulla in ex at mi viverra sagittis ut non erat raesent nec congue elit. 
                        Nunc arcu odio, convallis a lacinia ut, tristique id eros. 
                        Suspendisse leo erat, pellentesque et commodo vel, varius in felis. 
                        Nulla mollis turpis porta justo eleifend volutpat. Cras malesuada nec magna eu blandit.
                    </p>
                </div>
            </div>

            <div className='md:col-span-1 flex flex-col h-1/2 space-y-5'>
                <h1 className='text-3xl font-bold'>Rewards</h1>
                <div className='px-10 py-14 bg-gray-100'>
                    <h2 className='text-2xl font-bold'><span className=' text-green-500'>$320</span> or more</h2>
                    <Image className='w-full my-5' src={`/images/rewards.jpg`} width={300} height={300} alt="Rewards"/>
                    <p className='text-lg text-slate-500'>
                        But must explain to you how all this mistaken idea of denouncing plasue
                        and praising pain was born.
                    </p>
                    <p className='text-xl font-bold my-5'>May, 2023</p>
                    <div className='flex flex-col my-5 text-md text-slate-500'>
                        <h3>Estimated Delivery</h3>
                        <div>
                            <p>{backer} backers</p>
                        </div>
                        <div>
                            <p>{reward} rewards left</p>
                        </div>
                    </div>
                    <button className='bg-green-600 py-2 w-48 h-12 rounded-3xl text-lg font-bold text-zinc-50 space-x-2
                                        hover:opacity-90 hover:space-x-3 transition-all duration-300'> 
                        <span>Select Reward</span> 
                        <span>&#8594;</span>
                    </button>
                </div>
            </div>
        </div>

    )
}
