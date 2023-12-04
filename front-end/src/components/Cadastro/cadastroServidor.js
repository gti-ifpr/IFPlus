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
            const response = await axios.post('http://localhost:3333/cadastroServidor', formData);
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
                            <input type="text" id="nome" name="nome" placeholder="Seu nome completo"
                                value={formData.nome} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* Input CPF */}
                            <input type="number" id="cpf" name="cpf" placeholder="Seu CPF"
                                value={formData.cpf} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* Input SIAPE */}
                            <input type="text" id="siape" name="siape" placeholder="Seu SIAPE"
                                value={formData.siape} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* Input email */}
                            <input type="email" id="email" name="email" placeholder="Seu e-mail"
                                value={formData.email} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* Input telefone */}
                            <input type="tel" id="telefone" name="telefone" placeholder="Seu Telefone"
                                value={formData.telefone} onChange={handleInputChange} required
                            />
                        </div>
                    </div>
                
                    <div className="login-form-right">
                            <div className="form-group"> {/* Input função */}
                                <input type="text" id="funcao" name="funcao" placeholder="Sua Função"
                                    value={formData.funcao} onChange={handleInputChange} required
                                />
                            </div>
                            <div className="form-group"> { /* input cargo */ }
                                <input type="text" id="cargo" name="cargo" placeholder="Seu cargo"
                                    value={formData.cargo} onChange={handleInputChange} required
                                />
                            </div>
                            <div className="form-group"> { /* input campus */ }
                                <input type="text" id="campus" name="campus" placeholder="Campus"
                                    value={formData.campus} onChange={handleInputChange} required
                                />
                            </div>
                            <div className="form-group"> { /* input Senha */ }
                                <input type="password" id="senha" name="senha" placeholder="Defina uma senha"
                                    value={formData.senha} onChange={handleInputChange} required
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