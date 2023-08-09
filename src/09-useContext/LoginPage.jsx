import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <p>Esta es la pagina de Login</p>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button
                onClick={() => setUser({ id: 1, name: 'David Flores', email: 'david.flores@itsoft.mx' })}
                className="btn btn-primary">Establecer Usuario
            </button>
        </>
    )
}
