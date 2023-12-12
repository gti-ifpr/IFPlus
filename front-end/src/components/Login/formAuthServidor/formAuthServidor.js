import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './formAuth.css'
import LoginImg from '../../../img/login.jpg'

function LoginFormServidor() {

    const [userServidor_cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(true)

        try {
            const formData = {
                userServidor_cpf: userServidor_cpf,
                userServidor_Senha: password
            };

            // console.log(formData)
            //esse console log é somente para teste. No dev tools, ele aparece para saber o que o formulário está enviando e se está enviando

            const response = await axios.post('http://localhost:3333/loginAuthServidor', formData,);

            if (response.status === 200 && response.data.success) {
                  navigate(`/contratos`);
              } else {
                console.error(`Erro no login do Servidor: ${response.data.message} ${formData}`);
              }
        } catch (error) {
            console.error(`Erro no login do Servidor:`, error);
        }
    };

    return (
        <div className="loginContainer">
            <div className="imgLeft">
                <img src={LoginImg} alt='imagem simbolizando um login'></img>
            </div>
            <div>
                <div className="login-form-auth">
                    <h1>Login de Servidor</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">    
                            <input placeholder="Seu CPF" type="text" id="userServidor_cpf" autocomplete="new-cpf"
                                value={userServidor_cpf} onChange={(event) => setCPF(event.target.value)} required
                            />
                        </div>
                        <div className="form-group">
                            <input placeholder="Senha" type="password" id="password" autocomplete="new-password"
                                value={password} onChange={(event) => setPassword(event.target.value)} required
                            />
                        </div>
                        <div className="form-group-button">
                            <button type="submit">Entrar</button>
                            <button onClick={() => navigate("/cadastroServidor")}>Cadastrar como Servidor</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginFormServidor;