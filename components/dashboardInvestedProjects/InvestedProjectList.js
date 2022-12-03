import React from 'react'
import {NoDataFound} from '../../components/general/general'
import InvestedProject from './InvestedProject'
export default function InvestedProjectList({language,data=[]}) {
    console.log(data)
  return (
    <div className='w-full bg-white shadow-lg rounded-md'>
        {data && data.length > 0?
        <div className='w-full'>
          {data && data.map((item,index)=><InvestedProject key={index} {...item} language={language} />)}

        </div>
        :
        <NoDataFound label={`noInvestedProjectsFound`} language={language}/>
        }

        
    </div>
  )
}
