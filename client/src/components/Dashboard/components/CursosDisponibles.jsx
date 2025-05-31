import { useEffect } from 'react';
import { useCursos } from '../../../../context/CursoContext';

import styles from './cursosdisponibles.module.css';

function CursosDisponibles() {
    const { getCursosPublic, curso, handleInscribirse } = useCursos();

    useEffect(() => {
        getCursosPublic();
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Cursos Disponibles para Inscripción</h2>
            <div className={styles.cardsGrid}>
                {curso?.data?.map((cursoItem) => (
                    <div key={cursoItem.id} className={styles.card}>
                        <img
                            src={
                                cursoItem.imagen ||
                                'https://wallpapercave.com/wp/wp11346423.jpg'
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
        </div>
    );
}

export default CursosDisponibles;
