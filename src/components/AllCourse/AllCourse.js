import React from 'react';
import './AllCourse.css'

const AllCourse = (props) => {
    const { name, img, price } = props.myAllCourse;
    return (
        <div>
            <div className="math-course">

                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>Price:<span className="price"> ${price}</span></p>
                <button className="about-btn">Buy now</button>

            </div>
        </div>
    );
};

export default AllCourse;