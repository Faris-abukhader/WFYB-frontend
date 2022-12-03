import { getSession } from 'next-auth/react'
import { useContext } from 'react'
import { LocalizationContext } from '../../localization/locationlizationContext'
import {BookmarkedList} from '../../components/dashboardBookmark/dashboardBookmark'
import Layout from '../../components/UserLayout/Layout'
import {wrapper} from '../../store/store'
import axios from 'axios'
import { setBookmarks } from '../../store/slices/bookmark'
export default function Bookmark() {
  const {language} = useContext(LocalizationContext)
  return (
    <Layout currentPage={`bookMark`}>
      <BookmarkedList language={language}/>
    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const session = await getSession(ctx)
    if (session?.user && session?.user.accountType=='b') {

      
      const token = session.user?.token
      const id = session.user?.id
    
      const bookmarkRequest = await axios.get(`${process.env.API_URL}/bookmark/backer/${id}`,{headers:{token}})

      console.log(bookmarkRequest.data)
  
      store.dispatch(setBookmarks(bookmarkRequest.data))
    return {
          props: {}
        }
    } else {
      
      return {
        redirect: {
          destination: '/api/auth/signin'
        },
        props: {}
      }
    }
  
})

