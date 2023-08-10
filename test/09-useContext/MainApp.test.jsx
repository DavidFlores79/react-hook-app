import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en Componente MainApp', () => { 
    
    test('Debe mostrar la pagina Home', () => { 
        
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )
        expect(screen.findByText('HomePage')).toBeTruthy();
        // screen.debug();
     })

    test('Debe mostrar LoginPage', () => { 
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )
        expect(screen.findByText('LoginPage')).toBeTruthy();
        // screen.debug();
     })
 })