import { useEffect } from 'react';
import { useCursos } from '../../../../context/CursoContext';

import styles from './miscursos.module.css';

function MisCursos() {
    const { misCursos, getMisCursos } = useCursos();

    useEffect(() => {
        getMisCursos();
    }, []);

    const handleVerCurso = (curso) => {
        alert(`Abriendo contenido de: ${curso.nombre}`);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Mis Cursos Inscritos</h2>
            <div className={styles.cardsGrid}>
                {misCursos.length === 0 && <p>No estás inscrito en ningún curso.</p>}
                {misCursos.map((curso) => (
                    <div key={curso.id} className={styles.card}>
                        <img
                            src={curso.imagen || 'https://via.placeholder.com/300x150?text=Sin+Imagen'}
                            alt={curso.nombre}
                            className={styles.image}
                        />
                        <h3>{curso.nombre}</h3>
                        <p>{curso.descripcion || curso.lo_que_aprenderas?.join(', ')}</p>
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
