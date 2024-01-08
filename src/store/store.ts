import { configureStore } from '@reduxjs/toolkit'
import DataSlice from './DataSlice'
import VersSlice from './Verses'
import FontSlice from './FontSizeSlice'

export const store = configureStore({
  reducer: {
    DataSlice: DataSlice,
    VersSlice: VersSlice,
    FontSlice:FontSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

