import React from 'react'

export default function ProjectRow({isLast=false,title,shortIntro,projectType,createdAt,clickHandler}) {
  return (
    <div onClick={clickHandler} className={`flex items-center justify-between p-4 ${isLast&&'border-b'} hover:bg-gray-100 hover:cursor-pointer`}>
        <div>
        <h1 className='font-bold text-xl'>{title}</h1>
        <p className='text-gray-400 text-xs'>{shortIntro}</p>
        </div>
        <div className='flex-row justify-end'>
            <div className='flex justify-end'>
            <h4 className='bg-zinc-200 w-fit p-1 rounded-md text-gray-700 text-sm'>{projectType}</h4>
            </div>
            <p className='text-xs'>{ new Date(createdAt).toLocaleString() }</p>
        </div>


    </div>
  )
}
