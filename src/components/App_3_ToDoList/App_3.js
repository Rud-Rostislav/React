import Logo from "./Logo";
import Form from "./Form";
import ToDoList from "./ToDoList";
import Stats from "./Stats";
import React, {useState} from "react";

export default function App_3() {
    // App 3
    const [items, setItems] = useState([]);

    function AddItems(item) {
        setItems(items => [...items, item]);
    }

    function deleteItem(id) {
        setItems(items => items.filter(item => item.id !== id));
    }

    function ToogleItem(id) {
        setItems(items => items.map(item => item.id === id ? {...item, done: !item.done} : item));
    }

    function clearItems() {
        setItems([]);
    }

    return (
        <div className="div_wrapper todo_list_gap div_100_percent_height">
            <Logo/>
            <Form items={items} itemsLength={items.length} onAddItems={AddItems} onCLearItems={clearItems}/>
            <ToDoList items={items} onDeleteItem={deleteItem} onToggleItem={ToogleItem}/>
            <Stats items={items}/>
        </div>
    );
}