import InputWithLabel from '../general/InputWithLabel'
import { getTranslatedText as t } from '../../localization/config'
import { useEffect } from 'react'
import GetRequest from '../../hooks/GetRequest'
export default function SearchingBox({ setIsSearching, language, searchContent, setSearchContent }) {
    const { isLoading, sendGetRequest } = GetRequest()

    const handleSearching = (e) => {
        sendGetRequest(`project/search?title=${e.target.value}`, process.env.WEBSITE_TOKEN, true)
        setSearchContent(e.target.value)
    }

    useEffect(() => {
        setIsSearching(isLoading)
    }, [isLoading])
    return (
        <div className='w-full h-[120px] flex items-center justify-center p-8 mt-20'>
            <div className='w-full bg-gradient-to-r from-green-400 to-green-500 shadow-lg shadow-green-300  rounded-lg p-4 text-center'>
                <h1 className='font-bold text-xl ms:text-2xl py-2 font-almarai text-zinc-100'>{t('searchForProject', language)}</h1>
                <InputWithLabel borderColor='border-gray-200' value={searchContent} inputHandler={handleSearching} isValid={true} />
            </div>
        </div>
    )
}
