import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const HomePage = () => {

    const { user } = useContext( UserContext );

  return (
    <>
        <h1>HomePage</h1>
        <hr />
        <p>Esta es la pagina de Home. <small>{ user?.name }</small></p>
        <pre aria-label='pre-tag'>
            { JSON.stringify(user, null, 3) }
        </pre>
    </>
  )
}
