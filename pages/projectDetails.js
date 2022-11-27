import Layout from '../components/layout/Layout'
import {ProjectDetailsMain, ProjectDetailsTitle} from '../components/projectDetails/projectDetails'
export default function ProjectDetails() {
  return (
    <Layout>
        <ProjectDetailsTitle />
        <ProjectDetailsMain />
    </Layout>
  )
}
