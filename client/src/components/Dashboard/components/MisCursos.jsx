import styles from './miscursos.module.css';

function MisCursos() {
    const cursosInscritos = [
        {
            id: 1,
            nombre: 'Curso de React',
            descripcion: 'Aprende React desde cero',
            duracion: '40 horas',
            imagen: 'https://via.placeholder.com/300x150?text=React',
        },
        {
            id: 2,
            nombre: 'Curso de Python',
            descripcion: 'Automatización con Python',
            duracion: '35 horas',
            imagen: 'https://via.placeholder.com/300x150?text=Python',
        },
    ];

    const handleVerCurso = (curso) => {
        alert(`Abriendo contenido de: ${curso.nombre}`);
        // Aquí podrías usar navigate(`/curso/${curso.id}`) si usas React Router
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Mis Cursos Disponibles</h2>
            <div className={styles.cardsGrid}>
                {cursosInscritos.map((curso) => (
                    <div key={curso.id} className={styles.card}>
                        <img src={curso.imagen} alt={curso.nombre} className={styles.image} />
                        <h3>{curso.nombre}</h3>
                        <p>{curso.descripcion}</p>
                        <span className={styles.duracion}>{curso.duracion}</span>
                        <button
                            className={styles.verCurso}
                            onClick={() => handleVerCurso(curso)}
                        >
                            Ver Curso
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MisCursos;
