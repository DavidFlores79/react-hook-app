import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithHook = () => {


    const { counter, increment, decrement,resetCounter } = useCounter();

    return (
        <>
            <h1 className='text-center'>Custom Hook</h1>

            <h3>Counter With Custom Hook: { counter }</h3>
            <hr />
            <div className="d-flex">
                <button className="btn btn-primary" onClick={() => increment()}>+1</button>
                <button className="btn btn-danger" onClick={() => resetCounter()}>Reset</button>
                <button className="btn btn-primary" onClick={() => decrement()}>-1</button>
            </div>
        </>
    )
}
