import axios from 'axios';

const baseurl = 'http://127.0.0.1:8000/api';

const instance = axios.create({
    baseURL: baseurl,
    withCredentials: true
});

export default instance;