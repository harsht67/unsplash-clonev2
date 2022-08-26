import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
    query: string
}

const initialState: SearchState = {
    query: ""
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchCleared(state) {
            state.query = ""
        },
        searchUpdated(state, action: PayloadAction<string>) {
            const newQuery = action.payload

            state.query = newQuery
        }
    }
})

export const { searchCleared, searchUpdated } = searchSlice.actions

export default searchSlice.reducer 