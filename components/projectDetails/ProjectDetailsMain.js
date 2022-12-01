import React from 'react'
import ProjectProgressCard from './ProjectProgressCard'
import ProjectInfo from './ProjectInfo'

export default function ProjectDetailsMain({data,language}) {
  return (
    <div className='grid grid-cols-1 gap-16 px-5 py-10 md:grid-cols-2 md:px-10 lg:px-10 lg:py-16'>
        <ProjectInfo language={language} shortIntro={data?.shortIntro} />
        <ProjectProgressCard language={language} {...data}/>
    </div>
  )
}