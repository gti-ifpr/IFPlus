import React, { useState } from "react";
import Menu from '../../components/Global/menu/menu.js';
import Botoes from '../../components/Global/botoes/botoes.js';

import CadastrarContrato from "../../components/contratos/cadastrarContrato/cadastrarContrato";
import ListarContratos from "../../components/contratos/listarContratos/listarContratos";

const menuItems = [
    { text: 'Login', link: '/login' }
];

const botoes = [
    { text: 'Cadastrar novo Contrato' },
    { text: 'Listar todos os contratos' }
]

function Contratos() {
    const [botaoClicado, setBotaoClicado] = useState(null);

    return (
        <>
            <Menu items={menuItems} />
            <Botoes bottons={botoes} setBotaoClicado={setBotaoClicado} />
            
            {botaoClicado === 'Cadastrar novo Contrato' && <CadastrarContrato />}
            {botaoClicado === 'Listar todos os contratos' && <ListarContratos />}
        </>
    )
}

export default Contratos;