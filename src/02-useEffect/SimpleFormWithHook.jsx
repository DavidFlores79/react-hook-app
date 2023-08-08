import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const SimpleFormWithHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password, } = formState;

    /**
     * Por cada efecto secundario que se quiera llamar
     * React recomienda crear un useEffect
     */
    useEffect(() => {
        /**
         * Primero se envia un callback
         */
        // console.log('useEffect llamado!');

        return () => { }
    },

        /**
         * Aqui se llaman las dependencias del useEffect
         * si se quiere llamar el effect una sola ves 
         * se envia un array []
         */
        [formState]
    );

    /** Este ejemplo puede servir p.e. para saber si el correo existe en BD antes de hacer login*/
    useEffect(() => {
        console.log('email cambio!!');
    }, [email])


    return (
        <>
            <h1 className='text-center'>Formulario Simple - Hook</h1>
            <hr />
            <form className='was-validated'>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" className='form-control' placeholder='Escriba su email' value={formState.email} onChange={onInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" className='form-control' placeholder='Escriba su Contraseña' value={formState.password} onChange={onInputChange} required/>
                </div>
                <div className="text-right">
                    <button className="btn btn-primary" onClick={onResetForm}>Borrar</button>
                </div>
            </form>
        </>
    )
}
