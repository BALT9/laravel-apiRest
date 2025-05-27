import axios from "axios";

export const getCursos = () => axios.get('/auth/cursos');