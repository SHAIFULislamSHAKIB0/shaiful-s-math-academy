import React from 'react';
import Header from '../../components/Header/Header'
import Blogs from '../../components/Blogs/Blogs'
import MyCourses from '../../components/MyCourses/MyCourses'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Blogs></Blogs>
            <MyCourses></MyCourses>
        </div>
    );
};

export default Home;