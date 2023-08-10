import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { useTodos } from '../hooks/useTodos';

export const TodoApp = () => {

    const { todos,onNewTodo, onDeleteTodo, onCompleteTodo, pendingTodos } = useTodos();

    return (
        <>
            <div className="m-4">
                <h1 className='text-center'>TodoApp</h1>
                <h3>Total de Tareas: {todos.length}, Pendientes: { pendingTodos}</h3>
                <hr />
                <div className="row py-5">
                    <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onCompleteTodo={onCompleteTodo} />
                    <TodoForm onNewTodo={onNewTodo} />
                </div>

            </div>
        </>

    )
}
