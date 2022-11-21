import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import languageSlice from './slices/language'
import productSlice from './slices/product'
const makeStore = ()=>configureStore({
  reducer: {
      product:productSlice,
      language:languageSlice,
  },
})

export const wrapper = createWrapper(makeStore)