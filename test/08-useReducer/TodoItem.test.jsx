import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

jest.mock("../../src/hooks/useTodos");

describe('Pruebas en TodoItem.jsx', () => {

    const todo = {
        id: 1,
        description: 'Recolectar la Piedra del Alma.',
        done: false,
    };
    const onDeleteTodoMock = jest.fn();
    const onCompleteTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks());

    test('Debe concidir con el screen', () => { 

        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onCompleteTodo={ onCompleteTodoMock }/>);

        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('action-buttons');

        expect(screen.getByText(todo.description)).toBeTruthy();
        expect(screen.getByText('Marcar')).toBeTruthy();
        expect(screen.getByText('Borrar')).toBeTruthy();
        expect(liElement.className).toBe('list-group-item d-flex align-items-center justify-content-between');
        expect(spanElement.className).toBe('d-flex align-items-center justify-content-between');

        // screen.debug();
    })

    test('El boton Marcar debe Mostrar Desmarcar y la clase danger si el todo está completado', () => { 

        todo.done = true;

        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onCompleteTodo={ onCompleteTodoMock }/>);
        
        const toggleButtonElement = screen.getByLabelText('toggle-button');
        fireEvent.click(toggleButtonElement);
        expect(onCompleteTodoMock).toHaveBeenCalled();
        expect(screen.getByText('Desmarcar')).toBeTruthy();
        expect(toggleButtonElement.className).toBe('btn btn-danger');
        // screen.debug();
    })

    test('Que la function onDeleteTodo haya sido llamada al hacer clic', () => { 

        todo.done = true;

        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onCompleteTodo={ onCompleteTodoMock }/>);
        
        const deleteButtonElement = screen.getByLabelText('delete-button');
        fireEvent.click(deleteButtonElement);
        expect(onDeleteTodoMock).toHaveBeenCalled();
        // screen.debug();
    })
})