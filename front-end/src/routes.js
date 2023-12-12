import React from "react";
import {Route, Routes} from 'react-router-dom';

import Inicio from './pages/Inicio/Inicio.js'
import LoginAluno from './pages/LoginAluno/Login.js'
import LoginServidor from './pages/LoginServidor/LoginServidor.js'
import CadastroAluno from './pages/CadastroAluno/cadastroAlunoPage.js'
import CadastroServidor from './pages/CadastroServidor/cadastroServidor.js'
import Contratos from './pages/Contratos/contratos.js'
import Perfil from './pages/Perfil/perfil.js'
import Vagas from './pages/Vagas/vagas.js'


const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Inicio />} exact />
            <Route path="/loginAluno" element={<LoginAluno />} exact />
            <Route path="/loginServidor" element={<LoginServidor />} exact />
            <Route path="/cadastroAluno" element={<CadastroAluno/>} exact />
            <Route path="/cadastroServidor" element={<CadastroServidor/>} exact />
            <Route path="/contratos" element={<Contratos/>} exact />
            <Route path="/perfil/:cpf" element={<Perfil />} />
            <Route path="/Vagas" element={<Vagas/>} />
        </Routes>
    )
}

export default MyRoutes;