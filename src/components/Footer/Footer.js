import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {

    faPhone,
    faMap,
    faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>SHAIFUL'S MATH ACADEMY</h1>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="right-footer-container">

                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div>
                                        <h5>+8801816800887</h5>
                                        <h6>shaifulshakib560@gmail.com</h6>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center mt-2">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMap} />
                                    </div>
                                    <div>
                                        <p>
                                            Narayanhat,Fatikchari
                                            <br /> Chittagong,Bangladesh, NY 100
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
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
                                    <Link to="contact" className="nav-link">
                                        <li>Contact us</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <p className="">
                        <small>SHAIFUL'S © . All rights reserved.</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;