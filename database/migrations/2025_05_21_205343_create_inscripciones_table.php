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
        Schema::create('inscripciones', function (Blueprint $table) {
            $table->id();
            
            // Crea una columna de clave foránea para la relación con la tabla "estudiantes"
            $table->foreignId('estudiante_id')
                ->constrained()   // Se relaciona con la tabla "estudiantes"
                ->onDelete('cascade');  // Si se elimina un estudiante, se eliminan sus inscripciones

            // Crea una columna de clave foránea para la relación con la tabla "cursos"
            $table->foreignId('curso_id')
                ->constrained()   // Se relaciona con la tabla "cursos"
                ->onDelete('cascade');  // Si se elimina un curso, se eliminan las inscripciones asociadas

            // Añade las columnas created_at y updated_at automáticamente
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inscripciones');
    }
};
