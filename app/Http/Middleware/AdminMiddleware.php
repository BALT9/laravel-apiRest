<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // Asegura que el usuario esté autenticado y tenga rol admin
        if (!$request->user() || !$request->user()->isAdmin()) {
            return response()->json([
                'mensaje' => 'Acceso no autorizado. Solo administradores.'
            ], 403);
        }

        return $next($request);
    }
}
