import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, verifyTokenRequest } from "../src/api/auth";

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
    const [loading,setLoading] = useState();

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log("res", res);
            console.log("res.data", res.data);
            //Guarda el token en localStorage
            localStorage.setItem("access_token", res.data.access_token);

            setUser(res.data);
            setIsAutenticated(true);
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
                console.log(res);
                if (!res.data){
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
            loading,
            user,
            isAutenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}