import React from "react";
import axios from "axios";
import "../styles/Login.css"

function Login() {
    return (
        <div className="containerLogin">
            <div className="containerLeftLogin">
                <div className="titleUpLogin">
                    <h1 className="titleUpLoginText">DataBase</h1>
                </div>
                <div className="logoLoginContainer">
                    <img src="https://thumbs.bfldr.com/at/6x3q9bsq4nj777n8sbbnp6?expiry=1680641688&fit=bounds&height=162&sig=NjIwNzE0MzVmOTlmYjEyYjM5ODEwYTFmYTNkODk5NWZlYmUxMWQxYg%3D%3D&width=262" alt="logo" className="logoLogin" />
                    {/* <img src="https://www.mongodb.com/assets/images/global/favicon.ico" alt="logo" className="logoLogin" /> */}
                </div>
                <div className="titleDownLogin">
                    <h1 className="titleDownLoginText">Manager</h1>
                </div>
            </div>
            <div className="containerRightLogin">
                <div className="titleLoginHello">
                    <h1 className="titleLoginHelloText">Hello!</h1>
                </div>
                <div className="inputsLoginContainer">
                    <div className="emailLoginContainer">
                        <p className="emailLoginText">Email</p>
                        <input type="text" className="emailLoginInput" />
                    </div>
                    <div className="passwordLoginContainer">
                        <p className="passwordLoginText">Password</p>
                        <input type="password" className="passwordLoginInput" />
                    </div>
                </div>
                <div className="buttonsLoginContainer">
                    <button className="buttonLogin">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;