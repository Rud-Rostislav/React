import courses from "../data/courses_list";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

export default function SingleCourse() {
    const params = useParams()
    const navigate = useNavigate()
    const course = courses.find(course => course.title === params.title)

    useEffect(() => {
        if (!course) {
            navigate('..', {relative: 'path'})
        }
    }, [course, navigate])

    return (
        <>
            <div className='all-courses'>
                <div className='single-course'>
                    <h1>{course?.id}. {course?.title}</h1>
                    <p>{course?.text}</p>
                </div>
            </div>
            <Link to={'/courses'} className='margin_25'>All courses</Link>
        </>
    )
}