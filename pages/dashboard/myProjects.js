import { getSession } from 'next-auth/react'
import Layout from '../../components/UserLayout/Layout'
import { setProjects } from '../../store/slices/project'
import {wrapper} from '../../store/store'
import axios from 'axios'
import {ProjectList} from '../../components/dashboardMyProjects/dashboardMyProjects'
import { LocalizationContext } from '../../localization/locationlizationContext'
import { useContext } from 'react'
export default function MyProjects() {
  const {language} = useContext(LocalizationContext)
  return (
    <Layout currentPage={'projects'}>
      <ProjectList language={language}/>

    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const session = await getSession(ctx)
    if (session?.user && session?.user?.accountType=='s') {
      console.log(session)
  
      const token = session.user?.token
      const id = session.user?.id
    
      const projects = await axios.get(`${process.env.API_URL}/project/starter/${id}/`,{headers:{token}})
      store.dispatch(setProjects(projects.data.data))
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

