import React from 'react';
import './PageNotFound.css'
import image from '../../images/404.png'

const PageNotFound = () => {
    return (
        <div>

            <h1>Page Not Found</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default PageNotFound;