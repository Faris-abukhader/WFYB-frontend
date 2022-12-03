import React from 'react'
import ReviewCard from './ReviewCard'
import {getTranslatedText as t} from '../../localization/config'
export default function PeopleReviews({language}) {
  return (
    <div className='text-center py-20 font-almarai'>
      <h3 className='text-green-500 font-bold text-lg md:text-2xl'>{t('clientsFeedback',language)}</h3>
        <h1 className='text-slate-800 font-bold text-xl md:text-4xl py-4'>{t(`whatPeopleSay`,language)}</h1>
        <div className='w-full py-8 space-y-7 px-6 sm:px-0'>
            <ReviewCard image={`reviewGuy.jpeg`} name={`Faris Abukhader`} job={`Web Developer`} review={t(`dummyReview`,language)}/>
            <ReviewCard image={`reviewGuy.jpeg`} name={`Ahmed Suweidi`} job={`Web Developer`}  review={t(`dummyReview`,language)}/>
            <ReviewCard image={`reviewGuy.jpeg`} name={`Azat `} job={`Web Developer`}  review={t(`dummyReview`,language)}/>
        </div>
    </div>
  )
}
