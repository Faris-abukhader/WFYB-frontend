import { useState } from 'react'
import Layout from '../components/layout/Layout'
import { AboutUsSection, PopularProjects, TopSection, WhyChooseUsSection, MeetOurTeamMate, StatisticsSection, PeopleReviews, PromoteProdect } from '../components/landingPage/landingPage'
export default function Home() {
  const [language, setLanguage] = useState('ar')
  return (
    <Layout>
      <TopSection />
      <AboutUsSection />
      <PopularProjects />
      <WhyChooseUsSection />
      <MeetOurTeamMate />
      <StatisticsSection />
      <PeopleReviews />
      <PromoteProdect />
    </Layout>
  )
}
