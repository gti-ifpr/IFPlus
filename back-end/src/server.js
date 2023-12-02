import http, { request } from 'node:http';
import UserAluno from '../models/userAluno.js';
import UserServidor from '../models/userServidor.js';
import Contrato from '../models/contratos.js'

//criar rotas para listar usuários e contratos, criar rotas para editar todas as tabelas e também de excluir

const server = http.createServer(async (request, response) => {
    
    const { method, url } = request;

    //rota para criação de usuários do tipo aluno
    if (method === 'POST' && url === '/addUserAluno'){
        
        let data = '';

        //espera por todas as partes dos dados recebidos e acumula-os na variavel data
        request.on('data', chunk => {
            data += chunk;
        });

        request.on('end', async () => {

            //formata os dados recebidos para JSON
            const userAlunoData = JSON.parse(data);
    
            try {
                // tenta criar de nova instância do modelo User no banco de dados
                const newUserAluno = await UserAluno.create(userAlunoData);
    
                // Retorna uma resposta indicando que a inserção foi bem-sucedida
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(newUserAluno));
            } catch (error) {
                console.error('Erro ao inserir usuário no banco de dados:', error);
    
                // Retorna uma resposta indicando que houve um erro na inserção
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ error: 'Erro interno do servidor' }));
                response.end('erro ao adicionar o usuário')   
            }
        });
    }
    
    if (method === 'GET' && url === '/listUserAlunos'){
        try {
            const allUsersAlunos = await UserAluno.findAll();
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(allUsersAlunos));
        } catch (error) {
            console.error('Erro ao obter usuários do banco de dados:', error);
            response.writeHead(500, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Erro interno do servidor' }));
        } finally {
            return; // Adiciona o return dentro do bloco finally para garantir que a função seja encerrada
        }
    };

    //rota para criação de usuários do tipo servidor
    if (method === 'POST' && url === '/addUserServidor'){
        
        let data = '';

        //espera por todas as partes dos dados recebidos e acumula-os na variavel data
        request.on('data', chunk => {
            data += chunk;
        });

        request.on('end', async () => {

            //formata os dados recebidos para JSON
            const userServidorData = JSON.parse(data);
    
            try {
                // tenta criar de nova instância do modelo User no banco de dados
                const newUserServidor = await UserServidor.create(userServidorData);
    
                // Retorna uma resposta indicando que a inserção foi bem-sucedida
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(newUserServidor));
            } catch (error) {
                console.error('Erro ao inserir usuário no banco de dados:', error);
    
                // Retorna uma resposta indicando que houve um erro na inserção
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ error: 'Erro interno do servidor' }));
            }
        });
    }

    if (method === 'POST' && url === '/addContrato'){
        let data = '';

        request.on('data', chunk => {
            data += chunk;
        });

        request.on('end', async () => {
            const contratosData = JSON.parse(data);

            try {
                const newContrato = await Contrato.create(contratosData)
                // response.end(JSON.stringify(newContrato));
            } catch (error) {
                console.error('Erro ao inserir usuário no banco de dados', error);
                response.writeHead(500, {'Content-Type': 'application/json'});
                response.end(JSON.stringify({error: 'Erro interno do servidor'}));
            }
        });
    }

    if (method === 'GET' && url === '/listContratos'){
        try {
            const allContratos = await Contrato.findAll();
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(allContratos));
        } catch (error) {
            console.error('Erro ao obter usuários do banco de dados:', error);
            response.writeHead(500, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Erro interno do servidor' }));
        } finally {
            return;
        }
    };

    return response.end('Executing server - back-end with method: ' + method + ' on url ' + url)
})

server.listen(3333);