import React, { useState } from "react";
import './cadastroServidor.css'
import axios from 'axios';

function CadastroServidorForm(){

    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        siape: "",
        email: "",
        telefone: "",
        funcao: "",
        cargo: "",
        campus: "",
        senha: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {

        try {
            const response = await axios.post('http://localhost:3333/addUserServidor', formData);
            console.log("Servidor respondeu:", response.data);
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }
    };

    return( 
        <div className="login-form">
            <h1>Cadastre-se como servidor</h1>
            <form onSubmit={handleSubmit}>

                <div className="login-form-columns">
                    <div className="login-form-left">
                        <div className="form-group"> {/* Input nome */}
                            <input type="text" id="userServidor_nome" name="userServidor_nome" placeholder="Seu nome completo"
                                value={formData.nouserServidor_nomeme} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* Input CPF */}
                            <input type="number" id="userServidor_cpf" name="userServidor_cpf" placeholder="Seu CPF"
                                value={formData.userServidor_cpf} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* Input email */}
                            <input type="email" id="userServidor_email" name="userServidor_email" placeholder="Seu e-mail"
                                value={formData.userServidor_email} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* Input telefone */}
                            <input type="tel" id="userServidor_telefone" name="userServidor_telefone" placeholder="Seu Telefone"
                                value={formData.userServidor_telefone} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* Input SIAPE */}
                            <input type="text" id="userServidor_Siape" name="userServidor_Siape" placeholder="Seu SIAPE"
                                value={formData.userServidor_Siape} onChange={handleInputChange} required
                            />
                        </div>
                    </div>
                
                    <div className="login-form-right">
                            <div className="form-group"> {/* Input função */}
                                <input type="text" id="userServidor_Funcao" name="userServidor_Funcao" placeholder="Sua Função"
                                    value={formData.userServidor_Funcao} onChange={handleInputChange} required
                                />
                            </div>
                            <div className="form-group"> { /* input cargo */ }
                                <input type="text" id="userServidor_cargo" name="userServidor_cargo" placeholder="Seu cargo"
                                    value={formData.userServidor_cargo} onChange={handleInputChange} required
                                />
                            </div>
                            <div className="form-group"> { /* input campus */ }
                                <input type="text" id="userServidor_Campus" name="userServidor_Campus" placeholder="Campus"
                                    value={formData.userServidor_Campus} onChange={handleInputChange} required
                                />
                            </div>
                            <div className="form-group">
                            <select id="userServidor_Ativo" name="userServidor_Ativo" value={formData.userServidor_Ativo}
                                onChange={handleInputChange} required >
                                <option value="">Status do Servidor</option>
                                <option value="1">Ativo</option>
                                <option value="0">Ex-Servidor</option>
                            </select>
                        </div>
                            <div className="form-group"> { /* input Senha */ }
                                <input type="password" id="userServidor_Senha" name="userServidor_Senha" placeholder="Defina uma senha"
                                    value={formData.userServidor_Senha} onChange={handleInputChange} required
                                />
                            </div>
                    </div>

                </div>
                
                <div className="form-group">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default CadastroServidorForm;