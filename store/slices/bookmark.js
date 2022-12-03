import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const bookmarkSlice = createSlice({
  name: 'BookmarkSlice',
  initialState,
  reducers: {
      setBookmarks: (state,{payload}) =>{
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
      addNewBookmark: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneBookmark: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneBookmark: (state,{payload}) =>{
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
    return [...payload.bookmark]
   }
  }
})


export const { setBookmarks,sortById,sortByDate,sortByName,addNewBookmark,modifyOneBookmark,deleteOneBookmark} = bookmarkSlice.actions

export default bookmarkSlice.reducer