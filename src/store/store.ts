import { configureStore } from '@reduxjs/toolkit'
import multiReducers from './reducer'

export const store = configureStore({
  reducer: {multiReducers},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch