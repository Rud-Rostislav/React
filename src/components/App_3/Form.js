import {useState} from "react";

export default function Form({onAddItems, itemsLength, onCLearItems}) {
    const [list, setList] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!list) return;
        const newTodo = {
            id: itemsLength + 1,
            text: list,
            done: false
        }
        onAddItems(newTodo);
        setList("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Додати справу" className="Input_todo Next_button" value={list}
                       onChange={(e) => setList(e.target.value)}/>
                <button className="Button_active Next_button">Add</button>
            </form>
            <button className="Button_active Next_button Clear_button" onClick={onCLearItems}>Clear All</button>
        </div>
    );
}