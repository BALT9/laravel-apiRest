import { useAuth } from "../../context/AuthContext";


function Profile(){

    const {user,logout} = useAuth();

    return(
        <>
            <h1>soy Profile</h1>
            <p>bienvenido</p>
            <button onClick={logout}>Cerrar sesion</button>
            
        </>
    )
}

export default Profile;