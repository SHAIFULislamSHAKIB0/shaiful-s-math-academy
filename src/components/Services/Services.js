import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Services.css'

const Services = () => {
    const [courses, setCourses] = useState([])
    const myCourses = courses.slice(0, 4)

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (

        <div>
            <h1 className="mt-4">Our Lattest Courses</h1>
            <div className="container courses " >

                {
                    myCourses.map(course => (
                        <div className="my-course">
                            <Course key={course.id} course={course}></Course>
                        </div>

                    ))
                }
            </div>
        </div>

    );
};

export default Services;