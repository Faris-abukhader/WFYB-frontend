import { getSession } from 'next-auth/react'
import { useState } from 'react'
import {InvestedProjectList} from '../../components/dashboardInvestedProjects/dasboardInvestedProjects'
import Layout from '../../components/UserLayout/Layout'
import {wrapper} from '../../store/store'
import axios from 'axios'
export default function InvestedProject({investedProjectList}) {
  const [language,setLanguage] = useState('ar')
  return (
    <Layout currentPage={`investedProjects`}>
      <InvestedProjectList data={investedProjectList} language={language}/>
    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const session = await getSession(ctx)
    if (session?.user && session?.user.accountType=='b') {
      console.log(session)
  
      const token = session.user?.token
      const id = session.user?.id
    
      const investedProjectsRequest = await axios.get(`${process.env.API_URL}/project/investedProject/${id}/`,{headers:{token}})

      console.log(investedProjectsRequest.data)
  
    return {
          props: {
            investedProjectList:investedProjectsRequest.data?.pledges
          }
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

