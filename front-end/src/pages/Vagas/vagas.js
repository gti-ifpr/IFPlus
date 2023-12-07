// Login.js
import React from "react";
import Menu from '../../components/Global/menu/menu.js'
import CardVaga from '../../components/Vagas/cardVagas/cardVagas.js'
import './vagas.css'

const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Perfil', link: '/perfil' },
    { text: 'Meus contratos', link: '/contratos'}
];

const vagaInfo = [
    { titulo: "Estágio em Desenvolvimento Web", nomeDoLugar: "Empresa XYZ", horarioDisponivel: "13:00 às 19:00" },
    { titulo: "Estágio em Desenvolvimento Web", nomeDoLugar: "Empresa XYZ", horarioDisponivel: "13:00 às 19:00" },
    { titulo: "Estágio em Desenvolvimento Web", nomeDoLugar: "Empresa XYZ", horarioDisponivel: "13:00 às 19:00" }
];

function Login() {
    return (
        <>
            <Menu items={menuItems} />
            <div className="card-line">
                <CardVaga {...vagaInfo[0]} />
                <CardVaga {...vagaInfo[1]} />
                <CardVaga {...vagaInfo[2]} />
            </div>
        </>
    )
}

export default Login;
