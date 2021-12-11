import React from 'react'
import Image from '../../assets/about-main.png'
import style from './LatestBottomItem.module.css'

export default function LatestBottomItem() {
    return (
        <div className={style.mainBottom}>
            <div  className={style.mainItem}>
                <div  className={style.mainAsosiy}>
                    <div  className={style.mainLeft}>
                        <img src={Image} alt="" className={style.mainImage} />
                    </div>
                    <div  className={style.mainRight}>
                        <h3>
                            По инициативе Узбекистана создана Группа
                            друзей по правам молодежи
                        </h3>
                        <p>
                            Посланник Генерального секретаря ООН по делам молодежи
                            Джаятма Викраманаяке приняла участие в презентации созданной
                            по инициативе Узбекистана Группе друзей по правам молодежи.
                            В рамках этого международного проекта планируется продвижение
                            прав молодых жителей планеты и расшире...
                        </p>
                        <button>Читать</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 