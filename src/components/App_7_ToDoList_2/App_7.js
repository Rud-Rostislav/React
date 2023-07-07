import {useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App_7() {
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(0);

    function addTodo(text) {
        setId(id => id + 1);
        setTodos(todos => [...todos, {id: id + 1, text: text, isCompleted: false}]);
    }

    function clearTodos() {
        setTodos([]);
    }

    function deleteTodo(id) {
        const updatedPosts = todos.filter(post => post.id !== id)
            .map((post, index) => ({
                ...post, id: index + 1,
            }));

        setTodos(updatedPosts);
    }

    function deleteCompletedTodos() {
        setTodos(todos.filter(todo => !todo.isCompleted));
    }

    function markCompleted(id) {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : {...todo}));
    }

    const doneItems = todos.filter(item => item.isCompleted);
    const donePersent = doneItems.length / todos.length * 100;

    return (<div className='div_100_percent_height'>
        <TodoForm todos={todos} addTodo={addTodo} clearTodos={clearTodos} deleteCompletedTodos={deleteCompletedTodos}/>
        {donePersent !== 100 && todos.length > 0 &&
            <h2 className='margin_top_50'>Із {todos.length} виконано {todos.filter(todo => todo.isCompleted).length}
                ({donePersent.toFixed(0)}%)</h2>}
        <h2 className='margin_25'>{donePersent === 100 ? "Ви виконали всі завдання!" : ""}</h2>
        <TodoList todos={todos} deleteTodo={deleteTodo} markCompleted={markCompleted}/>
    </div>);
}