import React from 'react'
import Comment from './Comment'

export default function CommentList({data}) {
    console.log(data)
    return (
        <div className='grid grid-cols-1 gap-5'>
            {data && data.length > 1 && data.map((comment,index)=><Comment key={index} {...comment}/>)}
        </div>
    )
}