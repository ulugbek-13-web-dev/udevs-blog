import React from "react"
import Photo from '../../assets/rec1.png'
import './BlogListItem.css'

function BlogListItem(props){
    return(
        <div className='blog-list--item'>
            <img src={Photo} alt='fotka'/>
            <p id='secondary-info'>18:26  11.01.2021  |   365</p>
            <p>{props.blogTitle}</p>
        </div>
    )

}

export default BlogListItem