import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import bookmarkSlice from './slices/bookmark'
import languageSlice from './slices/language'
import projectSlice from './slices/project'
const makeStore = ()=>configureStore({
  reducer: {
      project:projectSlice,
      language:languageSlice,
      bookmark:bookmarkSlice
  },
})

export const wrapper = createWrapper(makeStore)