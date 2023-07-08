import courses from "../data/courses_list";
import {Link} from "react-router-dom";

export default function Courses() {
    return (
        <div className='all-courses'>
            {courses.map(course => (
                <Link to={course.title} className='single-course' key={course.id}>
                    <div>
                        <h1>{course.id}. {course.title}</h1>
                    </div>
                </Link>
            ))}
        </div>
    )
}