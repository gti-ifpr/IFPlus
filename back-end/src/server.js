import http, { request } from 'node:http';

const server = http.createServer((request, response) => {
    
    const { method, url } = request;

    if (method === 'POST' && url === '/users'){
        return response.end('funcionou a rota')   
    }
      
    return response.end('Executing server - back-end with method: ' + method + ' on url ' + url)
})

server.listen(3333);