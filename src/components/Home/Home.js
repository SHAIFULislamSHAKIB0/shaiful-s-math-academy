import React from 'react';
import Header from '../../components/Header/Header'
import Blogs from '../../components/Blogs/Blogs'
import MyCourses from '../../components/MyCourses/MyCourses'
import Services from '../Services/Services';
import MenuBar from '../MenuBar/MenuBar';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Blogs></Blogs>

            <Services></Services>


        </div>
    );
};

export default Home;