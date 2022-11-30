import Layout from '../components/layout/Layout'
import {ProjectDetailsMain, ProjectDetailsTitle, ProjectUpdates} from '../components/projectDetails/projectDetails'
export default function ProjectDetails() {
  return (
    <Layout>
        <ProjectDetailsTitle />
        <ProjectDetailsMain />
        <ProjectUpdates />
    </Layout>
  )
}
