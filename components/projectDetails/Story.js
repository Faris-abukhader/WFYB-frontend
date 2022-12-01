import Image from 'next/image'
import { getTranslatedText as t } from '../../localization/config'
export default function Story({ backer, description, shortIntro, rewardList, language }) {
    return (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5 font-almarai pt-10'>
            <div className='md:col-span-2'>
                <div className='flex flex-col space-y-5'>
                    <h1 className='text-3xl font-bold'>{t('description', language)}</h1>
                    <p className='text-lg text-slate-500'>{shortIntro}</p>
                </div>
                <div className='grid grid-cols-2 gap-5 my-12'>
                    <Image className='w-full col-span-2'
                        src={`/images/story1.jpg`} width={500} height={500} alt="Story" />
                    <Image
                        src={`/images/story2.jpg`} width={500} height={500} alt="Story" />
                    <Image
                        src={`/images/story3.jpg`} width={500} height={500} alt="Story" />
                </div>
                <p className='text-lg text-slate-500'>{description}</p>
            </div>
            {rewardList && rewardList.length > 0 && <div className='md:col-span-1 flex flex-col h-1/2 space-y-5'>
                <h1 className='text-3xl font-bold'>{t('rewardList', language)}</h1>
                <div dir={language == 'ar' ? 'rtl' : 'ltr'} className='px-10 py-14 bg-gray-100 rounded-md'>
                    {rewardList.map((reward, index) => <div key={index} className='space-y-2 border-b py-2'>
                        <h1 className='text-2xl font-bold'>{reward.title}</h1>
                        <h2 className='text-xl font-bold text-green-500'>{reward.amount}$</h2>
                        <p className='text-lg text-slate-500'>{reward.description}</p>
                        <button className='bg-green-600  px-3 py-1 rounded-3xl text-sm font-bold text-zinc-50
                                        hover:opacity-90 hover:space-x-3 transition-all duration-300'>
                            <span>{t('selectReward', language)}</span>
                        </button>
                    </div>)}

                </div>
            </div>}
        </div>
    )
}
