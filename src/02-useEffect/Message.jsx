import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
    //   console.log('message mounted');
    const onMouseMove = ({x,y}) => {
        console.log({ x, y });
    }

    
    window.addEventListener('mousemove', onMouseMove)
    
      return () => {
        // console.log('message unmounted');
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    

  return (
    <div className='text-danger mt-1'>No puede ser Glendy. Usuario ya existe!</div>
  )
}
