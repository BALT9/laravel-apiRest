import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import reg from './Styles/register.module.css';


function Register() {

    const { register, handleSubmit } = useForm();

    const { singup, isAutenticated } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAutenticated) navigate("/dashboard");
    }, [isAutenticated])

    const onSubmit = handleSubmit((data) => {
        console.log("react hok form: ", data);
        singup(data);
    });

    return (
        <>
            <div className={reg.container}>

                <div className={reg.container_content}>
                    <h2>Logotipo</h2>
                    <h1>Registro</h1>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="">Nombre</label>
                        <div className={reg.input_row}>
                            <input type="text" placeholder="Escribe tu nombre" {...register("nombre", { required: true })} />
                        </div>
                        <label htmlFor="">Correo</label>
                        <div className={reg.input_row}>
                            <input type="email" placeholder="Escribe tu correo" {...register("correo", { required: true })} />
                        </div>
                        <label htmlFor="">Contraseña</label>
                        <div className={reg.input_row}>
                            <input type="password" placeholder="Escribe tu contraseña" {...register("contrasena", { required: true })} />
                        </div>
                        <label htmlFor="">Confirmar Contraseña</label>
                        <div className={reg.input_row}>
                            <input type="password" placeholder="Confirma tu contraseña" {...register("cpassword", { required: true })} />
                        </div>
                        <label htmlFor="">Pais</label>
                        <div className={reg.input_row}>
                            <input type="text" placeholder="Escribe tu pais" {...register("pais", { required: true })} />
                        </div>
                        <label htmlFor="">Numero</label>
                        <div className={reg.input_row}>
                            <input type="number" placeholder="Escribe tu numero" {...register("numero", { required: true })} />
                        </div>
                        <label htmlFor="">Rol</label>
                        <div className={reg.input_row}>
                            <input type="text" placeholder="Tu rol" {...register("rol", { required: true })} />
                        </div>
                        

                        <button type="submit" className={reg.btn} >Register</button>
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
        </>
    )
}

export default Register;