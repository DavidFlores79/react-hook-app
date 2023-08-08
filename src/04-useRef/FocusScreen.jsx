import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const onSubmitForm = (e) => {
        e.preventDefault();
        inputRef.current.select();
    }

  return (
    <>
        <h1 className='text-center'>Focus Screen - useRef</h1>
        <hr />
        <form className='was-validated' onSubmit={ onSubmitForm }>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input ref={inputRef} type="text" className='form-control' name="nombre" id="nombre" placeholder='Ingrese el nombre' />
            </div>
            <button type='submit' className="btn btn-primary">Set Focus</button>
        </form>
    </>
  )
}
