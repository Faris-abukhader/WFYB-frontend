import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getTranslatedText as t } from '../../localization/config'
import {ProgressBar} from '../general/general'
export default function Bookmarked({id,project,title,fundingGoal,pledgeList,owner,isLast=false,language}) {
  const [totalPledges,setTotalPledges] = useState(0)

  useEffect(()=>{
    let temp = 0
    project?.pledgeList?.map((item)=>temp+=Number(item.amount))
    console.log(temp)
    setTotalPledges(temp)
  },[pledgeList])
  
  return (
    <div dir={language=='ar'?'rtl':'ltr'} className={`${!isLast && 'border-b'} space-y-3 p-4 text-xs font-almarai`}>
        <ul className='flex-row md:flex md:gap-3 text-gray-600'>
            <li><Link href={`/projectDetails?id=${project.id}`}>{t('projectName',language)} :<span  className='text-gray-900 font-bold hover:cursor-pointer hover:text-blue-600'>{project.title}</span></Link></li>
            <li>{t('fundingGoal',language)} : <span className='text-green-700 font-bold'>${project.fundingGoal}</span></li>
            <li>{t('owner',language)} :<span className='text-gray-900 font-bold'>{project.owner?.user?.firstName+' '+project.owner?.user?.lastName}</span></li>
        </ul>
        <div className='flex items-center justify-between text-xs text-gray-400'>
                        <h5>{t('raised', language)} : ${(totalPledges/project.fundingGoal)*100}</h5>
                        <h5>{(totalPledges/project.fundingGoal)*100}%</h5>
                    </div>
        <ProgressBar percentage={(totalPledges/project.fundingGoal)*100} language={language}/>
    </div>
  )
}
