import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css'
import img from '../../images/banner.jpg'

const Header = () => {
    return (
        <div>
            <div className="header-container ">
                <div className="">
                    <div className="row d-flex banner align-items-center justify-content-center">
                        <MenuBar></MenuBar>
                        <div className="col-md-6">
                            <h1 className="title">
                                SHAIFUL'S <br /> MATH ACADEMY
                            </h1>
                            <p className="my-text text-center mt-3">
                                From the creators of ABCmouse, My Math Academy is a breakthrough game-based program that adapts to your child's specific learning needs and habits. Perfect for children ages 15-20.
                            </p>
                            <button className="mt-3 about-btn">About Us</button>
                        </div>
                        <div className="col-md-6">
                            <img className="w-75" src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;