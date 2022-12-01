import { useState } from 'react'
import AvatarPickerModel from './AvatarPickerModel'
import Image from 'next/image'
import { getTranslatedText as t } from '../../localization/config'
import { useSession } from 'next-auth/react'
export default function ProfilePicture({ language }) {
    const [showModel, setShowModel] = useState(false)
    const session = useSession()
    const profileImage = session.data?.user?.image

    const toggle = ()=>{
        setShowModel(!showModel)
    }
    return (
        <div className='w-full sm:w-1/3'>
            <section className='w-full p-6 bg-white shadow-md rounded-md'>
                <h1 className='text-xl font-bold py-4 font-almarai'>{t('profilePicture', language)}</h1>
                <div className='relative'>
                    <div className={`absolute bg-gray-50 rounded-full top-0 ${language=='ar'?'right-0':'left-0'} z-20`}>
                        <button onClick={toggle} className=" hover:bg-gray-100 hover:cursor-pointer flex items-center justify-center rounded-full">
                            <Image src={`/icons/edit.svg`} width={25} height={25} alt='edit' />
                        </button>
                    </div>
                    <Image className='rounded-full' src={`/avatar/${profileImage}`} width={80} height={80} alt='avatar' />
                </div>
            </section>
            <AvatarPickerModel show={showModel} toggle={toggle} language={language} data={profileImage} />
        </div>
    )
}
