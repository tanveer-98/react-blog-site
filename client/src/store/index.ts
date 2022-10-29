import { configureStore } from '@reduxjs/toolkit'
import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux'

import blogReducer from './blog/blogSlice'
export const store = configureStore({
  reducer: {
   blog : blogReducer
  }
})

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;