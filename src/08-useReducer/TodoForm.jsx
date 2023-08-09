import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoForm = ({ onNewTodo }) => {

    const { formState, onInputChange } = useForm({
        description: '',
    });
    
    const { description } = formState;

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        console.log('Formulario', newTodo);
        !!onNewTodo && onNewTodo( newTodo );
        formState.description = '';
    }


    return (
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <form className='was-validated' onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label htmlFor="description">Tarea:</label>
                    <input type="text" name="description" id="description" value={ description } className="form-control" onChange={onInputChange}/>
                </div>
                <button type='submit' className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}
