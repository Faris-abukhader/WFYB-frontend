import Image from 'next/image'
import { getTranslatedText as t } from '../../localization/config'
export default function NoDataFound({label,language}) {
  return (
    <div className='w-full flex items-center justify-center py-10'>
        <div className='text-center text-gray-600 text-sm'>
        <Image src={`/illustrations/noDataFound.svg`} width={120} height={120} layout='responsive' alt='no_data' />
        <p className=''>{t(label,language)}</p>
        </div>

    </div>
  )
}
