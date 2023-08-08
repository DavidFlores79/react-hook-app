import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1 className='text-center'>useState</h1>

            <h3>Counter1: {counter1}</h3>
            <hr />
            <div className="d-flex">
                <button className="btn btn-primary" onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}>+1</button>
                <button className="btn btn-primary" onClick={() => setCounter({ ...state, counter1: counter1 - 1 })}>-1</button>
            </div>
            <h3>Counter2: {counter2}</h3>
            <hr />
            <div className="d-flex">
                <button className="btn btn-secondary" onClick={() => setCounter({ ...state, counter2: counter2 + 1 })}>+1</button>
                <button className="btn btn-secondary" onClick={() => setCounter({ ...state, counter2: counter2 - 1 })}>-1</button>
            </div>
            <h3>Counter3: {counter3}</h3>
            <hr />
            <div className="d-flex">
                <button className="btn btn-info" onClick={() => setCounter({ ...state, counter3: counter3 + 1 })}>+1</button>
                <button className="btn btn-info" onClick={() => setCounter({ ...state, counter3: counter3 - 1 })}>-1</button>
            </div>
        </>
    )
}
