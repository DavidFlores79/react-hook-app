import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { Spinner } from '../03-Examples/Spinner';
import { GOTCard } from '../03-Examples/GOTCard';


export const Layout = () => {

    const { counter, increment, decrement, resetCounter } = useCounter(0);
    const { data, isLoading, hasError } = useFetch(`https://thronesapi.com/api/v2/Characters/${counter}`);
    // console.log(data, 'IsLoading: ' + isLoading, 'hasError: ' + hasError);

    return (
        <>
            <h1 className='text-center'>GOT Caracter - useLayoutEffect</h1>
            <hr />
            <div className='card-frame d-flex align-items-center justify-content-center'>
                {
                    (isLoading) ?
                        <Spinner />
                        :
                        <GOTCard data={data} increment={increment} decrement={decrement} hasError={hasError} />
                }
            </div>
        </>
    )
}
