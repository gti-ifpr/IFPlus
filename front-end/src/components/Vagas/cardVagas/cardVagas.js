import React from "react";
import './cardVagas.css'; // Importe um arquivo CSS para estilizar o componente se necessário

function CardVaga({ titulo, nomeDoLugar, horarioDisponivel }) {
    return (
        <div className="card-vaga-container">
            <h2>{titulo}</h2>
            <p>Local: {nomeDoLugar}</p>
            <p>Horário Disponível: {horarioDisponivel}</p>
            <button>Acesse aqui</button>
        </div>
    );
}

export default CardVaga;
