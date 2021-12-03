import React from "react"
import Photo from '../../assets/rec1.png'
import './BlogListItem.css'

function BlogListItem(){
    return(
        <div className='blog-list--item'>
            <img src={Photo} alt='fotka'/>
            <p id='secondary-info'>18:26  11.01.2021  |   365</p>
            <p>ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....</p>

        </div>
    )

}

export default BlogListItem