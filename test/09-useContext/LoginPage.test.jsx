import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en LoginPage', () => {

    const user = { id: 1, name: 'David Flores', email: 'david.flores@itsoft.mx' };
    
    test('Debe mostrar el componente sin el usuario', () => {

        render(<UserContext.Provider value={{ user: null }}><LoginPage /></UserContext.Provider>);
        const preTag = screen.getByLabelText('pre-tag');
        expect(preTag.innerHTML).toBe('null');

        screen.debug();

    })

    test('Debe llamar el setuser cuando se hace clic en el boton', () => {
        const setUserMock = jest.fn();

        render(<UserContext.Provider value={{ user: null, setUser: setUserMock }}><LoginPage /></UserContext.Provider>);
        const setUserButtonElement = screen.getByRole('button');
        fireEvent.click(setUserButtonElement);
        expect(setUserMock).toHaveBeenCalled();

    })
})