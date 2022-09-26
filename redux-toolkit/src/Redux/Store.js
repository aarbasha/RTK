import { configureStore } from '@reduxjs/toolkit'
import UsersSlice from './Features/UsersSlice'
import counterSlice from './Features/counterSlice'

export const store = configureStore({
    reducer: {
        user: UsersSlice,
        counter: counterSlice
    },
})