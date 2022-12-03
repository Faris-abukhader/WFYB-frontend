import { setProjects,addNewProject,modifyOneProject,deleteOneProject } from "./slices/project"
import { setBookmarks,addNewBookmark,modifyOneBookmark,deleteOneBookmark } from "./slices/bookmark"
const getDispatch = (slice,action)=>{
    switch(slice){
        case 'project':
            switch(action){
                case 'set':
                    return setProjects
                case 'add':
                    return addNewProject
                case 'modify':
                    return modifyOneProject
                case 'delete':
                    return deleteOneProject
                default:
                    return -1
            }
        case 'bookmark':
            switch(action){
                case 'set':
                    return setBookmarks
                case 'add':
                    return addNewBookmark
                case 'modify':
                    return modifyOneBookmark
                case 'delete':
                    return deleteOneBookmark
                default:
                    return -1
            }
        default:
            return -1
    }

}

export default getDispatch