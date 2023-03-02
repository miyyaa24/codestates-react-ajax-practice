import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
    baseURL: config.API_URL,
    timeout: 3_000,
});

apiClient.interceptors.request.use((res) => {
    return res;
});


export default apiClient;