import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {

    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        // console.log({todos});
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const onNewTodo = (todo) => {
        // console.log({ todo });
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const onDeleteTodo = (todo) => {
        // console.log({ todo });
        const action = {
            type: '[TODO] Delete Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const onCompleteTodo = (todo) => {
        console.log('Completar', todo);
        const action = {
            type: '[TODO] Complete Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const pendingTodos =  (todos.filter(todo => (!todo.done))).length;

    return {
        todos,
        onNewTodo,
        onDeleteTodo,
        onCompleteTodo,
        pendingTodos,
    };
}