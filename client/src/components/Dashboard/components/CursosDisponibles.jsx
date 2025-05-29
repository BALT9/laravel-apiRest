import { useEffect } from 'react';
import { useCursos } from '../../../../context/CursoContext';

import styles from './cursosdisponibles.module.css';

function CursosDisponibles() {
    const { getCursos, getCursosPublic, curso } = useCursos();

    useEffect(() => {
        // getCursos();
        getCursosPublic();
        console.log('Cursos cargados:', curso);
    }, []);

    const handleInscribirse = (curso) => {
        alert(`Te has inscrito en: ${curso.nombre}`);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Cursos Disponibles para Inscripción</h2>
            <div className={styles.cardsGrid}>
                {curso?.data?.map((cursoItem) => (
                    <div key={cursoItem.id} className={styles.card}>
                        <img
                            src={
                                cursoItem.imagen ||
                                'https://via.placeholder.com/300x150?text=Sin+Imagen'
                            }
                            alt={cursoItem.nombre}
                            className={styles.image}
                        />
                        <h3>{cursoItem.nombre}</h3>
                        <p>{cursoItem.descripcion}</p>
                        <span className={styles.duracion}>{cursoItem.duracion}</span>
                        <button
                            className={styles.inscribirse}
                            onClick={() => handleInscribirse(cursoItem)}
                        >
                            Inscribirse
                        </button>
                    </div>
                ))}
            </div>
            {/* <pre>{JSON.stringify(curso, null, 2)}</pre> */}
        </div>
    );
}

export default CursosDisponibles;
