import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodos } from "../../src/hooks/useTodos"

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en TodoApp.jsx', () => {

    const initialValues = {
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true},
        ],
        onNewTodo: jest.fn(),
        onDeleteTodo: jest.fn(),
        onCompleteTodo: jest.fn(),
        pendingTodos: 1,
    }
    useTodos.mockReturnValue(initialValues);

    test('Debe mostrar el componente correctamente', () => {     

        render(<TodoApp/>);

        const input = screen.getByRole('textbox');
        const h3 = screen.getByRole('heading', { level: 3});
        const htmlH3 = `Total de Tareas: ${initialValues.todos.length}, Pendientes: ${initialValues.pendingTodos}`;
        expect(screen.getByText('TodoApp')).toBeTruthy();
        expect(screen.getByText('Marcar')).toBeTruthy();
        expect(screen.getByText('Desmarcar')).toBeTruthy();
        expect(screen.getByText('Agregar TODO')).toBeTruthy();
        expect(input.id).toBe('description');
        expect(h3.innerHTML).toBe(htmlH3);
        // screen.debug();
        
     })
 })