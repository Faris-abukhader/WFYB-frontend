import Image from 'next/image'
import { PulseButton } from '../general/general'
import { getTranslatedText as t } from '../../localization/config'
export default function WhyChooseUsSection({language}) {
  return (
    <div id='choosingUs' className='flex-row sm:flex items-center justify-between sm:px-10 w-full p-8'>
      <div className='p-8 font-almarai'>
        <h3 className='text-green-500 font-bold text-lg md:text-2xl'>{t('whatWeDo',language)}</h3>
        <h1 className='text-slate-800 font-bold text-xl md:text-4xl py-4'>{t('whyChooseUs',language)}</h1>
        <section className='space-y-4 pt-8'>
          <div className='flex items-center gap-5'>
            <div className=' rounded-full'>
              <Image src={`/icons/easyPayout.svg`} width={30} height={30} alt='check' />
            </div>
            <div>
              <h1 className='font-bold text-lg'>{t('fastAndEeasyPayouts',language)}</h1>
              <h4 className='text-sm text-gray-500'>{t('fastAndEeasyPayouts',language)}</h4>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <div className=' rounded-full'>
              <Image src={`/icons/globalPayment.svg`} width={30} height={30} alt='check' />
            </div>
            <div>
              <h1 className='font-bold text-lg'>{t('globalPaymentProcessing',language)}</h1>
              <h4 className='text-sm text-gray-500'>{t('globalPaymentProcessing',language)}</h4>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <div className=' rounded-full'>
              <Image src={`/icons/paymentOptions.svg`} width={30} height={30} alt='check' />
            </div>
            <div>
              <h1 className='font-bold text-lg'>{t('manyPaymentOptions',language)}</h1>
              <h4 className='text-sm text-gray-500'>{t('manyPaymentOptions',language)}</h4>
            </div>
          </div>
        </section>
      </div>
      <div className='relative object-contain flex justify-center w-full sm:w-2/3'>
        <div className='absolute mx-auto top-1/2 -translate-y-1/2'>
          <PulseButton hasHandler={false}>▶️</PulseButton>
        </div>
        <Image src={`/images/whyYouChooseUs.jpeg`} width={600} height={400} alt='vr_image' className='rounded-md' />
      </div>
    </div>
  )
}
