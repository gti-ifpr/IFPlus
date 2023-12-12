import http from 'node:http';
import cors from 'cors';
import UserAluno from '../models/userAluno.js';
import UserServidor from '../models/userServidor.js';
import Contrato from '../models/contratos.js'
import jwt from 'jsonwebtoken';

//criar rotas para listar usuários e contratos, criar rotas para editar todas as tabelas e também de excluir

const server = http.createServer(async (request, response) => {
    
    // Configurar o middleware CORS
    const corsOptions = {
        origin: 'http://localhost:3000', // url do front-end
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // Permite o envio de credenciais (por exemplo, cookies)
        optionsSuccessStatus: 204, // Responde com 204 No Content para solicitações OPTIONS
        allowedHeaders: ['Content-Type', 'Authorization']
    };

    // Middleware CORS personalizado
    const handleCors = (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', corsOptions.origin);
        res.setHeader('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(', '));
        res.setHeader('Access-Control-Allow-Methods', corsOptions.methods);  
    };

    // Aplica o middleware CORS a todas as solicitações
    handleCors(request, response);

    cors(corsOptions)(request, response, () => {});

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

    if (method === 'GET' && url.startsWith('/findAluno')) {
        const urlParts = url.split('=');
        const cpfAluno = urlParts[urlParts.length - 1];
    
        console.log(cpfAluno);
    
        try {
            const userAluno = await UserAluno.findOne({ where: { userAluno_cpf: cpfAluno } });
    
          if (userAluno) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(userAluno));
          } else {
            // Usuário não encontrado
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Usuário não encontrado' }));
          }
        } catch (error) {
          console.error('Erro ao obter usuário do banco de dados:', error);
          response.writeHead(500, { 'Content-Type': 'application/json' });
          response.end(JSON.stringify({ error: 'Erro interno do servidor' }));
        } finally {
          return;
        }
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

    if (method === 'GET' && url === '/listarContratos'){
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
  
    if (method === 'POST' && url === '/loginAuthAluno') {
        
        let data = '';

        request.on('data', (chunk) => {
            data += chunk;
        });
    
        request.on('end', async () => {
            const formData = JSON.parse(data);
            const loginCPF = formData.userAluno_cpf;
            const password = formData.userAluno_senha;
    
            try {
                const aluno = await UserAluno.findOne({ where: { userAluno_cpf: loginCPF } });
        
                if (!aluno) {
                    response.writeHead(401, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify({ message: 'CPF do aluno não encontrado' }));
                    return; // Certifique-se de retornar após a resposta ser encerrada
                }
        
                if (aluno.userAluno_senha !== password) {
                    response.writeHead(401, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify({ message: 'CPF ou senha incorreto' }));
                    return; // Certifique-se de retornar após a resposta ser encerrada
                }
        
                const token = jwt.sign({ userId: aluno.alu_id, username: aluno.alu_nome }, 'seuSegredo', {
                    expiresIn: '1h',
                });
        
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ success: true, token }));
            } catch (error) {
                console.error('Erro ao processar a autenticação do aluno:', formData, error);
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ message: 'Erro ao processar a autenticação do aluno' }));
            }
        });
    }

    if (method === 'POST' && url === '/loginAuthServidor') {
        
        let data = '';

        request.on('data', (chunk) => {
            data += chunk;
        });
    
        request.on('end', async () => {
            const formData = JSON.parse(data);
            const loginCPF = formData.userServidor_cpf;
            const password = formData.userServidor_Senha;
    
            try {
                const servidor = await UserServidor.findOne({ where: { userServidor_cpf: loginCPF } });
        
                if (!servidor) {
                    response.writeHead(401, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify({ message: 'CPF do Servidor não encontrado' }));
                    return; // Certifique-se de retornar após a resposta ser encerrada
                }
        
                if (servidor.userServidor_Senha !== password) {
                    response.writeHead(401, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify({ message: 'CPF ou senha incorreto' }));
                    return; // Certifique-se de retornar após a resposta ser encerrada
                }
        
                const token = jwt.sign({ userId: servidor.userServidor_id, username: servidor.userServidor_nome }, 'seuSegredo', {
                    expiresIn: '1h',
                });
        
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ success: true, token }));
            } catch (error) {
                console.error('Erro ao processar a autenticação do Servidor:', formData, error);
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ message: 'Erro ao processar a autenticação do Servidor' }));
            }
        });
    }

    // return response.end('Executing server - back-end with method: ' + method + ' on url ' + url)
})

server.listen(3333);