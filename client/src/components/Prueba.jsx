import { useState, useEffect } from 'react';
import { perfil } from '../api/auth';

const Profile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Hacer la solicitud para obtener el perfil
        perfil()
            .then(response => {
                setUserProfile(response.data.usuario); // Suponiendo que 'usuario' es la respuesta
                setLoading(false);
            })
            .catch(error => {
                setError('Error al obtener el perfil');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Perfil del Usuario</h1>
            <p>Nombre: {userProfile.nombre}</p>
            <p>Email: {userProfile.correo}</p>
            <p>País: {userProfile.pais}</p>
            {/* Puedes agregar más campos según lo que necesites */}
        </div>
    );
};

export default Profile;
