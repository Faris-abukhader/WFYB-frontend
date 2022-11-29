import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getTranslatedText as t } from '../../localization/config'
import {ProgressBar} from '../general/general'
export default function Bookmarked({id,title,fundingGoal,pledgeList,owner,isLast=false,language}) {
  const [totalPledges,setTotalPledges] = useState(0)

  console.log(owner)
  console.log(pledgeList)
  console.log(owner)


  useEffect(()=>{
    let temp = 0
    pledgeList?.map((item)=>temp+=item.amount)
    setTotalPledges(temp)
    console.log(temp)

  },[pledgeList])
  /**
   *  "id": "claj8wnz40000nr4o8hg1ttu1",
                "title": "Jawaker LTC",
                "fundingGoal": "567000",
                "pledgeList": [
                    {
                        "amount":3434
                    },
                    {
                        "amount":5667
                    },
                    {
                        "amount":9867
                    },
                ],
                "owner":{
                    "user":{
                        "firstName":"Ahmed",
                        "lastName":"Suweidi"
                    }
                }   
            }
   */
  return (
    <div dir={language=='ar'?'rtl':'ltr'} className={`${!isLast && 'border-b'} space-y-3 p-4 text-xs`}>
        <ul className='flex-row md:flex md:space-x-3 text-gray-600'>
            <li><Link href={`/projectDetails?id=${id}`}>{t('projectName',language)} :<span  className='text-gray-900 font-bold hover:cursor-pointer hover:text-blue-600'>{title}</span></Link></li>
            <li>{t('fundingGoal',language)} : <span className='text-green-700 font-bold'>${fundingGoal}</span></li>
            <li>{t('owner',language)} :<span className='text-gray-900 font-bold'>{owner?.user?.firstName+' '+owner?.user?.lastName}</span></li>
        </ul>
        <ProgressBar percentage={(totalPledges/fundingGoal)*100}/>
    </div>
  )
}
