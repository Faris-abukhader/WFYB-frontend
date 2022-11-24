import React from 'react'
import {ProjectCard} from '../general/general'

export default function PopularProjects() {
  return (
    <div style={{backgroundImage:'linear-gradient(to bottom, #202330, #202330 50%, white 50%, white)'}} className='w-full py-8 pt-32'>
        <h3 className='text-green-500 text-md font-bold text-center'>POPULAR PROJECTS</h3>
        <h1 className='text-gray-50 text-3xl md:Text-4xl lg:text-6xl font-bold text-center'>Explore Our Porjects</h1>
       
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 pt-20'>
       <ProjectCard title={'Scan the Reality into the 3D Digital World'} raised={5760} goal={20000} daysLeft={34} category={`Video & Films`}/>
       <ProjectCard title={'Scan the Reality into the 3D Digital World'} raised={5760} goal={20000} daysLeft={34} category={`Video & Films`}/>
       <ProjectCard title={'Scan the Reality into the 3D Digital World'} raised={5760} goal={20000} daysLeft={34} category={`Video & Films`}/>
       <ProjectCard title={'Scan the Reality into the 3D Digital World'} raised={5760} goal={20000} daysLeft={34} category={`Video & Films`}/>
       <ProjectCard title={'Scan the Reality into the 3D Digital World'} raised={5760} goal={20000} daysLeft={34} category={`Video & Films`}/>
       <ProjectCard title={'Scan the Reality into the 3D Digital World'} raised={5760} goal={20000} daysLeft={34} category={`Video & Films`}/>

       </div>
    </div>
  )
}
