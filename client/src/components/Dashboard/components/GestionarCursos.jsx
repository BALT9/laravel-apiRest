import { useEffect, useState } from 'react';
import styles from './gestionarcursos.module.css';

import { useCursos } from '../../../../context/CursoContext';
import CursoForm from './componentsAdmin/CursoForm';

function GestionarCursos() {
    const [showForm, setShowForm] = useState(false);

    const [cursoEnEdicion, setCursoEnEdicion] = useState(null);

    const { getCursos, getCursosPublic, curso, deleteCurso, updateCurso } = useCursos();

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
                {curso?.data?.map((curso , index) => (
                    <div key={curso.id ?? index} className={styles.card}>
                        <img
                            src={curso.imagen || 'https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2F10_Great_Sites_Built_with_Laravel_Framework_0e893c2354.jpg&w=4500&q=90'}
                            alt={curso.nombre}
                            className={styles.image}
                        />
                        <h3>{curso.nombre}</h3>
                        <p>{curso.descripcion}</p>
                        <span className={styles.duracion}>{curso.duracion}</span>
                        <div className={styles.cardActions}>
                            <button
                                className={styles.edit}
                                onClick={() => {
                                    setCursoEnEdicion(curso); // pasa el curso a editar
                                    setShowForm(true);        // abre el formulario
                                }}
                            >
                                Editar
                            </button>
                            <button className={styles.delete} onClick={() => deleteCurso(curso.id)}>Eliminar</button>

                        </div>
                    </div>
                ))}
            </div>
            {showForm && (
                <CursoForm
                    isOpen={showForm}
                    onClose={() => {
                        setShowForm(false);
                        setCursoEnEdicion(null); // limpia el estado de edición
                    }}
                    onCursoCreado={() => {
                        getCursos();       // recarga cursos
                        setShowForm(false);
                        setCursoEnEdicion(null);
                    }}
                    cursoEditar={cursoEnEdicion} // ⬅ importante
                />
            )}

            {/* <pre>{JSON.stringify(curso, null, 2)}</pre> */}
        </div>
    );
}

export default GestionarCursos;
