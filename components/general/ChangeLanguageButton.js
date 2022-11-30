import { useContext, useEffect, useState } from 'react'
import {languageList} from '../../utils/utils'
import {CustomDropdown} from './general'
import { useRouter } from 'next/router'
import { LocalizationContext } from '../../localization/locationlizationContext'
export default function LanguagePicker({selectHandler}) {
    const {locale,pathname} = useRouter()
    const router = useRouter()
    const [targetLanguage,setTargetLanguage] = useState({name:"English", local:"English",code:"en",flag:'🇬🇧'})
    const {language} = useContext(LocalizationContext)

    const handleClick = (code)=>{
        let languageCode = languageList.filter((item)=>item.code==code)[0].code
        router.push(pathname,pathname,{locale:languageCode})
        setTargetLanguage(languageList.filter((item)=>item.code==languageCode)[0])   
        selectHandler(languageList.filter((item)=>item.code==languageCode)[0])
    }

    useEffect(()=>{
        let languageCode = languageList.filter((item)=>item.code==locale)[0].code
        setTargetLanguage(languageList.filter((item)=>item.code==languageCode)[0])    
    },[])

    const Button = ()=>{
        return <button className='w-[43px] h-[43px] rounded-full bg-zinc-200 font-almarai'><span className=''>{targetLanguage.flag}</span></button>
    }
  return (
    <div className='w-fit'>
    <CustomDropdown Component={Button} language={language}>
        {languageList && languageList.map((item,index)=><CustomDropdown.Item key={index} hasHandler={true} onClick={()=>handleClick(item.code)}>{item.local+' '+item.flag}</CustomDropdown.Item>)}
    </CustomDropdown>
    </div>
  )
}
