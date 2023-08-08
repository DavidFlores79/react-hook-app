import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter();
    const [show, setShow] = useState(true);

    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <>
            <h1 className='text-center'>React Memo</h1>
            <hr />
            <h3 className='text-center'>Counter <Small counter={counter} /></h3>
            <div className="text-center mb-4">
                <span className="text-left">
                    <button className="btn btn-info" onClick={toggleShow}>Show/Hide {JSON.stringify(show)}</button>
                </span>
                <span className="text-right">
                    <button className="btn btn-primary" onClick={increment}>+1</button>
                </span>
            </div>
        </>
    )
}
