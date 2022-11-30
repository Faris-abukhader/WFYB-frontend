import { setProjects,addNewProject,modifyOneProject,deleteOneProject } from "./slices/project"
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
        default:
            return -1
    }

}

export default getDispatch