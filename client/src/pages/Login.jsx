import { useForm} from "react-hook-form"
import { loginRequest } from "../api/auth";

function Login(){

    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit( async(data) => {
        console.log(data);
        const res = await loginRequest(data);
        console.log(res);
        
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