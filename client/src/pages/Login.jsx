import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import log from './Styles/login.module.css';

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { signin, isAutenticated } = useAuth();
    const [errorLogin, setErrorLogin] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (isAutenticated) navigate("/dashboard");
    }, [isAutenticated]);

    const onSubmit = handleSubmit(async (data) => {
        const error = await signin(data);
        if (error) {
            setErrorLogin(error);
            setTimeout(() => setErrorLogin(""), 2000);
        }
    });

    return (
        <div className={log.container}>
            <div className={log.container_content}>
                <h2>Logotipo</h2>
                <h3>¡Bienvenido de vuelta!</h3>
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    {errorLogin && (
                        <div className={log.error}>
                            {errorLogin}
                        </div>
                    )}

                    <label>Correo</label>
                    <div className={log.input_row}>
                        <input
                            type="email"
                            placeholder="Escribe tu correo electrónico"
                            {...register("correo", {
                                required: "El correo es obligatorio",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Correo no válido"
                                }
                            })}
                        />
                    </div>
                    {errors.correo && (
                        <p className={log.errorValidacion}>{errors.correo.message}</p>
                    )}

                    <label>Contraseña</label>
                    <div className={log.input_row}>
                        <input
                            type="password"
                            placeholder="Escribe tu contraseña"
                            {...register("contrasena", {
                                required: "La contraseña es obligatoria",
                                minLength: {
                                    value: 6,
                                    message: "La contraseña debe tener al menos 6 caracteres"
                                }
                            })}
                        />
                    </div>
                    {errors.contrasena && (
                        <p className={log.errorValidacion}>{errors.contrasena.message}</p>
                    )}

                    <button type="submit" className={log.btn}>Login</button>
                </form>

                <h6>o continuar con</h6>
                <div className={log.logins}>
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-twitter'></i>
                </div>

                <p>¿No tienes una cuenta? <Link to="/register">Registrarse</Link></p>
            </div>

            <div className={log.container_image}>
                <img
                    src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-programming-clipart-professional-software-developer-cartoon-vector-png-image_11064085.png"
                    alt="login ilustración"
                />
            </div>
        </div>
    );
}

export default Login;
