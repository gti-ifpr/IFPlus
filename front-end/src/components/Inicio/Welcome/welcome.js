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
                    <h1>Bem-Vindo ao IFPLUS!</h1>
                    <div className="container-buttons">
                        <Link to="/loginAluno" className="buttonWelcome">Logar como Aluno</Link>
                        <Link to="/loginServidor" className="buttonWelcome">Logar como Servidor</Link>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default Welcome