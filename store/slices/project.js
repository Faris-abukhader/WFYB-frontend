import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const projectSlice = createSlice({
  name: 'ProjectSlice',
  initialState,
  reducers: {
      setProjects: (state,{payload}) =>{
        if(payload !== undefined){
          return [...payload]
        }
        return state
      }, 
      sortById:(state) => {
          return state.sort((a, b) => a.id.localeCompare(b.id))
      },    
      sortByDate:(state) => {
        return state.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      },    
      sortByName:(state)=>{
        return state.sort((a, b) => a.name.localeCompare(b.name))
      },
      addNewProject: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneProject: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneProject: (state,{payload}) =>{
         return  state.map((item)=>{
            if(item.id != payload.id){
              return item
            }
            return payload
          })
      },
  },
  extraReducers:{
   [HYDRATE]: (state,{payload}) =>{
    return [...payload.project]
   }
  },
})


export const { setProjects,sortById,sortByDate,sortByName,addNewProject,modifyOneProject,deleteOneProject} = projectSlice.actions

export default projectSlice.reducer