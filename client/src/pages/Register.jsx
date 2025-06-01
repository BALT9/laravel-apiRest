import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

import reg from './Styles/register.module.css';

function Register() {
    const { register, handleSubmit, control } = useForm();
    const { singup, isAutenticated } = useAuth();
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (isAutenticated) navigate("/dashboard");
    }, [isAutenticated]);

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
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

                {errorMsg && (
                    <div className={reg.error}>{errorMsg}</div>
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

                    <div className={reg.contraseñas}>
                        <div className={reg.contra}>
                            <label>Contraseña</label>
                            <div className={reg.input_row}>
                                <input type="password" placeholder="Escribe tu contraseña" {...register("contrasena", { required: true })} />
                            </div>
                        </div>
                        <div className={reg.contra}>
                            <label>Confirmar Contraseña</label>
                            <div className={reg.input_row}>
                                <input type="password" placeholder="Confirma tu contraseña" {...register("cpassword", { required: true })} />
                            </div>
                        </div>
                    </div>

                    <label>Número telefónico</label>
                    <div>
                        <Controller
                            name="telefono"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <PhoneInput
                                    {...field}
                                    country={'mx'}
                                    placeholder="Selecciona tu país e ingresa el número"
                                    enableSearch
                                    inputClass={reg.phoneInput}
                                    containerClass={reg.phoneContainer}
                                />
                            )}
                        />
                    </div>

                    <label>Rol</label>
                    <div className={reg.input_row}>
                        <input type="text" placeholder="Tu rol" {...register("rol", { required: true })} />
                    </div>

                    <button type="submit" className={reg.btn}>Register</button>
                </form>

                <h6>o continuar con</h6>
                <div className={reg.logins}>
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-google'></i>
                </div>
                <p>¿Ya tienes una cuenta? <Link to={'/Login'}>Login</Link></p>
            </div>

            <div className={reg.container_image}>
                <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-programming-clipart-professional-software-developer-cartoon-vector-png-image_11064085.png" alt="" />
            </div>
        </div>
    );
}

export default Register;
