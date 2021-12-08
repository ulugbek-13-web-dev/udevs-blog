import React, { useEffect, useState } from "react"
import BlogListItem from '../BlogListItem/BlogListItem'
import {Link} from 'react-router-dom'
import './BlogList.css'
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/3";

function BlogList({title,body}){
    const [post, setPost] = useState([])
    useEffect(() => {
        axios
            .get(baseURL)
            .then(({ data }) => {
                setPost(data)
                console.log(`bu post ${data}`)
            })
            .catch((error) => console.error(error))
    }, [])
    return(
        <div className='blog-list-main'>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            <Link to="/about" className="link-li">
                <BlogListItem blogTitle = {post.title} blogBody={post.body} />
            </Link>
            
        </div>
    )
}

export default BlogList