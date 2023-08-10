import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en componente HomePage en 09-useContext', () => {

    const user = { id: 1, name: 'David Flores', email: 'david.flores@itsoft.mx' };

    test('Debe mostrar el componente sin el usuario', () => {

        render(<UserContext.Provider value={{ user: null }}><HomePage /></UserContext.Provider>);


        const preTag = screen.getByLabelText('pre-tag');

        expect(preTag.innerHTML).toBe('null');

        // screen.debug();
    })

    test('Debe mostrar el componente CON el usuario', () => {

        render(<UserContext.Provider value={{ user: user }}><HomePage /></UserContext.Provider>);


        const preTag = screen.getByLabelText('pre-tag');

        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(user.email);
        expect(preTag.innerHTML).toContain(user.email);

        screen.debug();
    })
})