export default function TodoList({todos, deleteTodo, markCompleted}) {
    return (
        <div className='todo-list'>
            {!todos.length && <h2 className='margin_25'>Справ немає</h2>}

            {todos.map(todo => (

                <div key={todo.id}
                     className={todo.isCompleted ? 'todo-list-single todo-list-single-completed' : 'todo-list-single'}>

                    <h3>{todo.id}. {todo.text}</h3>

                    <div>
                        <button className='button_action button_delete' onClick={() => deleteTodo(todo.id)}>X</button>
                        <button onClick={() => markCompleted(todo.id)} className='button_action button_done'>✔</button>
                    </div>

                </div>

            ))}
        </div>
    );
}