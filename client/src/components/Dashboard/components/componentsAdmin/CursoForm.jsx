import { useForm, useFieldArray } from 'react-hook-form';

import { useCursos } from '../../../../../context/CursoContext';

import styles from './CursoForm.module.css';
import { useEffect } from 'react';

function CursoForm({ isOpen, onClose, onCursoCreado, cursoEditar = null }) {

    const { createCursos, curso, updateCurso } = useCursos();

    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            lo_que_aprenderas: [""],
            temario: [{ modulo: "", video: "" }],
            requisitos: [""],
            horarios: [{ dia: "", hora: "" }],
            soporte: { tipo: "", canal: "" },
        }
    });


    useEffect(() => {
        if (cursoEditar) {
            const fechaFormateada = cursoEditar.fecha_inicio
                ? cursoEditar.fecha_inicio.split("T")[0]
                : "";

            reset({
                ...cursoEditar,
                fecha_inicio: fechaFormateada,
            });
        }
    }, [cursoEditar, reset]);

    const { fields: aprenderas, append: addAprenderas, remove: removeAprenderas } = useFieldArray({
        control,
        name: "lo_que_aprenderas",
    });

    const { fields: temario, append: addTemario, remove: removeTemario } = useFieldArray({
        control,
        name: "temario",
    });

    const { fields: requisitos, append: addRequisito, remove: removeRequisito } = useFieldArray({
        control,
        name: "requisitos",
    });

    const { fields: horarios, append: addHorario, remove: removeHorario } = useFieldArray({
        control,
        name: "horarios",
    });

    const onSubmit = async (data) => {
        try {
            if (cursoEditar) {
                // 👇 Aquí deberías tener una función updateCurso (aún falta crearla)
                await updateCurso(cursoEditar.id, data);
            } else {
                await createCursos(data);
            }

            onCursoCreado?.(); // refresca lista y cierra modal
        } catch (error) {
            console.error("Error al guardar curso:", error);
        }
    };


    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.modalClose} onClick={onClose}>✖</button>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.formularioCurso}>
                    {/* Información básica */}
                    <div className={styles.fieldGroup}>
                        <label>Nombre Curso:</label>
                        <input {...register("nombre", { required: true })} />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label>Docente:</label>
                        <input {...register("docente", { required: true })} />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label>Imagen del curso (URL):</label>
                        <input
                            type="text"
                            placeholder="https://example.com/imagen.jpg"
                            {...register("imagen")}
                        />
                    </div>


                    <div className={styles.fieldGroup}>
                        <label>Fecha de inicio:</label>
                        <input type="date" {...register("fecha_inicio", { required: true })} />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label>Modalidad:</label>
                        <input {...register("modalidad", { required: true })} />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label>Duración:</label>
                        <input {...register("duracion", { required: true })} />
                    </div>

                    <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                        <label>Descripción:</label>
                        <textarea {...register("descripcion", { required: true })} />
                    </div>

                    {/* Sección: Lo que aprenderás */}
                    <div className={styles.sectionTitle}>Lo que aprenderás</div>
                    {aprenderas.map((_, index) => (
                        <div className={styles.fieldGroup} key={index}>
                            <input {...register(`lo_que_aprenderas.${index}`)} />
                            <button type="button" className={styles.removeButton} onClick={() => removeAprenderas(index)}>Eliminar</button>
                        </div>
                    ))}
                    <div className={styles.fullWidth}>
                        <button type="button" className={styles.addButton} onClick={() => addAprenderas("")}>Agregar</button>
                    </div>

                    {/* Sección: Temario */}
                    <div className={styles.sectionTitle}>Temario</div>
                    {temario.map((_, index) => (
                        <div className={styles.fieldGroup} key={index}>
                            <input placeholder="Módulo" {...register(`temario.${index}.modulo`)} />
                            <input placeholder="Video URL" {...register(`temario.${index}.video`)} />
                            <button type="button" className={styles.removeButton} onClick={() => removeTemario(index)}>Eliminar</button>
                        </div>
                    ))}
                    <div className={styles.fullWidth}>
                        <button type="button" className={styles.addButton} onClick={() => addTemario({ modulo: "", video: "" })}>Agregar</button>
                    </div>

                    {/* Sección: Requisitos */}
                    <div className={styles.sectionTitle}>Requisitos</div>
                    {requisitos.map((_, index) => (
                        <div className={styles.fieldGroup} key={index}>
                            <input {...register(`requisitos.${index}`)} />
                            <button type="button" className={styles.removeButton} onClick={() => removeRequisito(index)}>Eliminar</button>
                        </div>
                    ))}
                    <div className={styles.fullWidth}>
                        <button type="button" className={styles.addButton} onClick={() => addRequisito("")}>Agregar</button>
                    </div>

                    {/* Sección: Horarios */}
                    <div className={styles.sectionTitle}>Horarios</div>
                    {horarios.map((_, index) => (
                        <div className={styles.fieldGroup} key={index}>
                            <input placeholder="Día" {...register(`horarios.${index}.dia`)} />
                            <input placeholder="Hora" {...register(`horarios.${index}.hora`)} />
                            <button type="button" className={styles.removeButton} onClick={() => removeHorario(index)}>Eliminar</button>
                        </div>
                    ))}
                    <div className={styles.fullWidth}>
                        <button type="button" className={styles.addButton} onClick={() => addHorario({ dia: "", hora: "" })}>Agregar</button>
                    </div>

                    {/* Botones finales */}
                    <div className={styles.buttonRow}>
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CursoForm;
