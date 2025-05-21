<?php

namespace App\Http\Controllers;

use App\Models\Inscripcion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InscripcionController extends Controller
{
    public function inscribirme(Request $request)
{
    // Validar que el curso existe
    $request->validate([
        'curso_id' => 'required|exists:cursos,id',
    ]);

    $estudiante_id = Auth::id(); // Obtener el ID del estudiante autenticado

    try {
        // Verificar si ya está inscrito
        $yaInscrito = Inscripcion::where('estudiante_id', $estudiante_id)
            ->where('curso_id', $request->curso_id)
            ->exists();

        if ($yaInscrito) {
            return response()->json([
                'message' => 'Ya estás inscrito en este curso.'
            ], 409);
        }

        // Crear la inscripción
        $inscripcion = Inscripcion::create([
            'estudiante_id' => $estudiante_id,
            'curso_id' => $request->curso_id,
        ]);

        return response()->json([
            'message' => 'Inscripción exitosa.',
            'inscripcion' => $inscripcion
        ], 201);

    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Hubo un error al intentar inscribirte. Por favor, intenta más tarde.',
            'error' => $e->getMessage()
        ], 500);
    }
}

}
