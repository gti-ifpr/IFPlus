import React from "react";
import Menu from '../../components/Global/menu/menu.js'
import Welcome from './../../components/Inicio/Welcome/welcome.js'
import Apresentacao from './../../components/Inicio/Apresentacao/apresentacao.js'
import './Inicio.css'
import visaoProduto from './../../img/visaoProduto.png'
import mataEmpatia from './../../img/mataEmpatia.png'
import storyBoard from './../../img/storyBoard.png'

const menuItems = [
    { text: 'Login de Aluno', link: '/loginAluno' },
    { text: 'Login de Servidor', link: '/loginServidor' }
];

function Inicio () {
    return(
        <>
            <Menu items={menuItems} />

            <Welcome/>

            <Apresentacao/>

            <div className="container-content">
                <h1>Visão de produto</h1>
                <img src={visaoProduto} alt="Quadro da visão de produto"></img>
            </div>

            <div className="container-content-empatia">
                <h1>Mapa da empatia</h1>
                <img src={mataEmpatia} alt="Mata de empatia"></img>
            </div>

            <div className="container-content-empatia">
                <h1>Story Board</h1>
                <img src={storyBoard} alt="Story Board"></img>
            </div>
        </>
    )
}

export default Inicio;