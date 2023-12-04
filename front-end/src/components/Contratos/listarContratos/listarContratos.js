import React, { useEffect, useState } from "react";
import './listarContratos.css';
import axios from "axios";

function ListarContratos() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/listarContratos')
        .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Erro na requisição GET:", error);
      });
  }, []);

  return (

    <div>
        <table id="keywords" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th>N° Estágio</th>
              <th>Aluno</th>
              <th>Orientador</th>
              <th>Organização concedente</th>
              <th>Data de término</th>
            </tr>
          </thead>
          <tbody>
            {data.map((contrato, index) => (
              <tr key={index}>
                <td>{contrato.con_numeroEstagio}</td>
                <td>{contrato.con_alu_nome}</td>
                <td>{contrato.con_orientadorCampus}</td>
                <td>{contrato.con_organizacaoConcedente}</td>
                <td>{contrato.con_dataTermino}</td>
              </tr>
             ))}
          </tbody>
        </table>
    </div>
  );
}

export default ListarContratos;