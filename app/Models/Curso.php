<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    // Nombre de la tabla
    protected $table = 'cursos';

    // Campos que pueden ser asignados masivamente
    protected $fillable = [
        'nombre',
        'descripcion',
        'imagen',
        'fecha_inicio',
        'modalidad',
        'docente',
        'lo_que_aprenderas',
        'temario',
        'requisitos',
        'horarios',
        'duracion',
    ];

    // Casts para convertir automáticamente los campos JSON y fechas
    protected $casts = [
        'lo_que_aprenderas' => 'array',
        'temario' => 'array',
        'requisitos' => 'array',
        'horarios' => 'array',
        'fecha_inicio' => 'date',
    ];
}
