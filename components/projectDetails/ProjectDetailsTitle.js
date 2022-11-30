import React from 'react'

export default function ProjectDetailsTitle() {
  return (
    <div 
        style={{backgroundImage:'url("/images/projectTitle.png")',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'}} 
        
        className = "flex w-full h-80 md:h-[400px] items-center"
    >
      <div className='w-full text-center text-white space-y-4'>
          <h1 className='font-bold text-4xl md:text-6xl'>Crowdfunding Platforms</h1>
          <h3 className='text-lg md:text-2xl'>We Help at Every Step From Concept to Market.</h3>
      </div>
    </div>
  )
}
