import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.10.76:8000'
});

export default instance;