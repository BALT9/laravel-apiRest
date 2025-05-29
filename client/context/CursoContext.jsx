import { createContext, useContext, useState } from "react";

// crud 
import { getCursosRequest, getCursosRequestPublic, CreateCursosRequest, updateCursoRequest, deleteCursoRequest, getInscripcionesRequest, inscribirseRequest } from "../src/api/cursos";

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

    const [misCursos,setMisCursos] = useState([]);

    // obtener los cursos protegidos (requiere autenticación y admin)
    const getCursos = async () => {
        try {
            const res = await getCursosRequest();
            setCurso(res.data);
            console.log("Cursos protegidos: ", res.data);
        } catch (error) {
            console.error("Error al obtener cursos protegidos:", error);
        }
    }

    // obtener los cursos públicos (sin autenticación)
    const getCursosPublic = async () => {
        try {
            const res = await getCursosRequestPublic();
            setCurso(res.data);
            console.log("Cursos públicos: ", res.data);
        } catch (error) {
            console.error("Error al obtener cursos públicos:", error);
        }
    }

    // crear curso
    const createCursos = async (cursoData) => {
        try {
            const res = await CreateCursosRequest(cursoData);
            console.log("Curso creado:", res.data);
            // Opcional: actualizar lista después de crear
            await getCursos();
        } catch (error) {
            console.error("Error al crear curso:", error);
        }
    }

    // eliminar curso
    const deleteCurso = async (id) => {
        try {
            const res = await deleteCursoRequest(id);
            console.log(res.data);
            // Si el backend responde con status 200 y mensaje de éxito
            if (res.status === 200 && res.data.message === "Curso eliminado correctamente") {
                setCurso(prev => ({
                    ...prev,
                    data: prev.data.filter(c => c.id !== id)
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateCurso = async (id, data) => {
        try {
            const res = await updateCursoRequest(id, data);
            console.log("Curso actualizado:", res.data);

            // Actualizar lista localmente (opcional si no quieres llamar getCursos)
            setCurso(prev => ({
                ...prev,
                data: prev.data.map(c => (c.id === id ? res.data : c))
            }));

            // O simplemente volver a cargar todos los cursos:
            // await getCursos();

        } catch (error) {
            console.error("Error al actualizar curso:", error);
        }
    };

    // inscripciones  

    const handleInscribirse = async (curso) => {
        try {
            await inscribirseRequest(curso.id);
            alert(`Inscrito en: ${curso.nombre}`);
        } catch (err) {
            console.error(err);
            alert('No se pudo inscribir. Ya estas inscrito');
        }
    };

    const getMisCursos = async () => {
        try {
            const res = await getInscripcionesRequest();
            setMisCursos(res.data.cursos); // define `misCursos` en tu contexto si lo necesitas
            console.log("Cursos inscritos del usuario:", res.data);
        } catch (error) {
            console.error("Error al obtener cursos inscritos:", error);
        }
    };

    return (
        <CursoContext.Provider
            value={{
                getCursos,
                getCursosPublic,
                createCursos,
                updateCurso,
                deleteCurso,
                handleInscribirse,
                getMisCursos,
                misCursos,
                curso
            }}
        >
            {children}
        </CursoContext.Provider>
    );
}
