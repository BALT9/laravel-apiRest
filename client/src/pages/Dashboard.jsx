import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import EstudianteDashboard from '../components/Dashboard/EstudianteDashboard';

function Dashboard() {
    const { user, logout } = useAuth();
    const rol = user?.usuario?.rol;

    const { section } = useParams();  // captura el parámetro

    if (!rol) return <p>Cargando dashboard...</p>;

    return (
        <>
            {rol === 'admin' && <AdminDashboard user={user.usuario} logout={logout} section={section} />}
            {rol === 'estudiante' && <EstudianteDashboard user={user.usuario} logout={logout} section={section} />}
        </>
    );
}

export default Dashboard;
