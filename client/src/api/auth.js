import axios from "./axios.js";

export const registerRequest = (user) => axios.post(`/auth/register`,user);

export const loginRequest = (user) => axios.post(`/auth/login`,user);



export const verifyTokenRequest = () => {
    const token = localStorage.getItem('access_token');
    return axios.get(`/auth/verifyToken`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    });
};
