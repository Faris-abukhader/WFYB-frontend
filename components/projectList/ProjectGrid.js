import { useSelector } from 'react-redux'
import {NoDataFound, ProjectCard, ProjectCardSketelon} from '../general/general'
export default function ProjectGrid({language,isSearching}) {
  const data = useSelector((state)=>state.project)
  const bookmarkList = useSelector((state)=>state.bookmark)

  const checkSaved = (id)=>{
    let result = false
    bookmarkList.map((item)=>{if(item.projectId==id)result =true})
    return result
  }

  return (
    <div >
      
      {isSearching ? 
      ([1,2,3,4,5,6,7]).map((num)=><ProjectCardSketelon key={num}/>) 
      :
      <>
      {data && data.length > 0 ? 
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-20'>
     {data.map((project)=><ProjectCard key={project.id} {...project}  isSaved={checkSaved(project?.id)} language={language} bookmarkList={bookmarkList}/>)}
         </div>
        :
        <NoDataFound label={'noResultFound'} language={language}/>
        }
         </>
    }
   
    </div>
  )
}
