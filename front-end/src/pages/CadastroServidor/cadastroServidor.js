import React from "react";
import Menu from "../../components/Global/menu/menu.js";
import CadastroServidorForm from "../../components/Cadastro/cadastroServidor.js"

const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Login', link: '/loginServidor' },
    { text: 'Cadastrar como Aluno', link: '/cadastroAluno' },
  ];

function cadastroServidor () {
    return (
        <>
            <Menu items={menuItems} />,
            <CadastroServidorForm />
        </>
    )
}

export default cadastroServidor;