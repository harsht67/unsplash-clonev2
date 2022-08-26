import { configureStore } from '@reduxjs/toolkit'

import topicReducer from './topicSlice'
import searchReducer from './searchSlice'

const store = configureStore({
    reducer: {
        topic: topicReducer,
        search: searchReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch