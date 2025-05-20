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
        Schema::create('cursos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->text('descripcion')->nullable();
            $table->string('imagen')->nullable();
            $table->date('fecha_inicio')->nullable();
            $table->string('modalidad')->nullable();
            $table->string('docente')->nullable();
            $table->json('lo_que_aprenderas')->nullable();
            $table->json('temario')->nullable(); // Aquí va la lista de temas, con video incluido
            $table->json('requisitos')->nullable();
            $table->json('horarios')->nullable();
            $table->string('duracion')->nullable();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cursos');
    }
};
