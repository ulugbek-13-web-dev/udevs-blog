import React from 'react'
import Header from '../Header/Header'
import BlogList from '../BlogList/BlogList'
import Footer from '../Footer/Footer'
import './Home.css'



export default function Home() {
   
    return (
        <div className="home">
            <Header></Header>
            <div className="home-blog">
                <div className="home-blog-cont">
                    <BlogList></BlogList>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
