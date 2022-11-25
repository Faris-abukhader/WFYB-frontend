import React from 'react'
import Carousel from 'nuka-carousel';
import TeamMateCard from './TeamMateCard';

const justButton = ()=>{
  return (
    <button className='w-[30px] h-[30px] rounded-md bg-red-800 shadow-md'>
      next
    </button>
  )
}
export default function MeetOurTeamMate() {
  return (
    <div className='px-8'>
   <Carousel style={{height0:'80vh'}}>
    <TeamMateCard/>
    <TeamMateCard/>
   </Carousel>
   </div>
  )
}
