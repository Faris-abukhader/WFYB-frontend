import React from 'react'
import { useSelector } from 'react-redux'
import {NoDataFound} from '../general/general'
import Bookmarked from './Bookmarked'
export default function BookmarkedList({language}) {
    console.log(language)
    const data = useSelector((state)=>state.bookmark)
    console.log(data)
  return (
    <div className='w-full bg-white shadow-lg rounded-md'>
        {(data &&  data.length>0)?
        <div className='w-full'>
          {data && data.map((item,index)=><Bookmarked key={index} {...item} language={language} />)}
        </div>
        :
        <NoDataFound label={`noBookmarksFound`} language={language}/>
        }
    </div>
  )
}
