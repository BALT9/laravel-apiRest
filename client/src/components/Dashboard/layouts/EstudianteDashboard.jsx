import { useState } from 'react';
import { Link } from 'react-router-dom';
import MisCursos from '../components/MIsCursos';
import CursosDisponibles from '../components/CursosDisponibles';

import dashboard from './dashboard.module.css';

// Componentes simulados

function EstudianteDashboard({ user, logout, section }) {
    const [isClosed, setIsClosed] = useState(false);

    const toggleSidebar = () => {
        setIsClosed(!isClosed);
    };

    const renderSection = () => {
        switch (section) {
            case 'mis-cursos':
                return <MisCursos />;
            case 'cursos':
                return <CursosDisponibles />;
            default:
                return <MisCursos />;
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
                            <span className={dashboard.profession}>Estudiante</span>
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
                            <Link to="/dashboard/mis-cursos" className={dashboard.link}>
                                <i className={`bx bx-book ${dashboard.icon}`}></i>
                                <span className={`${dashboard.text} ${dashboard.nav_text}`}>Mis Cursos</span>
                            </Link>
                        </li>
                        <li className={dashboard.nav_link}>
                            <Link to="/dashboard/cursos" className={dashboard.link}>
                                <i className={`bx bx-library ${dashboard.icon}`}></i>
                                <span className={`${dashboard.text} ${dashboard.nav_text}`}>Cursos Disponibles</span>
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
                {renderSection()}
            </section>
        </div>
    );
}

export default EstudianteDashboard;
