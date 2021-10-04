import React from 'react';
import './Course.css'

const Course = (props) => {
    console.log(props.course)
    const { name, img, price } = props.course;
    return (
        <div className="math-course">

            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:<span className="price"> ${price}</span></p>
            <button className="about-btn">Buy now</button>

        </div>
    );
};

export default Course;