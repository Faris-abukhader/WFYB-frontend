import { useState } from 'react'
import {SignInForm} from '../../components/auth/auth'
import Layout from '../../components/Layout/Layout'
export default function SignIn() {
  const [language,setLanguage] = useState('en')
  return (
    <Layout>
      <SignInForm language={language}/>
    </Layout>
  )
}
