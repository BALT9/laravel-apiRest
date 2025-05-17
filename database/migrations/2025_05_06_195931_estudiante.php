<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Estudiante', function(Blueprint $table){
            $table->id();
            $table->string('nombre');
            $table->string('correo')->unique();
            $table->string('contrasena');
            $table->string('numero');
            $table->string('pais');
            $table->string('rol')->default('estudiante');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
