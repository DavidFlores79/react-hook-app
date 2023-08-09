import React from 'react'

export const TodoItem = ({ todo = {}, onDeleteTodo, onCompleteTodo }) => {
  return (
        <li key={todo.id} className={`list-group-item d-flex align-items-center justify-content-between`}>
            <span>{todo.description}</span>
            <span className='d-flex align-items-center justify-content-between'>
                <button className={`btn ${ (todo.done) ? 'btn-danger' : 'btn-success'}`} onClick={() => onCompleteTodo(todo)}>
                    { (todo.done) ? 'Desmarcar':'Marcar' }
                </button>
                <button className="btn btn-danger" onClick={() => onDeleteTodo(todo)}>Borrar</button>
            </span>
        </li>
  )
}
