const initialState = [{
    id: 1,
    todo: 'Recolectar la gema del alma.',
    done: false,
}];


const todoReducer = (state = initialState, action = {}) => {

    
    if(action.type === '[TODO] Add TODO.') {
        console.log(action);
        return [...state, action.payload];
    }

    return state;

}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la gema del Poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] Add TODO.',
    payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({state: todos});