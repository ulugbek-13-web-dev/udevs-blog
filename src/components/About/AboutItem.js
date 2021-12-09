import React from 'react'
import dilIcon from '../../assets/dil-icon.png'
import './AboutItem.css'

export default function AboutItem(props) {
    return (
        <div className='main-about-item'>
            <div className="about-item-container">
                <div className="about-cont-1">
                    <div className="about-cont-1-container">
                        <div className='image-about-1'>
                            <img src={props.dilorom} alt="" />
                        </div>
                        <p>Dilorom Aliyeva</p>
                        <div className='about-cont-btn'>
                            <button>Follow</button>
                            <div className='dil-icon-cont'>
                                <img src={dilIcon} alt="nimadir" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-cont-2">
                    <div className="about-cont-2-container">
                        <div className="about-cont-2-image">
                            <img src={props.image} alt="" />
                        </div>
                        <div className="about-cont-2-date">
                            <p>18:26 11.01.2021 | 365</p>
                        </div>
                        <div className="about-cont-2-title">
                            <h2>{props.title2}</h2>
                            <p>
                                {props.body}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
