import { getSession } from 'next-auth/react'
import Layout from '../../components/UserLayout/Layout'
import {wrapper} from '../../store/store'
import {Profile, ProfilePicture} from '../../components/dashboardProfile/dashboardProfile'
import { LocalizationContext } from '../../localization/locationlizationContext'
import { useContext } from 'react'
export default function ProfilePage() {
  const {language} = useContext(LocalizationContext)
  return (
    <Layout currentPage={`profile`}>
      <div className='flex-row space-y-3 space-x-0 sm:flex sm:gap-3 sm:space-y-0'>
      <ProfilePicture language={language}/>
      <Profile language={language}/>
      </div>
    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const session = await getSession(ctx)
    if (session?.user) {
      console.log(session)
  
      const token = session.user?.token
    
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

