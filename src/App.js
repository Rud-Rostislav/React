import React, {useState} from "react";
import App_1 from "./components/App_1_posts/App_1";
import App_2 from "./components/App_2_pizza/App_2";
import App_3 from "./components/App_3_ToDoList/App_3";
import App_4 from "./components/App_4_questions/App_4";
import App_5 from "./components/App_5_form/App_5";
import App_6 from "./components/App_6_API/App_6";
import App_7 from "./components/App_7_ToDoList_2/App_7";

export default function App() {
    // DarkMode
    const [darkModeToogle, setDarkModeToogle] = useState(true)
    const darkMode = {background: '#1d1e1f'};
    const lightMode = {background: '#ffffff'};

    function toggleDarkMode() {
        setDarkModeToogle(!darkModeToogle)
    }

    return (<div style={{backgroundColor: darkModeToogle ? darkMode.background : lightMode.background}}>
        <App_1 darkModeToogle={darkModeToogle} toggleDarkMode={toggleDarkMode}/>

        <App_2/>

        <App_3/>

        <App_7/>

        <App_4/>

        <App_5/>

        <App_6/>

    </div>);
}