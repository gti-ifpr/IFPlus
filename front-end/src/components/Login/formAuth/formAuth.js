
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import './formAuth.css'
import LoginImg from '../../../img/login.jpg'

function LoginForm() {

    const [login_cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");
    const [option, setOption] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault(true)

        console.log(option)

        if (option === "aluno"){
            try {
                const formData = {
                    alu_cpf: login_cpf,
                    alu_senha: password
                };
                console.log(formData)
                const response = await axios.post('http://localhost:3333/loginAuthAluno', formData);
                console.log("Servidor respondeu:", response.data);

                if (response.status === 200 && response.data.success) {
                    navigate(`/perfil/${login_cpf}`);
                } else {
                    console.error("Erro no login de aluno:", response.data.message);
                }
            } catch (error) {
                console.error("Erro no login de aluno:", error);
            }
        }
        if (option === "servidor"){
            try {
                const formData = {
                    ser_cpf: login_cpf,
                    ser_senha: password
                };
                console.log(formData)
                const response = await axios.post('http://localhost:3333/loginAuthServidor', formData);
        
                if (response.status === 200 && response.data.success) {
                  navigate('/contratos');
                } else {
                  console.error('Erro - login do Servidor', response.data.message);
                }
              } catch (error) {
                console.error('Erro no login do Servidor', error);
            }
        }
    };

    return (
        <div className="loginContainer">
            <div className="imgLeft">
                <img src={LoginImg} alt='imagem simbolizando um login'></img>
            </div>
            <div>
                <div className="login-form-auth">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <select name="select-option" id="select-option-id"  value={option} autocomplete="new-option"
                            onChange={(event) => setOption(event.target.value)} required>
                                <option value="">Selecione o tipo de acesso</option>
                                <option value="aluno">Acessar como Aluno</option>
                                <option value="servidor">Acessar como Servidor</option>
                            </select>
                        </div>
                        <div className="form-group">    
                            <input placeholder="Seu CPF" type="number" id="login_cpf" autocomplete="new-cpf"
                                value={login_cpf} onChange={(event) => setCPF(event.target.value)} required
                            />
                        </div>
                        <div className="form-group">
                            <input placeholder="Senha" type="password" id="password" autocomplete="new-password"
                                value={password} onChange={(event) => setPassword(event.target.value)} required
                            />
                        </div>
                        <div className="form-group-button">
                            <button type="submit">Entrar</button>
                            <button onClick={() => navigate("/cadastroAluno")}>Cadastrar como aluno</button>
                            <button onClick={() => navigate("/cadastroServidor")}>Cadastrar como Servidor</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;