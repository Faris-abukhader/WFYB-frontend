import { useContext } from 'react'
import Layout from '../components/layout/Layout'
import { AboutUsSection, PopularProjects, TopSection, WhyChooseUsSection, MeetOurTeamMate, StatisticsSection, PeopleReviews, PromoteProdect } from '../components/landingPage/landingPage'
import { wrapper } from '../store/store'
import axios from 'axios'
import { LocalizationContext } from '../localization/locationlizationContext'
import { getSession } from 'next-auth/react'
export default function Home({projects,bookmarkList}) {
  const {language} = useContext(LocalizationContext)
  console.log(language)
  return (
    <Layout>
      <TopSection />
      <AboutUsSection />
      {(projects && projects.length > 0) && <PopularProjects data={projects} language={language} bookmarkList={bookmarkList} />}
      <WhyChooseUsSection />
      <MeetOurTeamMate language={language} />
      <StatisticsSection />
      <PeopleReviews />
      <PromoteProdect />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const session = await getSession(ctx)
  let bookmarks = []
  if(session.user?.accountType=='b'){
    const id = session.user.id
    const token = session.user.token
    const bookmarkRequest = await axios.get(`${process.env.API_URL}/bookmark/backer/${id}`,{headers:{token}})
    bookmarks = bookmarkRequest.data
    if(bookmarks.length > 0){
      bookmarks = bookmarks.map((bookmark)=>{return bookmark?.project?.id})
    }
    console.log(bookmarks)
  }
  const projects = await axios.get(`${process.env.API_URL}/project/all/`,{headers:{token:process.env.WEBSITE_TOKEN}})
  return {
      props: {
        projects:projects.data.data,
        bookmarkList:bookmarks
      }
  }

})

