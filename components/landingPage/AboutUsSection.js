import React from 'react'
import Image from 'next/image'
import { getTranslatedText as t } from '../../localization/config'
export default function AboutUsSection({language}) {
  return (
    <div id='aboutUs' className='flex-row sm:flex sm:items-start bg-green-300 bg-opacity-20 pt-20'>
        <div className='object-contain flex justify-center w-full sm:w-1/2'>
        <Image src={`/images/techGuy.png`} width={420} height={480} alt='vr_image' />
      </div>
      <div className='w-full sm:w-1/2 space-y-4 p-4 sm:px-0 sm:mt-4 font-almarai'>
        <h3 className='text-green-500 font-bold text-lg md:text-2xl'>{t('aboutUs',language)}</h3>
        <h1 className='text-slate-800 font-bold text-xl md:text-4xl'>{t('aboutUsSectionTitle',language)}</h1>
        <p className='text-slate-600 text-sm'>{t('aboutUsSectionSubTitle',language)}</p>        
        <div className='space-y-8 py-5'>
        <div className='flex items-center gap-5'>
          <div className='bg-green-600 rounded-full'>
            <Image src={`/icons/check.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold'>{t('highestSuccessRates',language)}</h1>
            <h4 className='text-xs'>{t('highestSuccessRates',language)}</h4>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='bg-green-600 rounded-full'>
            <Image src={`/icons/check.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold'>{t('raiseFundsWithCrowdfunding',language)}</h1>
            <h4 className='text-xs'>{t('raiseFundsWithCrowdfunding',language)}</h4>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='bg-green-600 rounded-full'>
            <Image src={`/icons/check.svg`} width={30} height={30} alt='check'/>
          </div>
          <div>
            <h1 className='font-bold'>{t('millionsInFunding',language)}</h1>
            <h4 className='text-xs'>{t('millionsInFunding',language)}</h4>
          </div>
        </div> 
        <button  className=' bg-black  py-2 w-[130px] rounded-3xl text-zinc-50 hover:opacity-80 hover:gap-1 transition-all duration-300'> <span>{t('learnMore',language)}</span> <span className=''>&#8594;</span></button>
        </div>    
      </div>
    </div>
  )
}
