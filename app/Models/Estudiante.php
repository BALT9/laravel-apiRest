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
        'pais'
    ];

    // Indica que el campo de contraseña es 'contrasena' y no 'password'
    public function getAuthPassword()
    {
        return $this->contrasena;
    }
}
