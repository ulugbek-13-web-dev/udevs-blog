import React from "react";
import Dilorom from '../../assets/ellipse.png'
import style from './LatestTop.module.css'

export default function LatestTop(){
    return(
        <div className="main-latest-top" className={style.mainLatest}>
            <div className="main-latest-top-cont" className={style.mainContainer}>
                <div className="main-latest-top-left" className={style.mainLeft}> 
                    <img src={Dilorom} alt="dilorom-png" />
                </div>
                <div className="main-latest-top-right" className={style.mainRight}>
                    <h2>Дилором Алиева</h2>
                    <div className="main-latest-table" className={style.mainTable}>
                        <table>
                            <tr>
                                <td>Карьера</td>
                                <td>Писатель</td>
                            </tr>
                            <tr>
                                <td>Дата рождения</td>
                                <td>2 ноября, 1974  ( 46 лет)</td>
                            </tr>
                            <tr>
                                <td>Место рождения</td>
                                <td>Черняховск, СССР (Россия)</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}