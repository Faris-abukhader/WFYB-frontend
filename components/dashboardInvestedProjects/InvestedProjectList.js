import React from 'react'
import {NoDataFound} from '../../components/general/general'
export default function InvestedProjectList({language}) {
    const hasData = true
    const data = [
        {
            title:''
        }
    ]
  return (
    <div className='w-full bg-white shadow-lg rounded-md'>
        {hasData?
        <div className='w-full'></div>
        :
        <NoDataFound label={`noInvestedProjectsFound`}/>
        }

        
    </div>
  )
}
