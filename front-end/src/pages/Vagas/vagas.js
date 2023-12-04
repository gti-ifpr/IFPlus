import React from "react";
import Menu from '../../components/Global/menu/menu.js'

const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Perfil', link: '/perfil' },
    { text: 'Meus contratos', link: '/contratos'}
  ];

function Login (){
    return(
        <>
            <Menu items={menuItems}/>

            <h1>teste paǵina de vagas</h1>
        </>
    )
}

export default Login;