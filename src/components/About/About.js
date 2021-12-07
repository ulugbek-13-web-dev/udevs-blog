import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EllipseImage from '../../assets/ellipse.png'
import AboutMainImage from '../../assets/about-main.png'
import Main3Image from '../../assets/main-3.png'
import Footer from '../Footer/Footer'
import axios from 'axios'
import './About.css'


const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function About() {
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

    return (
        <div>
            <Header></Header>
            <div className="main-about">
                <div className="main-about-cont">
                    <div className="about-1">
                        <div className="about-1-container">
                            <img src={EllipseImage} alt="Ellipse Imahge" />
                            <p className="dilorom-p">Dilorom Aliyeva</p>
                            <div className="buttons">
                                <ButtonGroup variant="contained" className="buttons-group" aria-label="outlined primary button group">
                                    <Button>Follow</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    <div className="about-2">
                        <div className="about-2-container">
                            <img src={AboutMainImage} alt="About Main Image" />
                            <h2>{post.title}</h2>
                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>

                    <div className="about-3">
                        <div className="about-3-container">
                            <h2>ЛУЧШИЕ БЛОГИ</h2>
                            <div className="about-3-main">
                                <div className="about-3-1">
                                    <img src={Main3Image} alt="" />
                                    <p>{post.title}</p>
                                </div>
                                <div className="about-3-1">
                                    <img src={Main3Image} alt="" />
                                    <p>{post.title}</p>
                                </div>
                                <div className="about-3-1">
                                    <img src={Main3Image} alt="" />
                                    <p>{post.title}</p>
                                </div>
                                <div className="about-3-1">
                                    <img src={Main3Image} alt="" />
                                    <p>{post.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
