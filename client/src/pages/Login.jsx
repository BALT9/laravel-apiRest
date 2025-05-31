import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import log from './Styles/login.module.css';

function Login() {

    const { register, handleSubmit } = useForm();

    const { signin, isAutenticated } = useAuth();

    const [errorLogin, setErrorLogin] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (isAutenticated) navigate("/dashboard");
    }, [isAutenticated])

    const onSubmit = handleSubmit(async (data) => {
        const error = await signin(data);
        if (error) {
            setErrorLogin(error);

            // Ocultar el error después de 3 segundos
            setTimeout(() => {
                setErrorLogin("");
            }, 2000);
        }
    });


    return (
        <>
            <div className={log.container}>
                <div className={log.container_content}>
                    <h2>Logotipo</h2>
                    <h3>Bienvenido de Vuelta!</h3>
                    <h1>Login</h1>
                    <form onSubmit={onSubmit}>
                        {errorLogin && (
                            <div className={log.error}>
                                {errorLogin}
                            </div>
                        )}
                        <label htmlFor="">Correo</label>
                        <div className={log.input_row}>
                            <input type="email" placeholder="Escribe tu correo electronico" {...register("correo", { required: true })} />
                        </div>
                        <label htmlFor="">Contraseña</label>
                        <div className={log.input_row}>
                            <input type="password" placeholder="Escribe tu contraseña" {...register("contrasena", { required: true })} />
                        </div>

                        <button type="submit" className={log.btn} >Login</button>
                    </form>
                    <h6>or continue with</h6>
                    <div className={log.logins}>
                        <i className='bx bxl-google'></i>
                        <i className='bx bxl-google'></i>
                        <i className='bx bxl-google'></i>
                    </div>
                    <p>No tienes una cuenta? <Link to={'/register'}>Registrarse</Link></p>
                </div>
                <div className={log.container_image}>
                    <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-programming-clipart-professional-software-developer-cartoon-vector-png-image_11064085.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Login;