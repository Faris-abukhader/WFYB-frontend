import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ProgressBar from '../general/ProgressBar'
import { getTranslatedText as t } from '../../localization/config'
import StatisticCard from '../dashboardHomePage/StatisticCard'
export default function ProjectProgressCard({title,raised,fundingGoal,pledgeList=[],compaignDurationEnd,backers,daysLeft,category,campaigns,owner,language}) {
    const cardRef = useRef(null)

    const [donationAmount, setDonationAmount] = useState(0)

    const detailsArray = [
        {value: raised, title: 'Pledged'}, 
        {value: backers, title: 'Backers'}, 
        {value: daysLeft, title: 'Days Left'}
    ]


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
        <div dir={language=='ar'?'rtl':'ltr'} ref={cardRef} className={`bg-white rounded-md font-bold font-almarai`}>
            <div className=' relative pt-6 space-y-4 rounded-b-md border-[#202330] border-opacity-20 lg:p-5'>
                <button className='absolute left-0 top-0 bg-green-500 px-3 py-1 text-gray-100 rounded-sm'>
                    {t(category,language)}
                </button>
                <h1 className='text-3xl'>{title}</h1>
                <div dir={language=='ar'?'rtl':'ltr'} className="flex items-center py-4 space-y-0 gap-4 bg-white rounded-xl">
                    <Image className="block mx-0 rounded-full" src={`/avatar/${owner?.user?.avatar}`}width={40} height={40} alt="Agent's Face" />
                    <div className="space-y-2">
                        <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">{owner?.user?.firstName+' '+owner?.user?.lastName}</p>
                        <p className="text-slate-500 font-medium text-sm"> {owner?._count?.projects} {t('projects',language)}</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                <StatisticCard amount={getDaysDiff(compaignDurationEnd)} title={t('daysLeft',language)} isMoney={false}/>
                 <StatisticCard amount={pledgeList.length??0} title={t('totalBacked',language)}/>    
                </div>
                <div className='flex items-center justify-between text-xs text-gray-400'>
                    <h5>{t('raised',language)} : ${getTotalRaised()}</h5>
                    <h5>{getPercentage()}%</h5>
                </div>
                <ProgressBar percentage={getPercentage()} language={language}/>
                <p className=''>{t('goal',language)} : <span className='text-green-600'>${fundingGoal}</span></p>
                <div className='flex w-full h-12 gap-2'>
                    {
                        [10, 20, 30, 40].map((item) => {
                            return(
                                <button
                                    key={item} 
                                    className='w-20 h-full text-base font-semibold border-2 border-slate-200 
                                                    rounded-full hover:border-green-600'
                                    onClick={() => {setDonationAmount(item)}}
                                >
                                    ${item}
                                </button>
                            )
                        })
                    }   
                </div>
                <div className="flex w-full h-12 gap-2">
                    <span className='flex w-1 h-full justify-center items-center text-xl'>$</span>
                    <button className='w-20 h-full text-base font-semibold border-2 border-slate-200 
                                        rounded-full hover:border-green-600 focus:border-green-600'>
                        <input 
                            className='w-1/2 h-full text-xl text-center focus:outline-none active:outline-none'
                            type="number" name="quantity" min="10"
                            value={donationAmount}
                            onChange={(event) => {setDonationAmount(event.target.value)}}
                        />
                    </button>
                    <button dir={language=='ar'?'rtl':'ltr'} className='bg-green-600 py-2 w-60 h-full rounded-3xl text-lg text-zinc-50 gap-0
                                        hover:opacity-90 hover:gap-2 transition-all duration-300'> 
                        <span dir={language=='ar'?'rtl':'ltr'}>{t('backProject',language)} &#8594;</span> 
                    </button>
                </div>
            </div>
        </div>
    )
}
