import { getTranslatedText as t } from '../../localization/config'
export default function ProjectDetailsTitle({language}) {
  return (
    <div style={{backgroundImage:'url("/images/projectTitle.png")',backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className = "flex w-full h-80 md:h-[400px] items-center">
      <div className='w-full text-center text-white space-y-7 font-almarai'>
          <h1 className='font-bold text-4xl md:text-6xl'>{t('crowdfundingPlatform',language)}</h1>
          <h3 className='text-lg md:text-2xl'>{t('slogan',language)}</h3>
      </div>
    </div>
  )
}
