import React from "react";
import Menu from '../../components/Global/menu/menu.js'
import Welcome from './../../components/Inicio/Welcome/welcome.js'
import Apresentacao from './../../components/Inicio/Apresentacao/apresentacao.js'

const menuItems = [
    { text: 'Login', link: '/login' }
];

function Inicio () {
    return(
        <>
            <Menu items={menuItems} />

            <Welcome/>

            <Apresentacao/>
        </>
    )
}

export default Inicio;