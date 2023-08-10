import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'David',
        email: 'david.flores@itsoft.mx'
    }

    test('Debe regresar info por defect', () => {



        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm, onSubmitForm, formState } = result.current;
        // console.log(result);

        expect(formState).toEqual(initialForm);
        expect(onInputChange).toEqual(expect.any(Function));
        expect(onResetForm).toEqual(expect.any(Function));
        expect(onSubmitForm).toEqual(expect.any(Function));


    })

    test('Debe cambiar el nombre del formulario', () => {

        const newValue = 'Glendy';

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, formState } = result.current;
        // console.log(result);

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });
        // console.log(result);
        expect(result.current.formState.name).toEqual(newValue);
    })

    test('Debe funcionar el Reset del formulario', () => {

        const newValue = 'Glendy';

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm, formState } = result.current;
        // console.log('original', result);

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });
        // console.log('onchange', result);
        // console.log('initialForm', initialForm);
        expect(result.current.formState.name).toEqual(initialForm.name);
    })
})