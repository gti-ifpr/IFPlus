import React, { useState } from "react";
import './cadastrarContratos.css'
import axios from 'axios';

function CadastrarContrato() {
    const [formData, setFormData] = useState({
        con_id: "",
        con_alu_nome: "",
        con_ser_nome: "",
        con_organizacaoConcedente: "",
        con_centroIntegrador: "",
        con_numeroEstagio: "",
        con_numeroApolice: "",
        con_orientadorCampus: "",
        con_dataInicio: "",
        con_dataTermino: "",
        con_atividadesDesenvolvidas: "",
        con_supervisorEstagio: "",
        con_cargaHorariaSemanal: "",
        con_valorHora: "",
        con_valorBolsa: "",
        con_horarioInicio: "",
        con_horarioTermino: "",
        con_status: "",
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
            const response = await axios.post('http://localhost:3333/cadastroContrato', formData);
            console.log("Servidor respondeu:", response.data);
        } catch (error) {
            console.error("Erro ao enviar dados do aluno:", error);
        }
    };

    return (
        <div className="login-form">
            <h1>Cadastrar novo contrato</h1>
            <form onSubmit={handleSubmit}>

                <div className="login-form-columns">
                    <div className="login-form-left">
                        <div className="form-group"> {/* select aluno */}
                            <input type="text" id="con_alu_nome" name="con_alu_nome" placeholder="Nome do aluno"
                                value={formData.con_alu_nome} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* input organização concedente */}
                            <input type="text" id="con_organizacaoConcedente" name="con_organizacaoConcedente" placeholder="Organização concedente do estágio"
                                value={formData.con_organizacaoConcedente} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* input centro integrador */}
                            <input type="text" id="con_centroIntegrador" name="con_centroIntegrador" placeholder="Centro integrador"
                                value={formData.con_centroIntegrador} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* input centro integrador */}
                            <input type="text" id="con_numeroEstagio" name="con_numeroEstagio" placeholder="Número do contrato de Estágio"
                                value={formData.con_numeroEstagio} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* input número da apólice */}
                            <input type="number" id="con_numeroApolice" name="con_numeroApolice" placeholder="Número da apolice"
                                value={formData.con_numeroApolice} onChange={handleInputChange} required
                            />
                        </div>
                        <div className="form-group"> {/* input orientador do campus */}
                            <input type="text" id="con_orientadorCampus" name="con_orientadorCampus" placeholder="Orientador no campus"
                                value={formData.con_orientadorCampus} onChange={handleInputChange} required 
                            />
                        </div>
                        <div className="form-group"> { /* Input data de início*/ }
                            <input type="date" id="con_dataInicio" name="con_dataInicio" placeholder="Data de início do estágio"
                                    value={formData.con_dataInicio} onChange={handleInputChange} required 
                            />
                        </div>
                        <div className="form-group"> { /* Input data de término*/ }
                            <input type="date" id="con_dataTermino" name="con_dataTermino" placeholder="Data de término do estágio"
                                    value={formData.con_dataTermino} onChange={handleInputChange} required 
                            />
                        </div>
                    </div>

                    <div className="login-form-right">
                        <div className="form-group"> { /* Input Nome do supervisor*/ }
                            <input type="text" id="con_supervisorEstagio" name="con_supervisorEstagio" placeholder="Nome do supervisor"
                                    value={formData.con_supervisorEstagio} onChange={handleInputChange} required 
                            />
                        </div>
                        <div className="form-group"> { /* Input Carga Horaria Semanal*/ }
                            <input type="number" id="con_cargaHorariaSemanal" name="con_cargaHorariaSemanal" placeholder="Carga Horaria Semanal"
                                    value={formData.con_cargaHorariaSemanal} onChange={handleInputChange} required 
                            />
                        </div>
                        <div className="form-group"> { /* Input Valor da hora*/ }
                            <input type="number" id="con_valorHora" name="con_valorHora" placeholder="Valor da Hora"
                                    value={formData.con_valorHora} onChange={handleInputChange} required 
                            />
                        </div>
                        <div className="form-group"> { /* Input Horário de início da jornada*/ }
                            <input type="number" id="con_horarioInicio" name="con_horarioInicio" placeholder="Horário de início da jornada"
                                    value={formData.con_horarioInicio} onChange={handleInputChange} required 
                            />
                        </div>
                        <div className="form-group"> { /* Horário de término da jornada */ }
                            <input type="number" id="con_horarioTermino" name="con_horarioTermino" placeholder="Horário de término da jornada"
                                    value={formData.con_horarioTermino} onChange={handleInputChange} required 
                            />
                        </div>
                        <div className="form-group"> { /* Input Atividades desenvolvidas */ }
                            <input type="text" id="con_atividadesDesenvolvidas" name="con_atividadesDesenvolvidas" placeholder="Atividades desenvolvidas"
                                    value={formData.con_atividadesDesenvolvidas} onChange={handleInputChange} required 
                            />
                        </div>
                        <div className="form-group"> { /* Input Carga Horaria Semanal*/ }
                            <select id="con_status" name="con_status" value={formData.con_status}
                                onChange={handleInputChange} required >
                                <option value="">Selecione o status do estágio</option>
                                <option value="Em Andamento">Em Andamento</option>
                                <option value="Finalizado">Finalizado</option>
                            </select>
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

export default CadastrarContrato;