import React from "react"
import Photo from '../../assets/rec1.png'
import './BlogListItem.css'
import { Link } from 'react-router-dom'

function BlogListItem(props) {
    return (
        <div className='blog-list--item'>
            <Link to="/about" className="link-li">
                <img src={props.blogImage} alt='fotka' className="blog-list-image" />
                <p id='secondary-info'>18:26  11.01.2021  |   365</p>
                <p>{props.blogTitle}</p>
            </Link>
        </div>
    )

}

export default BlogListItem