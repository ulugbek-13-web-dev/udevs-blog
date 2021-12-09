import React from 'react'
import Header from '../Header/Header'
import BlogList from '../BlogList/BlogList'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import './Home.css'



export default function Home() {

    return (
        <div className="home">
            <div className="home-navbar">
                <Header></Header>
                <Login></Login>
            </div>
            <div className="home-blog">
                <div className="home-blog-container">
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                    <div className='blog-it'>
                        <BlogList></BlogList>
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </div>
    )
}
