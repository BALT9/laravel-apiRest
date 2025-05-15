import { createContext, useContext, useState } from "react";
import { loginRequest } from "../src/api/auth";



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
    const [isAutenticated,SetIsAutenticated] = useState(false);

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log("res", res);
            console.log("res.data", res.data);
            setUser(res.data);
            SetIsAutenticated(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{
            signin,
            user,
            isAutenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}