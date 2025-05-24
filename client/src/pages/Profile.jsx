import { useAuth } from "../../context/AuthContext";


function Profile(){

    const {user,logout} = useAuth();
    console.log(user.usuario.nombre);

    return(
        <>
            <h1>soy Profile</h1>
            <p>bienvenida {user.usuario.nombre}</p>
            <button onClick={logout}>Cerrar sesion</button>
            
        </>
    )
}

export default Profile;