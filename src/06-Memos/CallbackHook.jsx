import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        () => {
            setCounter((value) => value + 1);
        },
        [],
    )


    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1 className='text-center'>CallbackHook</h1>
            <hr />
            <h3>Counter: {counter}</h3>
            <ShowIncrement increment={increment} />
        </>
    )
}
