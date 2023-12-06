import React, { useContext } from "react";
import { UserContext } from "./../../context/UserContext.js"

import './perfil.css'

function Perfil() {
    
    const { userInfo } = useContext(UserContext);

    return (
        <div>
            <h2>Perfil do Usuário</h2>
            <p>CPF: {userInfo.userAluno_cpf}</p>
            {/* Adicione mais informações do usuário conforme necessário */}
        </div>
    );
}

export default Perfil;
