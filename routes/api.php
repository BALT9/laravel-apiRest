<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/auth/register', [AuthController::class, "register"]);
Route::post('/auth/login', [AuthController::class, "login"]);
Route::get('/auth/profile', [AuthController::class, "profile"])->middleware('auth:sanctum');
Route::post('/auth/logout', [AuthController::class, "logout"])->middleware('auth:sanctum');

Route::get('/auth/verifyToken', [AuthController::class, "verifyToken"])->middleware('auth:sanctum');



