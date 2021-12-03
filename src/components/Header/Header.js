import React from 'react'
import U from '../../assets/u.png'
import devs from '../../assets/devs.png'
import Button from '@mui/material/Button';
import './Header.css'
export default function Header() {
    return (
        <div className="header-comp">
            <div className="header-top">
                <div className="header-top-container">
                    <div className="header-logo">
                        <img src={U} alt="U" />
                        <img src={devs} alt="devs" />
                    </div>
                    <div className="header-right">
                        <i class="far fa-bell"></i>
                        <Button variant="contained">Войти</Button>
                    </div>
                </div>

            </div>
            <div className="header-next">
                <ul>
                    <li><Button variant="contained">Все потоки</Button></li>
                    <li className="lilar">Разработка</li>
                    <li className="lilar">Aдминстрования</li>
                    <li className="lilar">Дизайн</li>
                    <li className="lilar">Менежмент</li>
                    <li className="lilar">Маркетинг</li>
                    <li className="lilar">Научпоп</li>
                </ul>
            </div>
        </div>
    )
}
