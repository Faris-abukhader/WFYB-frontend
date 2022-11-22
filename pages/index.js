import { useState } from 'react'
import {InputWithLabel} from '../components/general/general'
import Layout from '../components/layout/Layout'
import {getTranslatedText as t} from '../localization/config'
export default function Home() {
  const [language,setLanguage] = useState('ar')
  return (
    <Layout>
      <InputWithLabel/>
      <button onClick={()=>setLanguage('ar')} className='border bg-gray-400 rounded-md hover:bg-gray-600 text-white p-2 hover:ring-2 ring-gray-400'>change language to arabic</button>
      <button onClick={()=>setLanguage('en')} className='border bg-gray-400 rounded-md hover:bg-gray-600 text-white p-2 hover:ring-2 ring-gray-400'>change language to english</button>
      <button onClick={()=>setLanguage('tkm')} className='border bg-gray-400 rounded-md hover:bg-gray-600 text-white p-2 hover:ring-2 ring-gray-400'>change language to turkmen</button>
      <h1 className={`animate__animated animate__zoomIn ${language=='ar'&&' font-almarai'}`}>{t('greeting',language)}</h1>
    </Layout>
  )
}
