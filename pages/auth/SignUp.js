import { useContext } from 'react'
import {SignUpForm} from '../../components/auth/auth'
import Layout from '../../components/layout/Layout'
import { LocalizationContext } from '../../localization/locationlizationContext'
export default function SignUp() {
  const {language} = useContext(LocalizationContext)
  return (
    <Layout>
      <SignUpForm language={language}/>
    </Layout>
  )
}
