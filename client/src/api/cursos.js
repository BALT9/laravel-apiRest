import axios from './axios';  // tu instancia configurada

export const getCursosRequest = () => {
    const token = localStorage.getItem('access_token');
    return axios.get('/auth/cursos', {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    });
}

export const CreateCursosRequest = (cursos) => {
    const token = localStorage.getItem('access_token');
    return axios.post('/auth/cursos', cursos, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    });
};

export const updateCursoRequest = (id, data) => {
    const token = localStorage.getItem('access_token');
    return axios.put(`/auth/cursos/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    });
};


export const deleteCursoRequest = (id) => {
    const token = localStorage.getItem('access_token');
    return axios.delete(`/auth/cursos/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    });
};



export const getCursosRequestPublic = () => axios.get('/auth/cursospublicos');