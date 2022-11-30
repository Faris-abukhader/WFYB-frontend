import { getSession } from 'next-auth/react'
import { useState } from 'react'
import {BookmarkedList} from '../../components/dashboardBookmark/dashboardBookmark'
import Layout from '../../components/UserLayout/Layout'
import {wrapper} from '../../store/store'
export default function Bookmark() {
  const [language,setLanguage] = useState('en')
  return (
    <Layout currentPage={`bookMark`}>
      <BookmarkedList language={language}/>
    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    // const session = await getSession(ctx)
    // if (session?.user && session?.user.accountType=='b') {
    //   console.log(session)
  
    //   const token = session.user?.token
    
    //   const customers = await axios.get(`${process.env.API_URL}/client/all`,{headers:{token}})
    //   const staffs = await axios.get(`${process.env.API_URL}/staff/all`,{headers:{token}})
  
    //   store.dispatch(setLanguage(language))
    // return {
    //       props: {}
    //     }
    // } else {
      
    //   return {
    //     redirect: {
    //       destination: '/api/auth/signin'
    //     },
    //     props: {}
    //   }
    // }
  
})

