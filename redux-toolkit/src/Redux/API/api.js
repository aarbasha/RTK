import { errorUser, startUser, successUser, AllUsers } from "../Features/UsersSlice";
import axios from "axios";

export const addUser = async (user, dispatch) => {
    dispatch(startUser())
    try {
        const addData = await axios.post('http://127.0.0.1:8000/api/add-user', user).then(res => {
            dispatch(successUser(res.data))
        })
    } catch (error) {
        dispatch(errorUser())
    }
}

export const GetAllUser = async (dispatch) => {
    dispatch(startUser())
    try {
        let GetUser = await axios.get('http://127.0.0.1:8000/api/users').then(res => {
            dispatch(AllUsers(res.data.data))
        })
    } catch (error) {
        dispatch(errorUser())
    }
}