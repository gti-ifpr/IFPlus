import React from "react";
import Menu from "../../components/global/menu/Menu";
import CadastroServidorForm from "../../components/Cadastro/cadastroServidor.js"

const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Login', link: '/login' },
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