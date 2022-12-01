import { useState,useContext } from 'react'
import Layout from '../components/layout/Layout'
import { AboutUsSection, PopularProjects, TopSection, WhyChooseUsSection, MeetOurTeamMate, StatisticsSection, PeopleReviews, PromoteProdect } from '../components/landingPage/landingPage'
import { wrapper } from '../store/store'
import axios from 'axios'
import { LocalizationContext } from '../localization/locationlizationContext'
export default function Home({projects}) {
  const {language} = useContext(LocalizationContext)
  return (
    <Layout>
      <TopSection />
      <AboutUsSection />
      <PopularProjects data={projects} language={language} />
      <WhyChooseUsSection />
      <MeetOurTeamMate language={language} />
      <StatisticsSection />
      <PeopleReviews />
      <PromoteProdect />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const projects = await axios.get(`${process.env.API_URL}/project/all/`,{headers:{token:process.env.WEBSITE_TOKEN}})
  return {
      props: {
        projects:projects.data.data
      }
  }

})

