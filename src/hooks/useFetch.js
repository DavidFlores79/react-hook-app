import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    // https://thronesapi.com/api/v2/Characters/1
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getCaracter = async () => {

        // setState({...state, isLoading: true});

        try {
            const resp = await fetch(url);
            const data = await resp.json();

            // console.log('GOT Caracter', data);
            if (resp.status != 200) throw 'No se encontró el personaje';


            setState({
                data: data,
                isLoading: false,
                hasError: null,
            });
        } catch (error) {
            console.log('Error: ', error);
            setState({ ...state, hasError: error });
        }
    }

    useEffect(() => { getCaracter(); }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
