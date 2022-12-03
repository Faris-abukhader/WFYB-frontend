import { useRef, useState } from 'react'
import Image from 'next/image'
import { ProgressBar } from './general'
import { getTranslatedText as t } from '../../localization/config'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import PostRequest from '../../hooks/PostRequest'
import DeleteRequest from '../../hooks/DeleteRequest'
export default function ProjectCard({ id, title, fundingGoal, compaignDurationEnd, pledgeList, category, language = '', isSaved = false,bookmarkList=[] }) {
    const cardRef = useRef(null)
    const session = useSession()
    const {sendDeleteRequest , isDeleteLoading ,isDeleteError} = DeleteRequest()
    const {sendPostRequest , isLoading ,isError} = PostRequest()
    const userId = session.data?.user?.id
    const accountType = session.data?.user?.accountType
    const token = session.data?.user?.token
    const [ishover, setIsHover] = useState(false)
    const [saved, setSaved] = useState(isSaved)

    const getDaysDiff = (date) => {
        let d1 = new Date();
        let d2 = new Date(new Date(date).toDateString());
        let diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    const getTotalRaised = () => {
        let total = 0
        pledgeList.map((pledge) => total += Number(pledge.amount))
        return total
    }

    const getPercentage = () => {
        let total = getTotalRaised()
        return (total / fundingGoal) * 100
    }

    const toggleIsSaved = (isSaved)=>{
        let bookMarkId = ''
        bookmarkList.map((bookmark)=>{if(bookmark.projectId ==id)bookMarkId=bookmark.id})
        if(isSaved){
            sendDeleteRequest(`bookmark/${bookMarkId}`,token,language,true)
            .then(()=>{
                if(!isDeleteLoading && !isDeleteError){
                    setSaved(!isSaved)
                    console.log(`after delete ${!isSaved}`)
                }
            })
        }else{
            sendPostRequest('bookmark',{backerId:userId,projectId:id},token,language,true)
            .then(()=>{
                if(!isLoading && !isError){
                    setSaved(!isSaved)
                    console.log(`after add ${!isSaved}`)
                }
            })
        }

    }
    return (
        <div dir={language == 'ar' ? 'rtl' : 'ltr'} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} ref={cardRef} className={` bg-white rounded-md ${ishover && 'shadow-lg'} font-bold hover:cursor-pointer font-almarai`}>
            <div style={{ backgroundImage: `url("/images/project${Math.floor(Math.random()*9+1)}.jpeg")`, backgroundRepeat: 'no-repeat', objectFit: 'fit' }} className={`relative min-w-min h-[300px] rounded-t-md`}>
                {ishover && <div className='absolute w-full h-full bg-black opacity-20'></div>}
                {(accountType && accountType == 'b') && <div onClick={()=>toggleIsSaved(isSaved)} className={`absolute top-2 right-2 w-[30px] h-[30px] flex items-center justify-center m-3 bg-gray-800 bg-opacity-20 rounded-full hover:bg-opacity-40 hover:cursor-pointer z-40 ${saved ? 'text-red-500' : 'text-black'}`}>&#9829;</div>}
            </div>
            <Link href={`/projectDetails?id=${id}`}>
                <div className='relative p-5 pt-6 space-y-4 border border-t-0 rounded-b-md border-[#202330] border-opacity-20'>
                    <button className='absolute left-5 -top-4 bg-green-500 px-3 py-1 text-gray-100 rounded-sm'>{t(category, language)}</button>
                    <h1 className='text-lg'>{title}</h1>
                    <div className='flex items-center justify-between text-xs text-gray-400'>
                        <h5>{t('raised', language)} : ${getTotalRaised()}</h5>
                        <h5>{getPercentage()}%</h5>
                    </div>
                    <ProgressBar percentage={getPercentage()} language={language} />
                    <p className=''>{t('goal', language)} : <span className='text-green-600'>${fundingGoal}</span></p>
                    <div dir={language == 'ar' ? 'rtl' : 'ltr'} className='flex items-center justify-between bg-gray-100 p-2 rounded-sm text-sm'>
                        <div className='text-slate-400 flex items-center gap-1'><Image src={`/icons/clock.svg`} className='text-bold' width={14} height={14} alt='clock' /> <span>{getDaysDiff(compaignDurationEnd)} {t('daysLeft', language)}</span></div>
                        <div className='text-green-600'>{t('explore', language)} &#8594;</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
