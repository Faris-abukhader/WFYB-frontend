import React from 'react'
import {NoDataFound, ProjectCard} from '../general/general'

export default function ProjectGrid({data,language}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 pt-20'>
    {data && data.length > 0 ? 
        <>
         {data.map((project)=><ProjectCard key={project.id} {...project} language={language}/>)}
         </>
        :
        <NoDataFound label={'noData'}/>
        }
    </div>
  )
}
