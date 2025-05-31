import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import reg from './Styles/register.module.css';

function Register() {
    const { register, handleSubmit } = useForm();
    const { singup, isAutenticated } = useAuth();
    const navigate = useNavigate();

    // Estado para manejar mensaje de error
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (isAutenticated) navigate("/dashboard");
    }, [isAutenticated]);

    const onSubmit = handleSubmit(async (data) => {
        const error = await singup(data);
        if (error) {
            setErrorMsg(error);
            setTimeout(() => setErrorMsg(""), 3000);
        }
    });

    return (
        <div className={reg.container}>
            <div className={reg.container_content}>
                <h2>Logotipo</h2>
                <h1>Registro</h1>

                {/* Mostrar mensaje de error si existe */}
                {errorMsg && (
                    <div className={reg.error}>
                        {errorMsg}
                    </div>
                )}


                <form onSubmit={onSubmit}>
                    <label>Nombre</label>
                    <div className={reg.input_row}>
                        <input type="text" placeholder="Escribe tu nombre" {...register("nombre", { required: true })} />
                    </div>

                    <label>Correo</label>
                    <div className={reg.input_row}>
                        <input type="email" placeholder="Escribe tu correo" {...register("correo", { required: true })} />
                    </div>

                    <label>Contraseña</label>
                    <div className={reg.input_row}>
                        <input type="password" placeholder="Escribe tu contraseña" {...register("contrasena", { required: true })} />
                    </div>

                    <label>Confirmar Contraseña</label>
                    <div className={reg.input_row}>
                        <input type="password" placeholder="Confirma tu contraseña" {...register("cpassword", { required: true })} />
                    </div>

                    <label>Pais</label>
                    <div className={reg.input_row}>
                        <input type="text" placeholder="Escribe tu pais" {...register("pais", { required: true })} />
                    </div>

                    <label>Numero</label>
                    <div className={reg.input_row}>
                        <input type="number" placeholder="Escribe tu numero" {...register("numero", { required: true })} />
                    </div>

                    <label>Rol</label>
                    <div className={reg.input_row}>
                        <input type="text" placeholder="Tu rol" {...register("rol", { required: true })} />
                    </div>

                    <button type="submit" className={reg.btn}>Register</button>
                </form>

                <h6>or continue with</h6>
                <div className={reg.logins}>
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-google'></i>
                </div>
                <p>Ya tienes una cuenta? <Link to={'/Login'}>Login</Link></p>
            </div>

            <div className={reg.container_image}>
                <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-programming-clipart-professional-software-developer-cartoon-vector-png-image_11064085.png" alt="" />
            </div>
        </div>
    );
}

export default Register;
