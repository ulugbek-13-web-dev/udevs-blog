import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { db } from '../../firebase'
import { collection, getDocs } from '@firebase/firestore'
import './About.css'
import AboutItem from './AboutItem';

export default function About() {
    const [post, setPost] = useState([])
    console.log(post.slice(0,2))
    const postCollectionRef = collection(db, 'posts')

    useEffect(() => {
        getPostsFromStore();
    }, [])  
    function getPostsFromStore() {
        getDocs(postCollectionRef).then((res) => {
            setPost(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(`this is response => ${res[0]}`)
        })
    }
    return (
        <div>
            <Header></Header>
            {
                post.map((item) => (
                    <AboutItem 
                        key={item.id} 
                        title={item.title}
                        body={item.description} 
                        image={item.image}
                        dilorom={item.dilorom}
                        title2={item.title2}

                     />
                ))
            }
            <Footer />
        </div>
    )
}
