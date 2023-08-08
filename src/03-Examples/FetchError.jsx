import React from 'react'

export const FetchError = ({ decrement, hasError }) => {
    return (
        <div className="text-center">
            <h4>{hasError}</h4>
            <a onClick={decrement} className='btn btn-primary'>Regresar</a>
        </div>
    )
}
