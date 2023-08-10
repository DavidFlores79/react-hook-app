import React, { useLayoutEffect, useRef, useState } from 'react'
import { FetchError } from './FetchError';

export const GOTCard = ({ data, increment, decrement, hasError }) => {


    /**
     * useLayoutEffect()
     */
    const imageRef = useRef();
    useLayoutEffect(() => {
    //   console.log(imageRef.current.getBoundingClientRect());
      const imageData = imageRef.current.getBoundingClientRect();
      setImageSize({ width: imageData.width, height: imageData.height });

    }, [data])
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });


    
    /**
     * Usando la doble negacion !! significa que si
     * la data tiene valor entonces la toma
     * si es undefined se convierte en false con !!
     */
    const { fullName, title, imageUrl } = !!data && data;

    return (
        <>
            {
                (hasError) ?
                    <FetchError decrement={decrement} hasError={hasError} />
                    :
                    <div className="card shadow">
                        <img ref={imageRef} src={imageUrl} className="card-img-top" alt={fullName} />
                        <div className="card-body">
                            <h5 className="card-title">{fullName}</h5>
                            <p className="card-text">Title: {title}</p>
                            <div className="text-center">
                                <button aria-label='prev-button' onClick={decrement} className="btn btn-primary mr-1">Prev</button>
                                <button aria-label='next-button' onClick={increment} className="btn btn-primary">Next</button>
                            </div>
                        </div>
                        <code className='text-center m-1'>{ JSON.stringify(imageSize) }</code>
                    </div>
            }
        </>
    )
}
