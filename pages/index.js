import { useState } from 'react'
import Layout from '../components/layout/Layout'
import { TopSection } from '../components/landingPage/landingPage'
export default function Home() {
  const [language,setLanguage] = useState('ar')
  return (
    <Layout>
      <TopSection/>
      
    </Layout>
  )
}
