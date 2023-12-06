import React from "react";
import Menu from "../../components/Global/menu/menu.js";
import LoginForm from '../../components/Login/formAuth/formAuth.js'
import { UserProvider } from './../../context/UserContext.js';


const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Cadastrar como Aluno', link: '/cadastroAluno' },
    { text: 'Cadastro como Servidor', link: '/cadastroServidor'}
  ];

function Login (){
    return(
        <>
            <Menu items={menuItems}/>,
            <UserProvider>
                <LoginForm/>
            </UserProvider>
        </>
    )
}

export default Login;