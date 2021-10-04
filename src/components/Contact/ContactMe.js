import { faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactMe.css'

const ContactMe = () => {
    return (
        <div className="contact-me">
            <div className="m-4">
                <h2>Contact us:</h2>
            </div>
            <div className="m-4">
                <h4>Phone: +880181680087</h4>
                <h5>Mail: shaifulshakib560@gmail.com</h5>
                <p>Narayanhat,Fatikchari
                    <br /> Chittagong,Bangladesh, NY 100</p>
            </div>
        </div>
    );
};

export default ContactMe;