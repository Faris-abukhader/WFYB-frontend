import Link from 'next/link'
import { getTranslatedText as t } from '../../localization/config'
export default function InvestedProject({country,amount,project,isLast=false,language}) {
  return (
    <div className={`flex items-center justify-between ${!isLast && 'border-b'} p-4 text-xs`}>
        <div className='text-gray-600'>
            <h4>{t('country',language)} :<span className='text-gray-900 font-bold'>{country}</span></h4>
            <h4>{t('amount',language)} : <span className='text-green-700 font-bold'>${amount}</span></h4>
        </div>
        <div>
        <ul className='flex-row md:flex md:gap-3 text-gray-600'>
            <li><Link href={`/projectDetails?id=${project?.id}`}>{t('projectName',language)} :<span  className='text-gray-900 font-bold hover:cursor-pointer hover:text-blue-600'>{project?.title}</span></Link></li>
            <li>{t('fundingGoal',language)} : <span className='text-green-700 font-bold'>${project?.fundingGoal}</span></li>
            <li>{t('pledgesReceived',language)} :<span className='text-gray-900 font-bold'>{project?._count?.pledgeList}</span></li>
        </ul>
        </div>
    </div>
  )
}
