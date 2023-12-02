import React, { useState } from "react";
import './cadastroAluno.css'
import axios from 'axios';
//import { redirect } from "react-router-dom";

function CadastroAlunoForm() {
    const [formData, setFormData] = useState({
        alu_id: "",
        alu_nome: "",
        alu_cpf: "",
        alu_rg: "",
        alu_matricula: "",
        alu_email: "",
        alu_telefone: "",
        alu_senha: "",
        alu_sexo: "",
        alu_ativo: "",
        alu_dataNascimento: "",
        alu_curso: "",
        alu_periodo: "",
        alu_disponibilidade: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        //event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3333/cadastroAluno', formData);
            console.log("Servidor respondeu:", response.data);
        } catch (error) {
            console.error("Erro ao enviar dados do aluno:", error);
        }
    };

    return (
        <div className="login-form">
            <h1>Cadastre-se como aluno</h1>
            <form onSubmit={handleSubmit}>

                <div className="login-form-columns">
                    <div className="login-form-left">
                        <div className="form-group">
                            <input type="text" id="alu_nome" name="alu_nome" placeholder="Nome completo"
                                value={formData.alu_nome} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="alu_cpf" name="alu_cpf" placeholder="CPF"
                                value={formData.alu_cpf} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="alu_rg" name="alu_rg" placeholder="RG"
                                value={formData.alu_rg} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="alu_matricula" name="alu_matricula" placeholder="Matrícula"
                                value={formData.alu_matricula} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" id="alu_email" name="alu_email" placeholder="E-mail"
                                value={formData.alu_email} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="tel" id="alu_telefone" name="alu_telefone" placeholder="Telefone celular"
                                value={formData.alu_telefone} onChange={handleInputChange} required
                            />
                        </div>

                    </div>

                    <div className="login-form-right">
                        <div className="form-group">
                            <input type="text" id="alu_sexo" name="alu_sexo" placeholder="Sexo"
                                value={formData.alu_sexo} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="date" id="alu_dataNascimento" name="alu_dataNascimento" placeholder="Data de Nascimento"
                                value={formData.alu_dataNascimento} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="alu_curso" name="alu_curso" placeholder="Curso"
                                value={formData.alu_curso} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="alu_periodo" name="alu_periodo" placeholder="Período"
                                value={formData.alu_periodo} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="alu_disponibilidade" name="alu_disponibilidade" placeholder="Disponibilidade"
                                value={formData.alu_disponibilidade} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" id="alu_senha" name="alu_senha" placeholder="Senha"
                                value={formData.alu_senha} onChange={handleInputChange} required
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

export default CadastroAlunoForm;