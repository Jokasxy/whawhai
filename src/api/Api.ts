import axios from 'axios';

export const api = axios.create
({
    baseURL: 'https://recruitment-test.ants.house/jsonrpc2/whawhai/v1'
});

api.interceptors.request.use
(
    async config => 
    {
        config.headers['Content-Type'] = 'application/json';
		config.headers['Accept'] = 'application/json';
		return config;
	},
    error => 
    {
		Promise.reject(error)
	}
);

api.interceptors.response.use
(
    response => 
    {
        return response;
    }, 
    error => 
    {        
        Promise.reject(error);
    }
);