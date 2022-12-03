import { useSelector } from 'react-redux'
import {ProjectCard} from '../general/general'
import { getTranslatedText as t } from '../../localization/config'
export default function PopularProjects({data,language}) {

  const bookmarkList = useSelector((state)=>state.bookmark)

  const checkSaved = (id)=>{
    let result = false
    bookmarkList.map((item)=>{if(item.projectId==id)result =true})
    return result
  }
  
  return (
    <div style={{backgroundImage:'linear-gradient(to bottom, #202330, #202330 50%, white 50%, white)'}} className='w-full py-8 pt-32 font-almarai'>
        <h3 className='text-green-500 text-md font-bold text-center pb-3'>{t('popularProjects',language)}</h3>
        <h1 className='text-gray-50 text-3xl md:Text-4xl lg:text-6xl font-bold text-center'>{t('exploreOurProjects',language)}</h1>
       
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 pt-20'>
         {(data && data.length > 0)&& data.slice(0,6).map((project)=><ProjectCard key={project.id} language={language} isSaved={checkSaved(project?.id)} bookmarkList={bookmarkList} {...project}/>) }
       </div>
    </div>
  )
}
