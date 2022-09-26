import React from 'react'
import ScaleInAnimation from "../../Animation/ScaleInAnimation"
import { useNavigate } from "react-router-dom"
const EditUser = () => {

    const rediract = useNavigate()
    return (
        <ScaleInAnimation>
            <div className='card mt-2'>
                <div className='card-header d-flex justify-content-between p-3 '>
                    <h3 className='float-left'>Update Users</h3>
                    <button onClick={() => rediract(-1)} className='float-right btn btn-primary'> Back </button>
                </div>
                <div className='card-body'>
                    <div className='row w-100'>
                        <div className='col-md-8 offset-md-2'>
                            <form>

                                <div className='col-lg -6 my-2'>
                                    <label className='my-2'>Enter Your Name</label>
                                    <input type={'text'} name="name" className='form-control my-2' />
                                </div>

                                <div className='col-lg -6 my-2'>
                                    <label className='my-2'>Enter Your Email</label>
                                    <input type={'email'} name="email" className='form-control my-2' />
                                </div>


                                <div className='col-lg -6 my-2'>
                                    <label className='my-2'>Enter Your Username</label>
                                    <input type={'text'} name="username" className='form-control my-2' />
                                </div>


                                <div className='col-lg -6 my-2'>

                                    <button type='submit' className='btn btn-primary my-4'>Save User</button>
                                </div>




                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ScaleInAnimation>
    )
}

export default EditUser