import React from "react";
import Menu from "../../components/Global/menu/menu.js";
import LoginForm from '../../components/Login/formAuth/formAuth.js'


const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Cadastrar como Aluno', link: '/cadastroAluno' },
    { text: 'Cadastro como Servidor', link: '/cadastroServidor'}
  ];

function Login (){
    return(
        <>
                <Menu items={menuItems}/>,
                <LoginForm/>
        </>
    )
}

export default Login;