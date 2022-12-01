import Layout from '../components/layout/Layout'
import { ProjectDetailsMain, ProjectDetailsTitle, ProjectUpdates } from '../components/projectDetails/projectDetails'
import { wrapper } from '../store/store'
import axios from 'axios'
import { useContext } from 'react'
import { LocalizationContext } from '../localization/locationlizationContext'
export default function ProjectDetails({ project }) {
  const { language } = useContext(LocalizationContext)
  console.log(project)
  return (
    <Layout>
      <ProjectDetailsTitle language={language} />
      <ProjectDetailsMain data={project} language={language} />
      <ProjectUpdates language={language}  description={project?.description} shortIntro={project?.shortIntro} rewardList={project?.rewardList} comments={project?.comments}/>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const { query } = ctx
  const { id } = query
  if (id) {
    const targetProject = await axios.get(`${process.env.API_URL}/project/${id}`, { headers: { token: process.env.WEBSITE_TOKEN } })
    return {
      props: {
        project: targetProject.data
      }
    }
  } else {
    return {
      redirect: {
        destination: '/'
      },
      props: {}
    }
  }
})
