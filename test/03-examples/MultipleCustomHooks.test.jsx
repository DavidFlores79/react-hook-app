import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-Examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en MultipleCustomHooks.jsx', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })
    beforeEach( () => {
        jest.clearAllMocks();
    })


    test('Debe mostrar componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText('Game of Thrones Caracter')).toBeTruthy();

        // screen.debug();
    })

    test('Debe mostrar un card', () => {

        useFetch.mockReturnValue({
            data: [{
                id: 1,
                fullName: 'David Flores',
                imageUrl: 'https://imagenes.com/1.png'
            }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />);
        // screen.debug();

        expect(screen.getByText('Title:')).toBeTruthy();
        expect(screen.getByText('Next')).toBeTruthy();
        expect(screen.getByText('Prev')).toBeTruthy();

    })

    test('Debe llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{
                id: 1,
                fullName: 'David Flores',
                imageUrl: 'https://imagenes.com/1.png'
            }],
            isLoading: false,
            hasError: null
        })

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        })

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'next-button' });
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
        // screen.debug();
    })
})