import React, { useState } from 'react'

export const useForm = ( initialForm ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(formState.description.length <= 1) return;
        console.log('Formulario', formState);
    }


    return {
        formState, onInputChange, onResetForm, onSubmitForm
    };
  
}
