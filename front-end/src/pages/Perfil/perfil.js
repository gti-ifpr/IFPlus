import React, { useContext } from "react";
import { UserContext } from "./../../context/UserContext.js"

import './perfil.css'

function Perfil() {
    
    const { userInfo } = useContext(UserContext);
    console.log(userInfo)

    return (
        <UserContext value={userInfo}>
            <div>
                <h2>Perfil do Usuário</h2>
                <h1>{userInfo}</h1>
                {/* <p>CPF: {userInfo.userAluno_cpf}</p> */}
                {/* Adicione mais informações do usuário conforme necessário */}
            </div>
        </UserContext>
    );
}

export default Perfil;
