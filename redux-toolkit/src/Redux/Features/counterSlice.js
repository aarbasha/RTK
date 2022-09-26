import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incremant: (state) => {
            state.count += 1
        },
        decremant: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        countByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export const { incremant, decremant, reset, countByAmount } = counterSlice.actions

export default counterSlice.reducer