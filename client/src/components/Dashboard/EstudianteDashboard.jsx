import dashboard from './dashboard.module.css';
import { useState } from 'react';

function EstudianteDashboard({ user, logout }) {

    const [isClosed, setIsClosed] = useState(false);

    const toggleSidebar = () => {
        setIsClosed(!isClosed);
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
                            <i className={`bx bx-home-alt ${dashboard.icon}`}></i>
                            <span className={`${dashboard.text} ${dashboard.nav_text}`}>DASHBOARD</span>
                        </li>
                        <li className={dashboard.nav_link}>
                            <a href="#">
                                <i className={`bx bx-book ${dashboard.icon}`}></i>
                                <span className={`${dashboard.text} ${dashboard.nav_text}`}>Mis Cursos</span>
                            </a>
                        </li>
                        <li className={dashboard.nav_link}>
                            <a href="#">
                                <i className={`bx bx-library ${dashboard.icon}`}></i>
                                <span className={`${dashboard.text} ${dashboard.nav_text}`}>Cursos Disponibles</span>
                            </a>
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
        </div>
    );
}

export default EstudianteDashboard;
