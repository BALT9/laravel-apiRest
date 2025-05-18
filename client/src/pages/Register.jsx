import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Home/Nav";

import reg from './Styles/register.module.css';


function Register() {

    const { register, handleSubmit } = useForm();

    const { singup, isAutenticated } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAutenticated) navigate("/profile");
    }, [isAutenticated])

    const onSubmit = handleSubmit((data) => {
        console.log("react hok form: ", data);
        singup(data);
    });

    return (
        <>
            <div className={reg.container}>
                <Nav />
                <h1>soy Register</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Nombre</label>
                    <input type="text" {...register("nombre", { required: true })} />
                    <label htmlFor="">Correo</label>
                    <input type="email" {...register("correo", { required: true })} />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" {...register("contrasena", { required: true })} />
                    <label htmlFor="">Confirmar Contraseña</label>
                    <input type="password" {...register("cpassword", { required: true })} />
                    <label htmlFor="">pais</label>
                    <input type="text" {...register("pais", { required: true })} />
                    <label htmlFor="">Numero</label>
                    <input type="number" {...register("numero", { required: true })} />
                    <label htmlFor="">Rol</label>
                    <input type="text" {...register("rol", { required: true })} />

                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}

export default Register;