import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TopicState {
    current: string
}

const initialState: TopicState = {
    current: 'editorial'
}

const topicSlice = createSlice({
    name: 'topic',
    initialState,
    reducers: {
        topicChanged(state, action: PayloadAction<string>) {
            const newTopic = action.payload 
            state.current = newTopic
        }
    }
})

export const { topicChanged } = topicSlice.actions

export default topicSlice.reducer