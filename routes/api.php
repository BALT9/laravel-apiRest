<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Middleware\AdminMiddleware;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CursoController;
use App\Http\Controllers\InscripcionController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/auth/register', [AuthController::class, "register"]);
Route::post('/auth/login', [AuthController::class, "login"]);
Route::get('/auth/profile', [AuthController::class, "profile"])->middleware('auth:sanctum');
Route::post('/auth/logout', [AuthController::class, "logout"])->middleware('auth:sanctum');

Route::get('/auth/verifyToken', [AuthController::class, "verifyToken"])->middleware('auth:sanctum');

// Rutas Cursos publicas
Route::get('/auth/cursospublicos', [CursoController::class, "index"]);
// Rutas Cursos admin
Route::middleware(['auth:sanctum', AdminMiddleware::class])->group(function () {
    Route::get('/auth/cursos', [CursoController::class, 'index']);       // Listar cursos
    Route::post('/auth/cursos', [CursoController::class, 'store']);      // Crear curso
    Route::get('/auth/cursos/{id}', [CursoController::class, 'show']);   // Ver curso específico
    Route::put('/auth/cursos/{id}', [CursoController::class, 'update']); // Actualizar curso
    Route::delete('/auth/cursos/{id}', [CursoController::class, 'destroy']); // Eliminar curso
});

// para el estudiante 
Route::get('/auth/inscripciones', [InscripcionController::class, "misCursos"])->middleware('auth:sanctum');
Route::post('/auth/inscripcion', [InscripcionController::class, "inscribirme"])->middleware('auth:sanctum');