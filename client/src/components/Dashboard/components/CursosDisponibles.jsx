import styles from './cursosdisponibles.module.css';

function CursosDisponibles() {
    // Cursos simulados
    const cursos = [
        {
            id: 1,
            nombre: 'Curso de React',
            descripcion: 'Aprende React desde cero',
            duracion: '40 horas',
            imagen: 'https://via.placeholder.com/300x150?text=React',
        },
        {
            id: 2,
            nombre: 'Curso de JavaScript',
            descripcion: 'Domina JS moderno',
            duracion: '30 horas',
            imagen: 'https://via.placeholder.com/300x150?text=JavaScript',
        },
        {
            id: 3,
            nombre: 'Curso de Python',
            descripcion: 'Automatización con Python',
            duracion: '35 horas',
            imagen: 'https://via.placeholder.com/300x150?text=Python',
        },
        {
            id: 3,
            nombre: 'Curso de Python',
            descripcion: 'Automatización con Python',
            duracion: '35 horas',
            imagen: 'https://via.placeholder.com/300x150?text=Python',
        },
        {
            id: 3,
            nombre: 'Curso de Python',
            descripcion: 'Automatización con Python',
            duracion: '35 horas',
            imagen: 'https://via.placeholder.com/300x150?text=Python',
        },
        {
            id: 3,
            nombre: 'Curso de Python',
            descripcion: 'Automatización con Python',
            duracion: '35 horas',
            imagen: 'https://via.placeholder.com/300x150?text=Python',
        },
    ];

    const handleInscribirse = (curso) => {
        alert(`Te has inscrito en: ${curso.nombre}`);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Cursos Disponibles para Inscripción</h2>

            <div className={styles.cardsGrid}>
                {cursos.map((curso) => (
                    <div key={curso.id} className={styles.card}>
                        <img src={curso.imagen} alt={curso.nombre} className={styles.image} />
                        <h3>{curso.nombre}</h3>
                        <p>{curso.descripcion}</p>
                        <span className={styles.duracion}>{curso.duracion}</span>
                        <button
                            className={styles.inscribirse}
                            onClick={() => handleInscribirse(curso)}
                        >
                            Inscribirse
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CursosDisponibles;
