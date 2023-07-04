import {useState} from "react";

export default function ToDoList({items, onDeleteItem, onToggleItem}) {
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    if (sortBy === 'input')
        sortedItems = items;
    if (sortBy === 'text')
        sortedItems = items.slice().sort((a, b) => a.text.localeCompare(b.text));
    if (sortBy === 'done')
        sortedItems = items.slice().sort((a, b) => Number(b.done) - Number(a.done));

    return (
        <>
            <div>
                <select className='select_sort' value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="text">Sort by name</option>
                    <option value="done">Sort by done</option>
                </select>
            </div>
            <ul className="todo_ul">
                {sortedItems.map((item) => (
                    <li key={item.id} className="todo_li" style={item.done ? {backgroundColor: '#007700'} : {}}>
                        <div className='todo_li_div'>
                            {item.text}
                        </div>
                        <div className='checkbox_and_delete'>
                            <input type='checkbox' value={item.done} onChange={() => onToggleItem(item.id)}
                                   className='todo_checkbox'/>
                            <button className="Button_delete_todo"
                                    onClick={() => onDeleteItem(item.id)}>X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
