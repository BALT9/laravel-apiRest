import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import log from './Styles/login.module.css';

function Login() {

    const { register, handleSubmit } = useForm();

    const { signin, isAutenticated } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAutenticated) navigate("/profile");
    }, [isAutenticated])

    const onSubmit = handleSubmit((data) => {
        console.log("react hok form: ", data);
        signin(data);
    });

    return (
        <>
            <div className={log.container}>
                <div className={log.container_content}>
                    <h2>Logotipo</h2>
                    <h3>Bienvenido de Vuelta!</h3>
                    <h1>Login</h1>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="">Correo</label>
                        <div className={log.input_row}>
                            <input type="email" placeholder="Escribe tu correo electronico" {...register("correo", { required: true })} />
                        </div>
                        <label htmlFor="">Contraseña</label>
                        <div className={log.input_row}>
                            <input type="password" {...register("contrasena", { required: true })} />
                        </div>

                        <button type="submit" className={log.btn} >Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;