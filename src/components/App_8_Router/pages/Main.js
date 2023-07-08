import {Outlet} from "react-router-dom";
import Menu from "../Menu";

export default function Main() {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}