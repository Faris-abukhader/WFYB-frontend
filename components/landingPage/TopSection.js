import Image from 'next/image'
import Atropos from 'atropos/react';
import {getTranslatedText as t} from '../../localization/config'
export default function TopSection({language}) {
    return (
        <div>
            <div className='relative flex items-center justify-around h-fit px-4 overflow-hidden font-almarai'>
                <div className='w-1/2 space-y-3 md:space-y-4 lg:space-y-5'>
                    <h1 className='animate__animated animate__fadeIn animate__slower text-lg md:text-3xl lg:text-6xl font-bold leading-loose' style={{lineHeight:'1.3'}}>{t('topSectionTitle',language)}</h1>
                    <p className={`animate__animated animate__fadeInUp animate__slow text-xs md:text-md lg:text-lg text-gray-600 w-1/2 ${language=='ar'?'border-r-2':'border-l-2'}  px-2 border-green-500`}>{t('topSectionSubtitle',language)}</p>
                    <div className='flex items-center gap-3'>
                        <button className='animate__animated animate__fadeInLeft animate__slow bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-2xl px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm lg:text-md text-zinc-50'>{t('explore',language)}</button>
                        <button className='animate__animated animate__fadeInRight animate__slow flex items-start justify-center p-2 rounded-full shadow-md shadow-green-400'>
                            <Image src={`/icons/playRight.svg`} width={15} height={15} alt='play' className='hover:cursor-pointer' />
                        </button>
                    </div>
                </div>
                <div className='w-1/3 md:w-1/2 flex justify-center '>
                    <Atropos shadow={false} className="my-atropos">
                        <div className='object-contain animate__animated animate__slideInUp animate__slow'>
                            <Image src={`/images/VRwoman.png`} width={400} height={500} alt='vr_image' />
                        </div>
                    </Atropos>
                    <div className='absolute top-0 left-0 object-contain -z-10'>
                        <Image src={`/images/topSectionPatern.png`} width={200} height={400} alt='avatar' />
                    </div>
                    <div className='absolute top-0 right-0 object-contain -z-10'>
                        <Image src={`/images/topSectionPatern.png`} width={200} height={400} alt='avatar' />
                    </div>
                </div>
            </div>
            <div style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundSize: '100% 90%' }} className={`flex items-center justify-between bg-green-500 px-4 bg-[url('/images/topSectionBackgroundAsset.png')] object-contain w-full h-[100px]  md:h-[150px] lg:h-[200px] font-almarai`}>
                <div className='text-md md:text-2xl lg:text-4xl text-zinc-100 font-bold'>{t('ReadyToRaiseFundsForIdea',language)}</div>
                <button className='flex items-center gap-3 outline outline-zinc-50 rounded-2xl px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm lg:text-md text-zinc-50 hover:bg-zinc-50 hover:text-black hover:font-bold'>
                    {t('explore',language)} &#8594;
                </button>
            </div>
        </div>
    )
}
