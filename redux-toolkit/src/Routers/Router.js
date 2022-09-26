import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from "../components/Home"
import About from "../components/About"
import Users from '../components/Users'
import Counter from "../components/Counter"
import Error from "../components/Error"
import AddUser from '../components/users/AddUser'
import EditUser from '../components/users/EditUser'
const Router = () => {

    const ele = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/users",
            element: <Users />,
        },
        {
            path: "/addUser",
            element: <AddUser />,
        },
        {
            path: "/editUser/:id",
            element: <EditUser />,
        },
        {
            path: "/counter",
            element: <Counter />,
        },

        {
            path: "*",
            element: <Error />,
        },
    ])

    return ele
}

export default Router