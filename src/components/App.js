import Header from "./App_1/Header";
import Footer from "./App_1/Footer";
import Menu from "./App_1/Menu";
import Tips from "./App_2/Tips";
import Delimiter from "./Delimiter";
import Logo from "./App_3/Logo";
import Form from "./App_3/Form";
import ToDoList from "./App_3/ToDoList";
import Stats from "./App_3/Stats";
import {useState} from "react";
import Questions from "./App_4/Questions";


export default function App() {
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
        <div>
            <Delimiter text="1. React App - Pizza Co"/>
            <div className="Pizza_app">
                <Header/>
                <Menu/>
                <Footer/>
            </div>

            <Delimiter text="2. React App - Tips list"/>
            <Tips/>

            <Delimiter text="3. React App - To Do  list"/>
            <div className="Tips todo_list_gap">
                <Logo/>
                <Form items={items} itemsLength={items.length} onAddItems={AddItems} onCLearItems={clearItems}/>
                <ToDoList items={items} onDeleteItem={deleteItem} onToggleItem={ToogleItem}/>
                <Stats items={items}/>
            </div>

            <Delimiter text="4. React App - Questions"/>
            <Questions/>
        </div>
    );
}