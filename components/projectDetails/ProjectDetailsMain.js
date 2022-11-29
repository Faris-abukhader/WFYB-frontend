import React from 'react'
import ProjectProgressCard from './ProjectProgressCard'
import ProjectInfo from './ProjectInfo'

export default function ProjectDetailsTitle() {
  return (
    <div className='grid grid-cols-1 gap-16 px-5 py-10 md:grid-cols-2 md:px-10 lg:px-10 lg:py-16'>
        <ProjectInfo />

        <ProjectProgressCard 
            title={'Scan the Reality into the 3D Digital World'} image={`/images/reviewGuy.jpeg`} 
            raised={5760} goal={20000} backers={1} daysLeft={34} category={`Video & Films`} campaigns={9}
        />
    </div>
  )
}