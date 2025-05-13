import axios from "./axios.js";

// export const requisterRegister = (user) => axios.post(`/register`,user);

// export const loginRequest = (user) => axios.post(`/login`,user);

export const perfil = () => axios.get(`/auth/perfil`);
