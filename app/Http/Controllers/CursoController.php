<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Curso;

class CursoController extends Controller
{
    // mostrar los cursos 
    public function index(Request $request)
    {
        try {
            $cursos = Curso::all();

            return response()->json([
                'message' => 'Cursos obtenidos correctamente',
                'data' => $cursos,
                'status' => 200
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al obtener los cursos',
                'error' => $e->getMessage(),
                'status' => 500
            ], 500);
        }
    }

    public function show(Request $request)
    {
        // Retornar el perfil del usuario en la respuesta
        return response()->json("controlador funcionando", 200);
    }

    // crea el curso 
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'docente' => 'required|string|max:255',
            'fecha_inicio' => 'nullable|date',
            'modalidad' => 'nullable|string|max:255',
            'lo_que_aprenderas' => 'nullable|array',
            'temario' => 'nullable|array',
            'requisitos' => 'nullable|array',
            'horarios' => 'nullable|array',
            'duracion' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validacion de datos',
                'errors' => $validator->errors(),
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        try {
            // Intentamos crear el curso
            $curso = Curso::create($request->all());

            // Si el curso no se crea por alguna razón (aunque esto es raro con Eloquent)
            if (!$curso) {
                return response()->json([
                    'message' => 'Error al crear el curso',
                    'status' => 500
                ], 500);
            }

            // Si todo va bien, retornamos una respuesta exitosa
            return response()->json([
                'message' => 'Curso creado exitosamente',
                'curso' => $curso
            ], 201);
        } catch (\Exception $e) {
            // Si ocurre una excepción, capturamos el error
            return response()->json([
                'message' => 'Hubo un error al crear el curso. Detalles: ' . $e->getMessage(),
                'status' => 500
            ], 500);
        }
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
