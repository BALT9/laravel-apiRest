// CursoCompletoForm.jsx
import { useForm, useFieldArray } from 'react-hook-form';

function CursoForm() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      lo_que_aprenderas: [""],
      temario: [{ modulo: "", video: "" }],
      requisitos: [""],
      horarios: [{ dia: "", hora: "" }],
      soporte: { tipo: "", canal: "" },
    }
  });

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

  const onSubmit = (data) => {
    console.log("📤 Datos enviados al backend:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <h2>Formulario de Curso</h2>

      <label>Nombre:</label>
      <input {...register("nombre", { required: true })} />

      <label>Descripción:</label>
      <textarea {...register("descripcion", { required: true })} />

      <label>Docente:</label>
      <input {...register("docente", { required: true })} />

      <label>Fecha de inicio:</label>
      <input type="date" {...register("fecha_inicio", { required: true })} />

      <label>Modalidad:</label>
      <input {...register("modalidad", { required: true })} />

      <label>Duración:</label>
      <input {...register("duracion", { required: true })} />

      <label>Plataforma:</label>
      <input {...register("plataforma", { required: true })} />

      <label>Idioma:</label>
      <input {...register("idioma", { required: true })} />

      <label>Costo:</label>
      <input {...register("costo", { required: true })} />

      <label>
        <input type="checkbox" {...register("certificado")} />
        ¿Incluye certificado?
      </label>

      <label>
        <input type="checkbox" {...register("cupos_limitados")} />
        ¿Cupos limitados?
      </label>

      <h3>Lo que aprenderás</h3>
      {aprenderas.map((item, index) => (
        <div key={item.id}>
          <input {...register(`lo_que_aprenderas.${index}`)} />
          <button type="button" onClick={() => removeAprenderas(index)}>Eliminar</button>
        </div>
      ))}
      <button type="button" onClick={() => addAprenderas("")}>Agregar</button>

      <h3>Temario</h3>
      {temario.map((item, index) => (
        <div key={item.id}>
          <label>Módulo:</label>
          <input {...register(`temario.${index}.modulo`)} />
          <label>Video:</label>
          <input {...register(`temario.${index}.video`)} />
          <button type="button" onClick={() => removeTemario(index)}>Eliminar</button>
        </div>
      ))}
      <button type="button" onClick={() => addTemario({ modulo: "", video: "" })}>Agregar</button>

      <h3>Requisitos</h3>
      {requisitos.map((item, index) => (
        <div key={item.id}>
          <input {...register(`requisitos.${index}`)} />
          <button type="button" onClick={() => removeRequisito(index)}>Eliminar</button>
        </div>
      ))}
      <button type="button" onClick={() => addRequisito("")}>Agregar</button>

      <h3>Horarios</h3>
      {horarios.map((item, index) => (
        <div key={item.id}>
          <label>Día:</label>
          <input {...register(`horarios.${index}.dia`)} />
          <label>Hora:</label>
          <input {...register(`horarios.${index}.hora`)} />
          <button type="button" onClick={() => removeHorario(index)}>Eliminar</button>
        </div>
      ))}
      <button type="button" onClick={() => addHorario({ dia: "", hora: "" })}>Agregar</button>

      <h3>Soporte</h3>
      <label>Tipo:</label>
      <input {...register("soporte.tipo")} />
      <label>Canal:</label>
      <input {...register("soporte.canal")} />

      <br /><br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default CursoForm;
