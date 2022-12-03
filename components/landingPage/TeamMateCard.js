import { getTranslatedText as t } from '../../localization/config'
export default function TeamMateCard({language,people}) {
  return (
    <div className='flex-row space-y-5 md:flex items-center md:gap-6 w-full h-full shadow-md rounded-md'>
        <div style={{backgroundImage:'url("/images/teamMate1.jpeg")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className='w-full md:w-1/4 h-[450px] rounded-l-md'></div>
      <div className='space-y-8 px-4 md:px-10 font-almarai'>
        <h4 className='text-green-500 font-bold text-lg md:text-2xl'>{t('topFundingStories',language)}</h4>
        <h1 className='text-slate-800 font-bold text-xl md:text-4xl'>{t(people,language)}</h1>
        <p className='text-xs text-gray-600'>{t('dummyReview',language)}</p>
        <button className=' bg-black  py-2 w-[130px] rounded-3xl text-zinc-50 hover:opacity-80 hover:gap-1 transition-all duration-300'> <span>{t('learnMore',language)}</span> <span className=''>&#8594;</span></button>
      </div>
    </div>
  )
}
