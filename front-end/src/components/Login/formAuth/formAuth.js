
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import './formAuth.css'
import LoginImg from '../../../img/login.jpg'

function LoginForm() {

    const [userAluno_cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");
    const [option, setOption] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(true)

        try {
            const formData = {
                userAluno_cpf: option === 'aluno' ? userAluno_cpf : null,
                ser_cpf: option === 'servidor' ? userAluno_cpf : null,
                userAluno_Senha: password,
                ser_senha: password,
            };

            // console.log(formData)
            //esse console log é somente para teste. No dev tools, ele aparece para saber o que o formulário está enviando e se está enviando

            const response = await axios.post(
                option === 'aluno' ? 'http://localhost:3333/loginAuthAluno' : 'http://localhost:3333/loginAuthServidor',
                formData,
                {
                    userAluno_cpf: option === 'aluno' ? userAluno_cpf : null,
                    userAluno_senha: password,
                },
                { withCredentials: true }
            );

            if (response.status === 200 && response.data.success) {
                if (option === 'aluno') {
                navigate(`/perfil/`);
                } else {
                navigate('/contratos');
                }
            } else {
                console.error(`Erro no login de ${option}: ${response.data.message} ${formData}`);
            }
        } catch (error) {
        console.error(`Erro no login de ${option}:`, error);
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
                            <input placeholder="Seu CPF" type="text" id="login_cpf" autocomplete="new-cpf"
                                value={userAluno_cpf} onChange={(event) => setCPF(event.target.value)} required
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