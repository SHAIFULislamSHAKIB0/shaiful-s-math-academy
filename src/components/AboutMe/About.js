import React from 'react';
import img from '../../images/banner1.png'

const About = () => {
    return (
        <div>
            <div className="container header-container ">
                <div className="">
                    <div className="row d-flex align-items-center justify-content-center">
                        {/* <MenuBar></MenuBar> */}
                        <div className="col-md-6">
                            <h1 className="title">
                                THIS IS MD <br /> SHAIFUL ISLAM SHAKIB
                            </h1>
                            <p className="my-text text-center mt-3">
                                Hi,This is Md Shaiful Islam Shakib.I am from fatikchari,Chittagong.I completed my graduation in Bsc in Computer Science.Now I am professionally a Math teacher.
                            </p>
                            <button className="mt-3 about-btn">More About me</button>
                        </div>
                        <div className="col-md-6">
                            <img className="w-75 m-3" src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;