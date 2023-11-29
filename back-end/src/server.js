import http, { request } from 'node:http';
import User from '/var/www/newIfplus/back-end/models/user.js'
import UserAluno from '../models/userAluno.js';
import UserServidor from '../models/userServidor.js';

//criar rotas para listar usuários e contratos, criar rotas para editar todas as tabelas e também de excluir

const server = http.createServer((request, response) => {
    
    const { method, url } = request;

    //rota teste da model pai User
    if (method === 'POST' && url === '/addUsers'){

        let data = '';

        //espera por todas as partes dos dados recebidos e acumula-os na variavel data
        request.on('data', chunk => {
            data += chunk;
        });

        request.on('end', async () => {

            //formata os dados recebidos para JSON
            const userData = JSON.parse(data);
    
            try {
                // tenta criar de nova instância do modelo User no banco de dados
                const newUser = await User.create(userData);
    
                // Retorna uma resposta indicando que a inserção foi bem-sucedida
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(newUser));
                response.end('adicionado com sucesso')   
            } catch (error) {
                console.error('Erro ao inserir usuário no banco de dados:', error);
    
                // Retorna uma resposta indicando que houve um erro na inserção
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ error: 'Erro interno do servidor' }));
                response.end('erro ao adicionar o usuário')   
            }
        });
    }
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

    return response.end('Executing server - back-end with method: ' + method + ' on url ' + url)
})

server.listen(3333);