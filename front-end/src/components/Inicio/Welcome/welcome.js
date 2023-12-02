import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../img/iflogo.png'
import welcome from '../../../img/welcome.png'
import './welcome.css';

function Welcome () {
    return(
        <>
            <div className="containerWelcome">
                <div className="welcomeLeft">
                    <img src={welcome} alt="Welcome"></img>
                </div>
                <div className="welcomeRight">
                    <img src={Logo} alt="Logo do IFPR"></img>
                    <h1>Bem-Vindos ao IFPLUS!</h1>
                    <Link to="/login" className="buttonWelcome">Login</Link>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default Welcome