import React from 'react'
import Layout from '../components/layout/Layout'
import Image from 'next/image'

export default function NotFound() {
  return (
    <Layout>
        <div className='w-full h-[640px] flex flex-col space-y-16 justify-center items-center'>
            <Image className='w-full h-96'
                src={`/illustrations/pageNotFound.svg`} width={100} height={100} alt="404 Error Message" 
            />
            <h1 className='font-bold text-5xl'>
                <span className=''>404 Error . </span>
                <span className='text-green-600'>Page Not Found</span>
            </h1>
        </div>
    </Layout>
  )
}
