import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data: {
        name: '',
        username: '',
        email: '',
        phone: '',
    },
    loading: null,
    error: false,
    users: []
}
export const UsersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserState: (state, action) => {
            state.name = action.payload.name
            state.username = action.payload.username
            state.email = action.payload.email
            state.phone = action.payload.phone
        },
        startUser: (state) => {
            state.loading = true
        },
        successUser: (state, action) => {
            state.data = action.payload;
            state.loading = null;
        },
        errorUser: (state) => {
            state.loading = null;
            state.error = true
        },
        AllUsers: (state, action) => {
            console.log(action);
            state.users.push(action.payload)
        }
    },
})
export const { addUserState, startUser, successUser, errorUser, AllUsers } = UsersSlice.actions
export default UsersSlice.reducer