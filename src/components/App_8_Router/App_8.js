import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import SingleCourse from "./pages/SingleCourse";
import App_1 from "../App_1_posts/App_1";
import React from "react";
import App_2 from "../App_2_pizza/App_2";
import App_3 from "../App_3_ToDoList/App_3";
import App_4 from "../App_4_questions/App_4";
import App_5 from "../App_5_form/App_5";
import App_6 from "../App_6_API/App_6";
import App_7 from "../App_7_ToDoList_2/App_7";

export default function App_8() {
    return (<BrowserRouter>
        <div className="app_8">
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="/" element={<Home/>}/>

                    <Route path='/App_1' element={<App_1/>}/>
                    <Route path='/App_2' element={<App_2/>}/>
                    <Route path='/App_3' element={<App_3/>}/>
                    <Route path='/App_4' element={<App_4/>}/>
                    <Route path='/App_5' element={<App_5/>}/>
                    <Route path='/App_6' element={<App_6/>}/>
                    <Route path='/App_7' element={<App_7/>}/>

                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/courses/:title" element={<SingleCourse/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>);
}