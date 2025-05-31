import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, logoutRequest } from "../src/api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe estar dentro de provider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAutenticated, setIsAutenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    //register
    const singup = async (user) => {
        try {
            const res = await registerRequest(user);
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data);
            setIsAutenticated(true);
            return null;
        } catch (error) {
            const errores = error.response?.data?.errores;

            if (errores?.correo) return errores.correo[0];
            if (errores?.contrasena) return errores.contrasena[0];
            if (errores?.cpassword) return errores.cpassword[0];

            return error.response?.data?.mensaje || "Error desconocido";
        }
    };



    // login 
    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log("res", res);

            // Guarda el token en localStorage
            localStorage.setItem("access_token", res.data.access_token);

            setUser(res.data);
            setIsAutenticated(true);

            return null; // No hubo error
        } catch (error) {
            console.log(error);

            // Devuelve el mensaje al componente
            return error.response?.data?.mensaje || "Error desconocido";
        }
    };


    // logout
    const logout = async () => {
        try {
            await logoutRequest();
            localStorage.removeItem('access_token');
            setUser(null);
            setIsAutenticated(false);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        async function checkLogin() {
            const token = localStorage.getItem('access_token');
            console.log(token);
            if (!token) {
                setIsAutenticated(false);
                setLoading(false);
                return setUser(null);
            }

            try {
                const res = await verifyTokenRequest(token);
                console.log(res.data.usuario);
                if (!res.data) {
                    setIsAutenticated(false);
                    setLoading(false);
                    return;
                }

                setIsAutenticated(true);
                setUser(res.data);
                setLoading(false);

            } catch (error) {
                console.log(error);
                setIsAutenticated(false);
                setUser(null);
                setLoading(false);
            }
        }
        checkLogin();
    }, [])

    return (
        <AuthContext.Provider value={{
            signin,
            singup,
            logout,
            loading,
            user,
            isAutenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}