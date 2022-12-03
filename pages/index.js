import { useContext } from 'react'
import Layout from '../components/layout/Layout'
import { AboutUsSection, PopularProjects, TopSection, WhyChooseUsSection, MeetOurTeamMate, StatisticsSection, PeopleReviews, PromoteProdect } from '../components/landingPage/landingPage'
import { wrapper } from '../store/store'
import axios from 'axios'
import { LocalizationContext } from '../localization/locationlizationContext'
import { getSession } from 'next-auth/react'
import { setBookmarks } from '../store/slices/bookmark'
export default function Home({projects}) {
  const {language} = useContext(LocalizationContext)
  return (
    <Layout>
      <TopSection language={language}/>
      <AboutUsSection language={language} />
      {(projects && projects.length > 0) && <PopularProjects language={language} data={projects}/>}
      <WhyChooseUsSection language={language}/>
      <MeetOurTeamMate language={language} />
      <StatisticsSection language={language}/>
      <PeopleReviews language={language}/>
      <PromoteProdect language={language} />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const session = await getSession(ctx)
  let bookmarks = []
  if(session && session.user?.accountType=='b'){
    const id = session.user.id
    const token = session.user.token
    const bookmarkRequest = await axios.get(`${process.env.API_URL}/bookmark/backer/${id}`,{headers:{token}})
    bookmarks = bookmarkRequest.data
    
    bookmarks.length > 0 ?  bookmarks = bookmarks.map((bookmark) => { return {id:bookmark.id,projectId:bookmark?.project?.id} }) : false
    store.dispatch(setBookmarks(bookmarks))
  }
  const projects = await axios.get(`${process.env.API_URL}/project/all/`,{headers:{token:process.env.WEBSITE_TOKEN}})
  return {
      props: {
        projects:projects.data.data,
      }
  }

})

