import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo, onCompleteTodo }) => {
    return (
        <>
            <div className="col-7">
                <ol className='list-group shadow p-2'>
                    {
                        todos.map(todo => <TodoItem key={ todo.id } todo={ todo } onDeleteTodo={ onDeleteTodo } onCompleteTodo={ onCompleteTodo } />)
                    }
                </ol>
            </div>
        </>
    )
}
