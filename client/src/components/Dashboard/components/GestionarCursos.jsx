import { useState } from 'react';
import styles from './gestionarcursos.module.css';

function GestionarCursos() {
    const [showForm, setShowForm] = useState(false);

    // Datos simulados
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
            id: 2,
            nombre: 'Curso de JavaScript',
            descripcion: 'Domina JS moderno',
            duracion: '30 horas',
            imagen: 'https://via.placeholder.com/300x150?text=JavaScript',
        },
        {
            id: 2,
            nombre: 'Curso de JavaScript',
            descripcion: 'Domina JS moderno',
            duracion: '30 horas',
            imagen: 'https://via.placeholder.com/300x150?text=JavaScript',
        },
        {
            id: 2,
            nombre: 'Curso de JavaScript',
            descripcion: 'Domina JS moderno',
            duracion: '30 horas',
            imagen: 'https://via.placeholder.com/300x150?text=JavaScript',
        },
        {
            id: 2,
            nombre: 'Curso de JavaScript',
            descripcion: 'Domina JS moderno',
            duracion: '30 horas',
            imagen: 'https://via.placeholder.com/300x150?text=JavaScript',
        },
    ];

    const handleCreate = () => setShowForm(true);
    const handleClose = () => setShowForm(false);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Gestión de Cursos</h2>
            <button className={styles.createButton} onClick={handleCreate}>
                + Crear Curso
            </button>

            <div className={styles.cardsGrid}>
                {cursos.map((curso) => (
                    <div key={curso.id} className={styles.card}>
                        <img src={curso.imagen} alt={curso.nombre} className={styles.image} />
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
        </div>
    );
}

export default GestionarCursos;
