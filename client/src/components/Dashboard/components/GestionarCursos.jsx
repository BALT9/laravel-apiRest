import { useEffect, useState } from 'react';
import styles from './gestionarcursos.module.css';

import { useCursos } from '../../../../context/CursoContext';

function GestionarCursos() {
    const [showForm, setShowForm] = useState(false);

    const { getCursos, getCursosPublic, curso } = useCursos();

    useEffect(() => {
        getCursos();
        getCursosPublic();
        console.log('hola di', curso)
    }, []);


    const handleCreate = () => setShowForm(true);
    const handleClose = () => setShowForm(false);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Gestión de Cursos</h2>
            <button className={styles.createButton} onClick={handleCreate}>
                + Crear Curso
            </button>

            <div className={styles.cardsGrid}>
                {curso?.data?.map((curso) => (
                    <div key={curso.id} className={styles.card}>
                        <img
                            src={curso.imagen || 'https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2F10_Great_Sites_Built_with_Laravel_Framework_0e893c2354.jpg&w=4500&q=90'}
                            alt={curso.nombre}
                            className={styles.image}
                        />
                        <h3>{curso.nombre}</h3>
                        <p>{curso.descripcion}</p>
                        <span className={styles.duracion}>{curso.duracion}</span>
                        <div className={styles.cardActions}>
                            <button className={styles.edit}>Editar</button>
                            <button className={styles.delete}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>


            {showForm && (
                <div className={styles.modal}>
                    <div className={styles.formContainer}>
                        <h3>Crear / Editar Curso</h3>
                        <form>
                            <label>
                                Nombre del curso:
                                <input type="text" />
                            </label>
                            <label>
                                Descripción:
                                <textarea />
                            </label>
                            <label>
                                Duración (horas):
                                <input type="number" />
                            </label>
                            <label>
                                URL de la imagen:
                                <input type="text" placeholder="https://..." />
                            </label>
                            <div className={styles.formActions}>
                                <button type="submit">Guardar</button>
                                <button type="button" onClick={handleClose}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <pre>{JSON.stringify(curso, null, 2)}</pre>
        </div>
    );
}

export default GestionarCursos;
