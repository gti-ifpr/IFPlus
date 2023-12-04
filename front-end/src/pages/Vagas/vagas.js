import React from "react";
import Menu from '../../components/Global/menu/menu.js'

const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Perfil', link: '/perfil' },
    { text: 'Meus contrato', link: '/contratos'}
  ];

function Login (){
    return(
        <>
            <Menu items={menuItems}/>,
        </>
    )
}

export default Login;