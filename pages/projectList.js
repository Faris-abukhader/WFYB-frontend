import { useState,useContext } from 'react'
import Layout from '../components/layout/Layout'
import {ProjectGrid} from '../components/projectList/projectList'
import { wrapper } from '../store/store'
import { getSession } from 'next-auth/react'
import axios from 'axios'
import { LocalizationContext } from '../localization/locationlizationContext'
export default function ProjectList({projects}) {
  const {langauge} = useContext(LocalizationContext)
  console.log(projects)

  return (
    <Layout>
        <ProjectGrid data={projects} language={langauge}/>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const projects = await axios.get(`${process.env.API_URL}/project/all/`,{headers:{token:process.env.WEBSITE_TOKEN}})
  return {
      props: {
        projects:projects.data.data
      }
  }

})


