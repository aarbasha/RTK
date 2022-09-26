import React, { useState } from 'react'
import GlobalAnimation from '../Animation/GlobalAnimation'
import { useSelector, useDispatch } from "react-redux"
import { incremant, decremant, reset, countByAmount } from "../Redux/Features/counterSlice"

const Counter = () => {
    const [counteAmount, setCounteAmount] = useState(0)

    const number = Number(counteAmount)

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <GlobalAnimation>

            <div className='d-flex justify-content-center mt-5'>
                <span className='text-danger h1'>{count}</span>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mx-2 my-5' onClick={() => dispatch(incremant())}>+</button>
                <button className='btn btn-danger mx-2 my-5' onClick={() => dispatch(decremant())}>-</button>
                <button className='btn btn-success mx-2 my-5' onClick={() => dispatch(reset())}>Reset</button>
            </div>

            <input className='form-control' type='number' value={counteAmount}
                onChange={(e) => setCounteAmount(e.target.value)} />
            <div className='d-flex justify-content-center'>
                <button className='btn btn-warning mx-2 my-5' onClick={() => dispatch(countByAmount(number))}>
                value : {number}</button>
            </div>

        </GlobalAnimation>
    )
}

export default Counter