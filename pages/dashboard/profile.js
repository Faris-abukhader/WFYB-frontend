import { getSession } from 'next-auth/react'
import Layout from '../../components/UserLayout/Layout'
import {wrapper} from '../../store/store'
export default function Profile() {
  return (
    <Layout currentPage={`Profile`}></Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    // const session = await getSession(ctx)
    // if (session?.user) {
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

