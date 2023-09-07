import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_BASE_URL;



export const api = axios.create({
    baseURL: apiUrl
})


api.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken')
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});




export const useApi = () => ({
    validateToken: async () => {

        try {
            const token = localStorage.getItem('authToken')


            const response = await api.post('/auth/validate', { token }, { headers: { Authorization: `Bearer ${token}` } })
            return response
        } catch (error) {
            console.log('Token validation failed:', error)
            return null
        }

    },
    signin: async (email: string, password: string) => {

        try {

            const response = await api.post('/auth/login', { email, password })

            return response.data

        } catch (error: any) {
            if (error.response) {
                return {
                    message: error.response.data.error,
                    code: error.response.status,
                    status: false
                }
            } else {
                console.error('Error without response', error);
                return {
                    message: error.message,
                    code: 0,
                    status: false
                }
            }
        }

    },

     logout: async () => {
        try {
            const token = localStorage.getItem('authToken');
    
            if (!token) {
                console.log('Token de autenticação não encontrado no armazenamento local.');
                return;
            }
    
            const headers = {
                Authorization: `Bearer ${token}`
            };
    
            const requestData = {
                token
            };
    
            const response = await api.post('/auth/logout', requestData, { headers });
    
            if (response.status === 200) {
                localStorage.removeItem('authToken');
                console.log('Você foi desconectado com sucesso.');
            } else {
                console.log('Erro ao fazer logout. Resposta do servidor:', response);
            }
        } catch (error) {
            console.error('Erro na função de logout: ', error);
        }
    }
    
})

