import {useForm} from "react-hook-form"
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const {register, handleSubmit} = useForm();

    const {signin,isAutenticated} = useAuth();

    const navigate = useNavigate();

    useEffect(()=>{
        if(isAutenticated) navigate("/profile");
    },[isAutenticated])

    const onSubmit = handleSubmit((data) => {
        console.log("react hok form: ",data);
        signin(data);
    });

    return(
        <>
            <h1>soy login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Correo</label>
                <input type="text" {...register("correo", {required: true})} />
                <label htmlFor="">Contraseña</label>
                <input type="text" {...register("contrasena", {required: true})} />

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;