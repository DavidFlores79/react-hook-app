import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'David Flores',
        email: 'david.flores@itsoft.mx',
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    }

    /**
     * Por cada efecto secundario que se quiera llamar
     * React recomienda crear un useEffect
     */
    useEffect(() => {
        /**
         * Primero se envia un callback
         */
        // console.log('useEffect llamado!');

        return () => {}
    },

        /**
         * Aqui se llaman las dependencias del useEffect
         * si se quiere llamar el effect una sola ves 
         * se envia un array []
         */
        [ formState ]
    );

    /** Este ejemplo puede servir p.e. para saber si el correo existe en BD antes de hacer login*/
    useEffect( () => {
        console.log('email cambio!!');
    }, [ email ])


    return (
        <>
            <h1 className='text-center'>Formulario Simple</h1>
            <hr />
            <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" className='form-control' placeholder='Username' value={formState.username} onChange={onInputChange} />
                <small>{ (formState.username === 'Glendy') && <Message/> }</small>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" className='form-control' placeholder='email' value={formState.email} onChange={onInputChange} />
                
            </div>
        </>
    )
}
