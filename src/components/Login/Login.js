import React from "react";
import { useState } from "react";
import "./Login.css";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";


export default function Login() {
    const [IsOpen, setIsOpen] = useState(false);
    const [IsRegOpen, setRegIsOpen] = useState(false);
    const [IsLogged, setIsLogged] = useState(false);
    const [click, setClick] = useState(false)


    const [User, setUser] = useState({});

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPass, setRegisterPass] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPass, setLoginPass] = useState('');

    function changeClick(){
        setClick(!click)
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    async function registerHandler() {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPass
            );
            console.log(user)
            setRegIsOpen(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function loginHandler() {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPass
            );
            closeHandler();
            setIsLogged(true);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    }

    async function chiqishHandler() {
        await signOut(auth);
    }

    function modalHandler() {
        setIsOpen(true);
    }
    function signupHandler() {
        setRegIsOpen(true);
        setClick(false)
    }

    function closeHandler() {
        setIsOpen(false);
    }

    function onSubmit(e) {
        e.preventDefault();
    }


    return (
        <div className="login-container">
            {User && !IsLogged && (
                <button onClick={modalHandler} className="btn-login">
                    Войти
                </button>
            )}
            {User && IsLogged && !click &&(
                <div className="main-click-2">
                    <button className="btn-logout" onClick={changeClick}>
                        <img src="https://i.stack.imgur.com/frlIf.png" alt="" />
                    </button>
                    
                </div>

            )}
            {User && IsLogged && click &&(
                <div className="main-click">
                    <button className="btn-logout" onClick={changeClick}>
                        <img src="https://i.stack.imgur.com/frlIf.png" alt="" />
                    </button>
                    <ul className="btn-ul">
                        <li> <Link to='/add' className="nimadir">Написать публикацию</Link> </li>
                        <li><Link to="/latest" className="nimadir">Избранные</Link></li>
                        <li><button onClick={chiqishHandler} className="btn-btn-btn">Выйти</button> </li>
                    </ul>
                   
                </div>

            )}
            
            {!User && (
                <button onClick={signupHandler} className="btn-reg">
                    Регистрация
                </button>
            )}

            <div className="modal">
                <h1 className="modal__title">Login</h1>
            </div>
            <div>
                <div className={`modal ${IsOpen ? "visible" : ""}`}>
                    <h3 className="modal__title">Вход на udevs news</h3>
                    <form className="form" onSubmit={onSubmit}>
                        <div className="email-password">
                            <input
                                onChange={(e) => setLoginEmail(e.target.value)}
                                className="input email"
                                type="text"
                                placeholder="Email"
                            />
                            <input
                                onChange={(e) => {
                                    setLoginPass(e.target.value);
                                }}

                                className="input pass"
                                type="password"
                                placeholder="Пароль"
                            />
                        </div>
                        <div className="login-btn-btn">
                            <button className="btn_login" type="submit" onClick={loginHandler}>Войти</button>
                        </div>
                    </form>


                </div>
                {IsOpen && <div onClick={closeHandler} className="overlay" />}
            </div>

            <div>
                <div className={`modal ${IsRegOpen ? "visible" : ""}`}>
                    <h3 className="modal__title">Регистрация на udevs news</h3>
                    <div className="form-register">
                        <input
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            className="input email"
                            type="text"
                            placeholder="Email"
                        />
                        <input
                            onChange={(e) => setRegisterPass(e.target.value)}
                            className="input pass"
                            type="password"
                            placeholder="Пароль"
                        />
                        <button onClick={registerHandler} className="btn_login">
                            Регистрация
                        </button>

                    </div>
                </div>
            </div >

        </div>
    );
}
