import React from 'react'
import ProjectProgressCard from './ProjectProgressCard'
import Image from 'next/image'

export default function ProjectDetailsTitle() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4 py-20'>
        <ProjectProgressCard 
            title={'Scan the Reality into the 3D Digital World'} image={`/images/reviewGuy.jpeg`} 
            raised={5760} goal={20000} backers={1} daysLeft={34} category={`Video & Films`} campaigns={9}
        />
    </div>
    /* <Image src={`/images/whyYouChooseUs.jpeg`} width={500} height={500} alt='project title'/> */
  )
}