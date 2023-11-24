import http, { request } from 'node:http';
import User from '../models/user'

const server = http.createServer((request, response) => {
    
    const { method, url } = request;

    if (method === 'POST' && url === '/addUsers'){
        response.end('funcionou a rota')   

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