import React from 'react';
import './MyBlog.css'

const MyBlog = (props) => {
    const { title, des, img } = props.blog;
    return (
        <div className="recent-blogs">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{des}</p>
            <button className="about-btn">See more</button>

        </div>
    );
};

export default MyBlog;