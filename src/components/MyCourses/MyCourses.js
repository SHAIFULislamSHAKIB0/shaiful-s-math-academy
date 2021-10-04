import React, { useEffect, useState } from 'react';
import AllCourse from '../AllCourse/AllCourse';
import './MyCourses.css'

const MyCourses = () => {
    const [myAllCourses, setMyAllCourses] = useState([])
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setMyAllCourses(data))
    }, [])
    return (
        <div>
            <h2>Our All Services</h2>
            <div className="container  courses">
                {
                    myAllCourses.map(myAllCourse => (
                        <div className="my-course">
                            <AllCourse key={myAllCourse.id} myAllCourse={myAllCourse}></AllCourse>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyCourses;