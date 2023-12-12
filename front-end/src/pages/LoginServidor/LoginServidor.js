import React from "react";
import Menu from "../../components/Global/menu/menu.js";
import LoginFormServidor from '../../components/Login/formAuthServidor/formAuthServidor.js'


const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Cadastrar como Aluno', link: '/cadastroAluno' },
    { text: 'Cadastro como Servidor', link: '/cadastroServidor'}
  ];

function LoginServidor (){
    return(
        <>
                <Menu items={menuItems}/>,
                <LoginFormServidor/>
        </>
    )
}

export default LoginServidor;