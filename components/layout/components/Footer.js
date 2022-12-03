import Image from 'next/image'
import { getTranslatedText as t} from '../../../localization/config'
export default function Footer({language}) {
  return (
    <div className={`relative w-ull object-contain bg-zinc-700 text-gray-50 p-10`}>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-y-4 font-almarai'>
        <div className='space-y-4'>
          <h1 className='text-5xl font-bold'>WFYB</h1>
          <p className='text-gray-300'>{t('slogan',language)}</p>
          <h3>{t('joinNewsletters',language)}</h3>
          <div dir={language=='ar'?'rtl':'ltr'} className='relative w-fit'>
            <input placeholder={t('email',language)} className='p-3 rounded-3xl text-sm' />
            <button className={`bg-green-500 hover:bg-green-600 w-[35px] h-[35px] flex items-center justify-center p-2 rounded-full absolute  ${language=='ar'?'left-1':'right-1'} top-1/2 -translate-y-1/2`}>&#8594;</button>
          </div>
        </div>
        <div>
          <h2 className='text-3xl font-bold pb-8'>{t('ourProjects',language)}</h2>
          <ul className='text-gray-400 font-bold space-y-4'>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('medicalAndHealth',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('educations',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('filmAndVideo',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('technology',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('desgin',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('fashion',language)}</li>
          </ul>
        </div>
        <div>
          <h2 className='text-3xl font-bold pb-8'>{t('company',language)}</h2>
          <ul className='text-gray-400 font-bold space-y-4'>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('aboutUs',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('latestEvents',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('howItWorks',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('newsAndArticles',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('contactUs',language)}</li>
            <li className='hover:cursor-pointer hover:translate-x-1 hover:text-blue-500'>{t('testimonial',language)}</li>
          </ul>
        </div>
        <div>
          <h2 className='text-3xl font-bold pb-8'>{t('contact',language)}</h2>
          <ul className='space-y-6'>
            <li className='flex gap-4'>
              <div className='bg-green-500 p-4 rounded-full'>
                <Image src={`/icons/telephone.svg`} width={16} height={16} alt='telphone' />
              </div>
              <div>
                <h1 className='text-gray-400 font-bold'>{t('email',language)}</h1>
                <h1>fares@yahoo.com</h1>
              </div>
            </li>
            <li className='flex gap-4'>
              <div className='bg-green-500 p-4 rounded-full'>
                <Image src={`/icons/message.svg`} width={16} height={16} alt='message' />
              </div>
              <div>
                <h1 className='text-gray-400 font-bold'>{t('phoneNumber',language)}</h1>
                <h1>13645713525</h1>
              </div>
            </li>
            <li className='flex gap-4'>
              <div className='bg-green-500 p-4 rounded-full'>
                <Image src={`/icons/location.svg`} width={16} height={16} alt='location' />
              </div>
              <div>
                <h1 className='text-gray-400 font-bold'>{t('location',language)}</h1>
                <h1>Irbid , Jordan</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
