<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

// tokens 
use Laravel\Sanctum\HasApiTokens;

class Estudiante extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'Estudiante';

    protected $fillable = [
        'nombre',
        'correo',
        'contrasena',
        'numero',
        'pais',
        'rol'
    ];

    // Indica que el campo de contraseña es 'contrasena' y no 'password'
    public function getAuthPassword()
    {
        return $this->contrasena;
    }

    // Método para verificar si el estudiante es admin
    public function isAdmin()
    {
        return $this->rol === 'admin';
    }

    // Método para verificar si el estudiante es estudiante regular
    public function isEstudiante()
    {
        return $this->rol === 'estudiante';
    }
    
}
