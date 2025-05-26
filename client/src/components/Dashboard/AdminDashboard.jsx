import { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboard from './dashboard.module.css';

// Componente de ejemplo para el panel de administración
function PanelAdministracion() {
    return <div>Contenido del Panel de Administración</div>;
}

function GestionarUsuarios() {
    return <div>Gestión de Usuarios</div>;
}

function AdminDashboard({ user, logout, section }) {
    const [isClosed, setIsClosed] = useState(false);

    const toggleSidebar = () => {
        setIsClosed(!isClosed);
    };

    // Renderizar contenido dinámico según el parámetro
    const renderSection = () => {
        switch (section) {
            case 'panel':
                return <PanelAdministracion />;
            case 'usuarios':
                return <GestionarUsuarios />;
            default:
                return <PanelAdministracion />;
        }
    };

    return (
        <div className={dashboard.container}>
            <nav className={`${dashboard.sidebar} ${isClosed ? dashboard.close : ''}`}>
                <header>
                    <div className={dashboard.image_text}>
                        <span className={dashboard.image}>
                            <img src="https://images.vexels.com/media/users/3/142860/isolated/lists/3b874e1bacfab0d586c5534cc0c9b637-logo-cuadrado-azul-estrella.png" alt="logo" />
                        </span>
                        <div className={`${dashboard.text} ${dashboard.header_text}`}>
                            <span className={dashboard.name}>CodeBalt</span>
                            <span className={dashboard.profession}>Administrador</span>
                        </div>
                    </div>
                    <i
                        className={`bx bx-chevron-right ${dashboard.toggle}`}
                        onClick={toggleSidebar}
                        style={{ cursor: 'pointer' }}
                    ></i>
                </header>

                <div className={dashboard.menu_bar}>
                    <div className={dashboard.menu}>
                        <li className={dashboard.nav_link}>
                            <i className={`bx bx-home-alt ${dashboard.icon}`}></i>
                            <span className={`${dashboard.text} ${dashboard.nav_text}`}>DASHBOARD</span>
                        </li>
                        <li className={dashboard.nav_link}>
                            <Link to="/dashboard/panel" className={dashboard.link}>
                                <i className={`bx bx-cog ${dashboard.icon}`}></i>
                                <span className={`${dashboard.text} ${dashboard.nav_text}`}>Panel de Administración</span>
                            </Link>
                        </li>
                        <li className={dashboard.nav_link}>
                            <Link to="/dashboard/usuarios" className={dashboard.link}>
                                <i className={`bx bx-user ${dashboard.icon}`}></i>
                                <span className={`${dashboard.text} ${dashboard.nav_text}`}>Gestionar Usuarios</span>
                            </Link>
                        </li>
                    </div>

                    <div className={dashboard.logout}>
                        <li className={dashboard.nav_logout}>
                            <button onClick={logout}>
                                <i className={`bx bx-log-out ${dashboard.icon}`}></i>
                                <span className={`${dashboard.text} ${dashboard.nav_text}`}>Logout</span>
                            </button>
                        </li>
                    </div>
                </div>
            </nav>

            <section className={dashboard.home}>
                <div className={dashboard.text}>Hola, {user.nombre}</div>
                {renderSection()}
            </section>
        </div>
    );
}

export default AdminDashboard;
