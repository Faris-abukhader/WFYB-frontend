import { useState } from 'react'
import Layout from '../components/layout/Layout'
import { AboutUsSection, PopularProjects, TopSection, WhyChooseUsSection,MeetOurTeamMate,StatisticsSection } from '../components/landingPage/landingPage'
export default function Home() {
  const [language,setLanguage] = useState('ar')
  return (
    <Layout>
      <TopSection/>
      <AboutUsSection/>
      <PopularProjects/>
      <WhyChooseUsSection/>
     <MeetOurTeamMate/>
     <StatisticsSection/>
    </Layout>
  )
}
