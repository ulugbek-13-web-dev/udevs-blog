import React, { useEffect, useState } from "react"
import BlogListItem from '../BlogListItem/BlogListItem'

import './BlogList.css'
import { db } from '../../firebase'
import { collection, getDocs } from '@firebase/firestore'


function BlogList() {
    const [post, setPost] = useState([]);
    const postCollectionRef = collection(db, 'posts')
    useEffect(() => {
        getPostsFromStore()
    }, [])
    function getPostsFromStore() {
        getDocs(postCollectionRef).then((res) => {
            setPost(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
    }

    return (
        <div className='blog-list-main'>
            {
                post.map((item) => (
                    <BlogListItem 
                        blogImage = {item.image2}
                        blogTitle={item.title} 
                        blogBody={item.description} 
                        className="link-li" />
                ))
            }


        </div>
    )
}

export default BlogList