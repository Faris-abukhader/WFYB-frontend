import Link from 'next/link'
import { getPagesList } from '../../../utils/utils'
import { useState } from 'react'
import AddNewProjectModel from './AddNewProjectModel'
import { getTranslatedText as t } from '../../../localization/config'
import { useSession } from 'next-auth/react'
export default function Header({ currentPage, language }) {
    const session = useSession()
    const accountType = session?.data?.user?.accountType
    const [showModel, setShowModel] = useState(false)
    const toggle = () => {
        setShowModel(!showModel)
    }
    return (
        <>
            <div style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundSize: '100% 85%' }} className={`relative w-full h-80 bg-[url('/images/dashboardHeader.jpeg')] object-contain font-bold bg-gray-100`}>
                <div dir={language == 'ar' ? 'rtl' : 'ltr'} className={`hidden sm:block absolute bottom-10 right-4 bg-gray-100 p-3 rounded-md ${language == 'ar' && 'font-almarai'}`}>{t('dashboard', language)} / {t(currentPage, language)}</div>
            </div>
            <div className='bg-gray-100 px-4 sm:px-0'>
                <div dir={language == 'ar' ? 'rtl' : 'ltr'} style={{ maxWidth: '850px' }} className={`w-full flex items-center justify-center bg-white gap-6 p-4 shadow-lg rounded-md mx-auto ${accountType == 'b' && 'h-[80px]'}`}>
                    <ul className='w-full flex items-center gap-6 mx-auto text-sm sm:text-md font-bold font-almarai'>
                        {accountType && getPagesList(accountType).map((item, index) => {
                            return (
                                <Link href={`/${item.url}`} key={index}> <li dir={language == 'ar' ? 'rtl' : 'ltr'} className={`hover:cursor-pointer hover:border-b-2 border-green-500 transition-all duration-300`}>{t(item.title, language)}</li></Link>
                            )
                        })}
                    </ul>
                    {accountType == 's' && <button onClick={toggle} className='bg-green-500 text-xs   py-3 w-fit- w-[140px] rounded-md hover:bg-green-600 hover:ring ring-green-700 text-white font-almarai'>{t('addNewProject',language)}</button>}
                </div>
                <AddNewProjectModel show={showModel} toggle={toggle} language={language} />
            </div>
        </>
    )
}
