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
            const response = await axios.post('http://localhost:3333/addUserAluno', formData);
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
                            <input type="text" id="userAluno_nome" name="userAluno_nome" placeholder="Nome completo"
                                value={formData.userAluno_nome} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="userAluno_cpf" name="userAluno_cpf" placeholder="CPF"
                                value={formData.userAluno_cpf} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" id="userAluno_email" name="userAluno_email" placeholder="E-mail"
                                value={formData.userAluno_email} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="tel" id="userAluno_telefone" name="userAluno_telefone" placeholder="Telefone celular"
                                value={formData.userAluno_telefone} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="userAluno_rg" name="userAluno_rg" placeholder="RG"
                                value={formData.userAluno_rg} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="userAluno_Matricula" name="userAluno_Matricula" placeholder="Matrícula"
                                value={formData.userAluno_Matricula} onChange={handleInputChange} required
                            />
                        </div>

                    </div>

                    <div className="login-form-right">
                        <div className="form-group">
                            <input type="text" id="userAluno_Sexo" name="userAluno_Sexo" placeholder="Sexo"
                                value={formData.userAluno_Sexo} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <select id="userAluno_Ativo" name="userAluno_Ativo" value={formData.con_EstagioAtivo}
                                onChange={handleInputChange} required >
                                <option value="">Status do Aluno</option>
                                <option value="1">Ativo</option>
                                <option value="0">Ex-aluno</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Data de Nascimento</label>
                            <input type="date" id="userAluno_Nascimento" name="userAluno_Nascimento" placeholder="Data de Nascimento"
                                value={formData.userAluno_Nascimento} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="userAluno_Curso" name="userAluno_Curso" placeholder="Curso"
                                value={formData.userAluno_Curso} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="userAluno_Periodo" name="userAluno_Periodo" placeholder="Período"
                                value={formData.userAluno_Periodo} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="userAluno_Disponibilidade" name="userAluno_Disponibilidade" placeholder="Disponibilidade"
                                value={formData.userAluno_Disponibilidade} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" id="userAluno_Senha" name="userAluno_Senha" placeholder="Senha"
                                value={formData.userAluno_Senha} onChange={handleInputChange} required
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