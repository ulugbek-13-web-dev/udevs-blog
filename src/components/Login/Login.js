import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

export default function Login() {
    const [IsOpen, setIsOpen] = useState(false);
    const [Email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
    const [IsAuthorized, setIsAuthorized] = useState(false);
    const localData = localStorage.getItem('localStrorageData')
    function modalHandler() {
        setIsOpen(true);
    }
    function closeHandler() {
        setIsOpen(false);
    }
    function onSubmit(e) {
        e.preventDefault();
        localStorage.setItem('localStrorageData',true)
        const elon = {
            email: "u.davronov.1999@gmail.com",
            pass: "123456",
        };
        if (Email === elon.email && Pass === elon.pass) {
            setIsAuthorized(true);
        }
        closeHandler();
    }
    function emailHandler(e) {
        setEmail(e.target.value);
    }
    function passHandler(e) {
        setPass(e.target.value);
    }
    return (
        <div className="login-container">
            <FontAwesomeIcon className="bell-icon" size={"3x"} icon={faBell} />
            {!IsAuthorized && !localData &&(
                <button onClick={modalHandler} className="btn-login">
                    Войти
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
                                onChange={emailHandler}
                                className="input email"
                                type="text"
                                placeholder="Email"
                            />
                            <input
                                onChange={passHandler}
                                className="input pass"
                                type="password"
                                placeholder="Пароль"
                            />
                        </div>
                        <div className="login-btn-btn">
                            <button className="btn_login" type="submit">Войти</button>
                        </div>
                    </form>


                </div>
                {IsOpen && <div onClick={closeHandler} className="overlay" />}
            </div>
        </div >
    );
}
