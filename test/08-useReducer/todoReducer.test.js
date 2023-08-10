import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Test del todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'DEMO',
        done: false,
    }];

    test('Debe regresar el estado inicial', () => { 
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);

     })

     test('debe agregar un todo', () => { 
        
        const action = {
            type: '[TODO] Add Todo',
            payload: initialState,
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);


      })

     test('debe eliminar un todo', () => { 
        
        const action = {
            type: '[TODO] Delete Todo',
            payload: {
                id: 1,
                description: 'DEMO',
                done: false,
            },
        }

        // console.log(initialState);
        const newState = todoReducer(initialState, action);
        // console.log(newState);
        expect(newState.length).toBe(0);
        
      })

     test('debe marcar como COMPLETADO un todo', () => { 
        
        const action = {
            type: '[TODO] Complete Todo',
            payload: {
                id: 1,
                description: 'DEMO',
                done: false,
            },
        }

        const newState = todoReducer(initialState, action);
        const todosCompleted = newState.filter(todo => (todo.done));
        const todoCompleted = newState.find(todo => (todo.id == action.payload.id));
        
        console.log('todo', todoCompleted);
        expect(newState.length).toBe(1);
        expect(todosCompleted.length).toBe(1);
        expect(todoCompleted.done).toBeTruthy();
        
      })
 })