import React, { useState } from "react";
import ScaleInAnimation from "../../Animation/ScaleInAnimation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserState } from "../../Redux/Features/UsersSlice"
import { addUser } from "../../Redux/API/api";

const AddUser = () => {
    const rediract = useNavigate();
    const [inputs, setInputs] = useState({})

    const dispatch = useDispatch()
    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({ ...values, [name]: value }))
    }

    const handelSubmitForm = (e) => {
        e.preventDefault();
        // dispatch(addUserState(inputs))
        addUser(inputs, dispatch)
        rediract('/users');
    };

    return (
        <ScaleInAnimation>
            <div className="card mt-2">
                <div className="card-header d-flex justify-content-between p-3 ">
                    <h3 className="float-left">Add Users</h3>
                    <button
                        onClick={() => rediract(-1)}
                        className="float-right btn btn-warning"
                    >
                        Back
                    </button>
                </div>
                <div className="card-body">
                    <div className="row w-100">
                        <div className="col-md-8 offset-md-2">
                            <form onSubmit={handelSubmitForm}>
                                <div className="col-lg -6 my-2">
                                    <label className="my-2">Enter Your Name</label>
                                    <input
                                        type={"text"}
                                        name="name"
                                        onChange={handelChange}
                                        value={inputs.name}
                                        className="form-control my-2"
                                    />
                                </div>

                                <div className="col-lg -6 my-2">
                                    <label className="my-2">Enter Your Email</label>
                                    <input
                                        type={"email"}
                                        name="email"
                                        onChange={handelChange}
                                        value={inputs.email}
                                        className="form-control my-2"
                                    />
                                </div>

                                <div className="col-lg -6 my-2">
                                    <label className="my-2">Enter Your Username</label>
                                    <input
                                        type={"text"}
                                        name="username"
                                        onChange={handelChange}
                                        value={inputs.username}
                                        className="form-control my-2"
                                    />
                                </div>

                                <div className="col-lg -6 my-2">
                                    <label className="my-2">Enter Your phone</label>
                                    <input
                                        type={"text"}
                                        name="phone"
                                        onChange={handelChange}
                                        value={inputs.phone}
                                        className="form-control my-2"
                                    />
                                </div>

                                <div className="col-lg -6 my-2">
                                    <button type="submit" className="btn btn-primary my-4">
                                        Save User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ScaleInAnimation>
    );
};

export default AddUser;
