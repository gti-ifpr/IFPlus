import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;

// Nesse arquivo, configura-se o axios para que seja possível realizar requisições http para a rota indicada