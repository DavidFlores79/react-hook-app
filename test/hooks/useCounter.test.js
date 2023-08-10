const { renderHook } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter");
const { act } = require("react-dom/test-utils");

describe('Pruebas en useCounter', () => { 
    
    test('debe retornar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useCounter() );

        const { counter, decrement, increment, resetCounter } = result.current;

        expect( counter ).toBe(5);
        expect( decrement ).toEqual( expect.any( Function) );
        expect( increment ).toEqual( expect.any( Function) );
        expect( resetCounter ).toEqual( expect.any( Function) );

     })

     test('debe de generar el counter con el valor de 100', () => { 

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
      })

     test('debe de incrementar el contador', () => { 

        const { result } = renderHook( () => useCounter() );
        const { counter, increment } = result.current;

        act(() => {
            increment();
        });
        expect( result.current.counter ).toBe(6);
      })

     test('debe de decrementar el contador', () => { 

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
        });
        expect( result.current.counter ).toBe(4);
      })

     test('debe de funcionar el resetCounter', () => { 

        const { result } = renderHook( () => useCounter() );
        const { counter, resetCounter, increment } = result.current;

        act(() => {
            increment();
            resetCounter();
        });
        expect( result.current.counter ).toBe(5);
      })
 })