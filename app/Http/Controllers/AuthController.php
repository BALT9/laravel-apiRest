<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;
use App\Models\Estudiante;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required',
            'correo' => 'required|email|unique:Estudiante,correo',
            'contrasena' => 'required|same:cpassword',
            'cpassword' => 'required',
            'numero' => 'required',
            'pais' => 'required',
            'rol' => 'required|in:estudiante,admin'
        ], [
            'correo.unique' => 'El correo ya existe.',
            'correo.required' => 'El correo es obligatorio.',
            'contrasena.same' => 'Las contraseñas no coinciden.',
            'contrasena.required' => 'La contraseña es obligatoria.',
            'cpassword.required' => 'La confirmación de contraseña es obligatoria.'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'mensaje' => 'Error en la validación de datos',
                'errores' => $validator->errors(),
                'estado' => 400
            ], 400);
        }

        // Guardar el estudiante
        $estudiante = new Estudiante();
        $estudiante->nombre = $request->nombre;
        $estudiante->correo = $request->correo;
        $estudiante->contrasena = bcrypt($request->contrasena);
        $estudiante->numero = $request->numero;
        $estudiante->pais = $request->pais;
        $estudiante->rol = $request->rol;
        $estudiante->save();

        $token = $estudiante->createToken('Token_Estudiante')->plainTextToken;

        return response()->json([
            "mensaje" => "Usuario registrado",
            "access_token" => $token,
            "usuario" => $estudiante
        ], 201);
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "correo" => "required|email",
            "contrasena" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'mensaje' => 'Error en la validación de datos',
                'errores' => $validator->errors(),
                'estado' => 400
            ], 400);
        }

        // Verificar si el usuario existe
        $user = Estudiante::where('correo', $request->correo)->first();

        if (!$user || !Hash::check($request->contrasena, $user->contrasena)) {
            return response()->json(["mensaje" => "Credenciales incorrectas"], 401);
        }

        // Crear el token para el usuario autenticado
        $token = $user->createToken('Token Auth')->plainTextToken;

        // Retornar el token junto con los datos del usuario
        return response()->json([
            "mensaje" => "Inicio de sesión exitoso",
            "access_token" => $token,
            "usuario" => $user
        ], 200);
    }



    // Método para obtener el perfil del usuario autenticado
    public function profile(Request $request)
    {
        // Obtener el usuario autenticado
        $user = $request->user();  // También puedes usar auth()->user()

        // Retornar el perfil del usuario en la respuesta
        return response()->json([
            "mensaje" => "Perfil del usuario",
            "usuario" => $user
        ], 200);
    }

    // Método para cerrar sesión (logout)
    public function logout(Request $request)
    {
        // Eliminar todos los tokens del usuario
        $request->user()->tokens()->delete();

        // Retornar mensaje de éxito
        return response()->json([
            "mensaje" => "Sesión cerrada con éxito"
        ], 200);
    }

    public function verifyToken(Request $request)
    {
        $user = $request->user(); // Esto obtiene el usuario autenticado desde el token

        if ($user) {
            return response()->json([
                "valido" => true,
                "mensaje" => "Token válido",
                "usuario" => $user
            ], 200);
        }

        return response()->json([
            "valido" => false,
            "mensaje" => "Token inválido o expirado"
        ], 401);
    }
}
