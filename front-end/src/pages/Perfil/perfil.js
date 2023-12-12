import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Menu from './../../components/Global/menu/menu';
import "./perfil.css";
import ProfilePic from './../../img/profilePic.png'

const menuItems = [
  { text: 'Início', link: '/' },
  { text: 'Vagas', link: '/vagas' },
];

function Perfil() {
  const { cpf } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`http://localhost:3333/findAluno?cpf=${cpf}`).then(response => {
      setUsuario(response.data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error(error);
      setIsLoading(false);
    });
  }, [cpf]);

  return (
    <div>
      <Menu items={menuItems} />
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        usuario ? (
          <div className="perfil-container">
            <h2>Perfil do Usuário</h2>

            <div className="basic-container">
              <div className="basic-pic">
                <img src={ProfilePic} alt="Imagem de perfil generica" />
              </div>

              <div className="basic-information">
                <h3>Nome</h3>
                <p>{usuario.userAluno_nome}</p>
                <br></br>

                <h3>CPF</h3>
                <p>{usuario.userAluno_cpf}</p>
                <br></br>
              </div>

            </div>

            <div className="other-container">
              <div className="other-information">

                <div className="other-rigth-colunm">

                  <h3>E-mail</h3>
                  <p>{usuario.userAluno_email}</p>
                  <br></br>

                  <h3>Telefone</h3>
                  <p>{usuario.userAluno_telefone}</p>
                  <br></br>

                  <h3>RG</h3>
                  <p>{usuario.userAluno_rg}</p>
                  <br></br>

                  <h3>Matrícula</h3>
                  <p>{usuario.userAluno_Matricula}</p>
                  <br></br>
                </div>
                
                <div className="other-left-colunm">
                  <h3>Data de Nascimento</h3>
                  <p>{usuario.userAluno_Nascimento}</p>
                  <br></br>

                  <h3>Curso</h3>
                  <p>{usuario.userAluno_Curso}</p>
                  <br></br>

                  <h3>Período</h3>
                  <p>{usuario.userAluno_Periodo}</p>
                  <br></br>

                  <h3>Disponibilidade</h3>
                  <p>{usuario.userAluno_Disponibilidade}</p>
                  <br></br>
                </div>
              </div>
            </div>

          </div>

        ) : (
          <p>Usuário não encontrado</p>
        )
      )}
    </div>
  );
}

export default Perfil;
