import React, { useEffect, useState } from 'react'
import GlobalAnimation from '../Animation/GlobalAnimation'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { GetAllUser } from '../Redux/API/api'
import { AllUsers, errorUser, startUser } from '../Redux/Features/UsersSlice'
import axios from 'axios'
const Users = () => {

  const rediract = useNavigate()

  // const { name } = useSelector(state => state.user);
  // const { username } = useSelector(state => state.user);
  // const { email } = useSelector(state => state.user);
  const { users } = useSelector(state => state.user);

  console.log(users);

  const dispatch = useDispatch()

  useEffect(() => {
    GetAllUser(dispatch, users)
  }, [])

  const rediracttoPage = () => {
    rediract('/addUser')
  }

  return (
    <GlobalAnimation>
      <div className='card mt-2'>
        <div className='card-header d-flex justify-content-between p-3 '>
          <h3 className='float-left'>All Users</h3>
          <button onClick={rediracttoPage} className='float-right btn btn-success'> Add User </button>
        </div>
        <div className='card-body'>
          <div className='row w-100'>
            <div className='col-md-12'>

              <table className="table">
                <thead>
                  <tr className='text-center'>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 
                  {users[0].map((item) => (

                    <tr className='text-center'>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td className='d-flex justify-content-center'>
                        <button onClick={() => rediract('/editUser/1')} className='btn btn-sm btn-warning mx-2'>
                          View
                        </button>
                        <button onClick={() => rediract('/editUser/1')} className='btn btn-sm btn-info mx-2'>
                          Edit
                        </button>
                        <button className='btn btn-sm btn-danger mx-2'>
                          delete
                        </button>
                      </td>
                    </tr>

                  ))} */}




                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </GlobalAnimation>
  )
}

export default Users