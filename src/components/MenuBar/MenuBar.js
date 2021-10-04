import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css'

const MenuBar = () => {
    return (
        <div className="full-container">


            <div className="container p-2 ">
                <div className="row">
                    <div className="col-md-2">
                        <div className="text-danger">
                            <h4>SHAIFUL'S CARE</h4>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="nav-link">
                                    <li>Home</li>
                                </Link>

                                <Link to="/blogs" className="nav-link">
                                    <li>Blogs</li>
                                </Link>
                                <Link to="/about" className="nav-link">
                                    <li>About me</li>
                                </Link>
                                <Link to="/services" className="nav-link">
                                    <li>Services</li>
                                </Link>
                                <Link to="/contact" className="nav-link">
                                    <li>Contact us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MenuBar;