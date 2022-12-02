import { useRef, useState } from 'react'
import Image from 'next/image'
import {ProgressBar} from './general'
import { getTranslatedText as t } from '../../localization/config'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
export default function ProjectCard({id,title,fundingGoal,compaignDurationEnd,pledgeList,category,language='',isSaved=false}) {
    const [ishover,setIsHover] = useState(false)
    const cardRef = useRef(null)
    const session = useSession()
    const accountType = session.data?.user?.accountType

    const getDaysDiff = (date)=>{
        let d1 = new Date();   
        let d2 = new Date(new Date(date).toDateString());     
        let diff = d2.getTime() - d1.getTime();   
        return Math.floor(diff / (1000 * 60 * 60 * 24));   
    }

    const getTotalRaised = ()=>{
      let total = 0
      pledgeList.map((pledge)=>total+=Number(pledge.amount))
      return total
    }

    const getPercentage = ()=>{
        let total = getTotalRaised()
        return (total/fundingGoal)*100
    }
    return (
       <div dir={language=='ar' ?'rtl':'ltr'} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} ref={cardRef} className={` bg-white rounded-md ${ishover &&'shadow-lg'} font-bold hover:cursor-pointer font-almarai`}>
            <div style={{backgroundImage:'url("/images/project2.jpeg")',backgroundRepeat:'no-repeat',objectFit:'cover'}} className={`relative min-w-min h-[300px] rounded-t-md`}>
            {ishover &&<div className='absolute w-full h-full bg-black opacity-20'></div>}
            {(accountType && accountType=='b') && <div className={`absolute top-2 right-2 w-[30px] h-[30px] flex items-center justify-center m-3 bg-gray-800 bg-opacity-20 rounded-full hover:bg-opacity-40 hover:cursor-pointer z-40 ${isSaved?'text-red-500':'text-black'}`}>&#9829;</div>}
          </div>
          <Link href={`/projectDetails?id=${id}`}>
            <div className='relative p-5 pt-6 space-y-4 border border-t-0 rounded-b-md border-[#202330] border-opacity-20'>
                <button className='absolute left-5 -top-4 bg-green-500 px-3 py-1 text-gray-100 rounded-sm'>{t(category,language)}</button>
                <h1 className='text-lg'>{title}</h1>
                <div className='flex items-center justify-between text-xs text-gray-400'>
                <h5>{t('raised',language)} : ${getTotalRaised()}</h5>
                <h5>{getPercentage()}%</h5>
                </div>
                <ProgressBar percentage={getPercentage()}/>
                <p className=''>{t('goal',language)} : <span className='text-green-600'>${fundingGoal}</span></p>
                <div dir={language=='ar' ?'rtl':'ltr'} className='flex items-center justify-between bg-gray-100 p-2 rounded-sm text-sm'>
                    <div className='text-slate-400 flex items-center gap-1'><Image src={`/icons/clock.svg`} className='text-bold' width={14} height={14} alt='clock'/> <span>{getDaysDiff(compaignDurationEnd)} {t('daysLeft',language)}</span></div>
                    <div className='text-green-600'>{t('explore',language)} &#8594;</div>
                </div>
            </div>
            </Link>
        </div>
    )
}
