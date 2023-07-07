import {useState} from "react";

export default function TodoForm({todos, addTodo, clearTodos, deleteCompletedTodos}) {
    const [text, setText] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        if (text !== '') {
            addTodo(text);
            setText('');
        } else {
            alert("Додайте текст")
        }
    }

    return (
        <>
            <h1>React планувальник завдань</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='Введіть задачу' value={text} onChange={e => setText(e.target.value)}
                       className='margin_25'/>
                <div>
                    <button type='submit'>Додати</button>
                </div>
            </form>

            {!!todos.length && <button className='clear_button' onClick={clearTodos}>Очистити все</button>}
            {todos.filter(todo => todo.isCompleted).length ?
                <button className='clear_button' onClick={deleteCompletedTodos}>Очистити виконані</button> : ''}
        </>
    );
}