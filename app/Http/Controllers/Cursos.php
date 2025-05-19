<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Cursos extends Controller
{
    // mostrar los cursos 
    public function index(Request $request)
    {
        // Retornar el perfil del usuario en la respuesta
        return response()->json("controlador funcionando", 200);
    }

    public function show(Request $request)
    {
        // Retornar el perfil del usuario en la respuesta
        return response()->json("controlador funcionando", 200);
    }

    public function store(Request $request)
    {
        // Retornar el perfil del usuario en la respuesta
        return response()->json("controlador funcionando", 200);
    }

    public function update(Request $request)
    {
        // Retornar el perfil del usuario en la respuesta
        return response()->json("controlador funcionando", 200);
    }

    public function destroy(Request $request)
    {
        // Retornar el perfil del usuario en la respuesta
        return response()->json("controlador funcionando", 200);
    }
}
