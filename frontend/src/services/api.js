import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers : []    
});


export default api;