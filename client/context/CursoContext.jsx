import { createContext, useContext, useEffect, useState } from "react";

// crud 

export const CursoContext = createContext();

export const useCursos = () => {
    const context = useContext(CursoContext);
    if (!context) {
        throw new Error("useCursos debe estar dentro de CursoProvider");
    }
    return context;
}

export function CursoProvider({ children }) {

    return (
        <CursoContext.Provider
            value={{

            }}>
        </CursoContext.Provider>
    );
}