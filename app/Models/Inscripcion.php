<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscripcion extends Model
{
    use HasFactory;

    protected $table = 'inscripciones';

    protected $fillable = [
        'estudiante_id',
        'curso_id',
    ];

    // Relación: una inscripción pertenece a un estudiante (usuario)
    public function estudiante()
    {
        return $this->belongsTo(User::class, 'estudiante_id');
    }

    // Relación: una inscripción pertenece a un curso
    public function curso()
    {
        return $this->belongsTo(Curso::class);
    }
}
