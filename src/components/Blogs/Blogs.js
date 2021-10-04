import React, { useEffect, useState } from 'react';
import MyBlog from '../MyBlog/MyBlog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('./blogs.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="mt-4">
            <h1>Latest from the Blogs</h1>
            <div className="container my-blogs">
                {
                    blogs.map(blog => (
                        <div className="my-course">
                            <MyBlog key={blog.id} blog={blog}></MyBlog>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;