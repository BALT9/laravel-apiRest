import { createContext, useContext, useState } from "react";

// crud 
import { getCursosRequest, getCursosRequestPublic, CreateCursosRequest } from "../src/api/cursos";

export const CursoContext = createContext();

export const useCursos = () => {
    const context = useContext(CursoContext);
    if (!context) {
        throw new Error("useCursos debe estar dentro de CursoProvider");
    }
    return context;
}

export function CursoProvider({ children }) {

    const [curso, setCurso] = useState([]);

    // obtener los cursos protegidos (requiere autenticación y admin)
    const getCursos = async () => {
        try {
            const res = await getCursosRequest();
            setCurso(res.data);
            console.log("Cursos protegidos: ", res.data);
        } catch (error) {
            console.log(error);
        }
    }


    // obtener los cursos públicos (sin autenticación)
    const getCursosPublic = async () => {
        try {
            const res = await getCursosRequestPublic();
            setCurso(res.data);
            console.log("Cursos públicos: ", res.data);
        } catch (error) {
            console.log(error);
        }
    }

    // crear cursos 

    const createCursos = async(curso) => {
        const res = await CreateCursosRequest(curso);
        console.log(res);
    }

    return (
        <CursoContext.Provider
            value={{
                getCursos,
                getCursosPublic,
                createCursos,
                curso
            }}
        >
            {children}
        </CursoContext.Provider>
    );
}
