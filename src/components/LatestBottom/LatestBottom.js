import React from 'react'
import LatestBottomItem from '../LatestBottomItem/LatestBottomItem'
import style from './LatestBottom.module.css'

export default function LatestBottom() {
    return (
        <div  className={style.mainBottom}>
            <div  className={style.mainLatest}>
                <div className={style.mainContainer}>
                    <h2>ПУБЛИКАЦИИ</h2>
                </div>
            </div>
            <LatestBottomItem></LatestBottomItem>
            <LatestBottomItem></LatestBottomItem>
            <LatestBottomItem></LatestBottomItem>
        </div>
    )
} 