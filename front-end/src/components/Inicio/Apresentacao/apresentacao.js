import React from 'react';
import './apresentacao.css'

function apresentacao (){
    return(
        <>
        <div className="container">

            <div className='component'>
                <h1>Aos estudantes</h1>
                <p>
                    Com o IFPlus, os estudantes do campus IFPR-Pinhais terão acesso
                    simplificado aos seus contratos de estágio facilitando o gerenciamento
                    das suas próprias informações
                </p>
            </div>

            <div className='component'>
                <h1>Aos servidores</h1>
                <p>
                    O IFPlus simplifica o gerenciamento de contratos de estágio e
                    informações dos estudantes para os servidores, reduzindo tarefas
                    manuais e fornecendo dados para decisões mais informadas.
                </p>
            </div>

            <div className='component'>
                <h1>Ao campus</h1>
                <p>
                    O IFPlus aprimora a gestão de estágios no campus, simplificando
                    processos e fornecendo informações estratégicas para uma administração
                    mais eficaz e organizada.
                </p>
            </div>
        </div>
        </>
    )
}

export default apresentacao