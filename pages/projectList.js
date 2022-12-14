import { useContext, useState } from 'react'
import Layout from '../components/layout/Layout'
import { ProjectGrid, SearchingBox } from '../components/projectList/projectList'
import { wrapper } from '../store/store'
import { getSession } from 'next-auth/react'
import axios from 'axios'
import { LocalizationContext } from '../localization/locationlizationContext'
import { setProjects } from '../store/slices/project'
import { setBookmarks } from '../store/slices/bookmark'
export default function ProjectList() {
  const {language} = useContext(LocalizationContext)
  const [isSearching,setIsSearching] = useState(true)
  const [searchContent,setSearchContent] = useState('')
  return (
    <Layout>
      <SearchingBox setIsSearching={setIsSearching} language={language} searchContent={searchContent} setSearchContent={setSearchContent}/>
      <ProjectGrid language={language} isSearching={isSearching} />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const session = await getSession(ctx)
  let bookmarks = []
  if (session && session.user?.accountType == 'b') {
    const id = session.user.id
    const token = session.user.token

    const bookmarkRequest = await axios.get(`${process.env.API_URL}/bookmark/backer/${id}`, { headers: { token } })
    bookmarks = bookmarkRequest.data

    bookmarks.length > 0 ?  bookmarks = bookmarks.map((bookmark) => { return {id:bookmark.id,projectId:bookmark?.project?.id} }) : false
    store.dispatch(setBookmarks(bookmarks))
  }

  const projects = await axios.get(`${process.env.API_URL}/project/all/`, { headers: { token: process.env.WEBSITE_TOKEN } })
  store.dispatch(setProjects(projects.data.data))

  return {
    props: {}
  }
})


