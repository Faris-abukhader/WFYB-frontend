import {useState} from 'react'
import { useSelector } from 'react-redux'
import NoDataFound from '../general/NoDataFound'
import {ProjectRow,ReviewProjectModel,EditProjectModel} from './dashboardMyProjects'
export default function ProjectList({language}) {
  const projects = useSelector((state)=>state.project)
  const [showEditModal,setShowEditModal] = useState(false)
  const [showReviewModal,setShowReviewModal] = useState(false)
  const [reviewModalData,setReviewModalData] = useState({})
  const [updateModalData,setUpdateModalData] = useState({})

  const toggleEditModal = ()=>{
    setShowEditModal(!showEditModal)
  }

  const toggleReviewModal = (id='')=>{
    setReviewModalData(projects.find((project)=>project.id==id)||{})
    console.log(projects.find((project)=>project.id==id)||{})
    setShowReviewModal(!showReviewModal)
  }

  const setProjectUpdateId = (id)=>{
    console.log(id)
    console.log('setProjectUpdateId')
    setUpdateModalData(projects.find((project)=>project.id==id))
    console.log(projects.find((project)=>project.id==id))
    toggleReviewModal()
    toggleEditModal()
  }




  return (
    <div className='w-full bg-white shadow-lg rounded-md'>
      {projects && projects.length > 0 ?
       <ul>
       {projects.map((project,index)=><ProjectRow {...project} clickHandler={()=>toggleReviewModal(project.id)} key={project.id} isLast={projects.length!=(index+1)}/>)}
       </ul>
        :
        <NoDataFound label={'noProjectsFound'} language={language}/>
       }
      <ReviewProjectModel show={showReviewModal} toggle={toggleReviewModal} language={language} data={reviewModalData} setProjectUpdateId={setProjectUpdateId}/>
      <EditProjectModel show={showEditModal} toggle={toggleEditModal} language={language} data={updateModalData}/>
    </div>
  )
}
