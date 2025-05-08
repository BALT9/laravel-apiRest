<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;
use App\Models\Estudiante;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        // Validación de los datos
        $validator = Validator::make($request->all(), [
            'nombre' => 'required',
            'correo' => 'required|email',
            'contrasena' => 'required|same:cpassword',
            'numero' => 'required',
            'pais' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'mensaje' => 'Error en la validación de datos',
                'errores' => $validator->errors(),
                'estado' => 400
            ];
            return response()->json($data, 400);
        }

        // guardar
        $estudiante = new Estudiante();
        $estudiante->nombre = $request->nombre;
        $estudiante->correo = $request->correo;
        $estudiante->contrasena = bcrypt($request->contrasena);
        $estudiante->numero = $request->numero;
        $estudiante->pais = $request->pais;

        $estudiante->save();

        return response()->json(["mensaje" => "usuario registrado"], 201);
    }

    public function login(Request $request) {
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
    
        $user = Estudiante::where('correo', $request->correo)->first();
    
        if (!$user || !Hash::check($request->contrasena, $user->contrasena)) {
            return response()->json(["mensaje" => "Credenciales incorrectas"], 401);
        }
    
        Auth::login($user);
    
        return response()->json([
            "mensaje" => "Inicio de sesión exitoso",
            "usuario" => $user
        ], 200);
    }
    

    public function profile(){
        return response()->json(["mensaje" => "soy controllador"], 201);
    }

    public function logout(){
        
    }
}
