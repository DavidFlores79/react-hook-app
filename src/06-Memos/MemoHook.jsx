import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahi vamos!...');        
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

    /** Va a guardar el valor del resultado de la funcion
     * y NO va a cambiar a menos que las dependencias
     * del useMemo cambien. Si enviamos array vacio solo 
     * se ejecutara una vez. En este caso se ejecutara cada vez
     * que counter se incremente.
     */
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1 className='text-center'>MemoHook</h1>
            <hr />
            <h3 className='text-center'>Counter: <small>{counter}</small></h3>
            <h5 className='text-right'>{ memorizedValue }</h5>
            <div className="text-center mb-5">
                <span className="text-left">
                    <button className="btn btn-outline-info" onClick={toggleShow}>Show/Hide {JSON.stringify(show)}</button>
                </span>
                <span className="text-right">
                    <button className="btn btn-outline-primary" onClick={increment}>+1</button>
                </span>
            </div>
        </>
    )
}
