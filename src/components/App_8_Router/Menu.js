import {NavLink} from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <NavLink to={'/'}>Start</NavLink>

            <NavLink to={'/App_1'}>App 1</NavLink>
            <NavLink to={'/App_2'}>App 2</NavLink>
            <NavLink to={'/App_3'}>App 3</NavLink>
            <NavLink to={'/App_4'}>App 4</NavLink>
            <NavLink to={'/App_5'}>App 5</NavLink>
            <NavLink to={'/App_6'}>App 6</NavLink>
            <NavLink to={'/App_7'}>App 7</NavLink>

            <NavLink to={'/courses'}>Courses</NavLink>
        </nav>
    )
}